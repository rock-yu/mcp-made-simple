import { useEffect, useState } from 'react';
import { GameItem } from '../api/model';
import { supabase, DbItem, isSupabaseConfigured } from '../lib/supabase';
import { DEMO_ITEMS } from '../api/dummy';
import { ItemCard } from './ItemCard';
import styles from './Inventory.module.css';

export function Inventory() {
  const [items, setItems] = useState<GameItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setItems(DEMO_ITEMS);
      setLoading(false);
      setError('Using demo data (Supabase not configured)');
      return;
    }
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      if (!supabase) throw new Error('Supabase client not initialized');
      
      const { data, error: dbError } = await supabase
        .from('items')
        .select('*')
        .order('created_at', { ascending: false });

      if (dbError) throw dbError;

      // Convert database items to our GameItem type
      const gameItems: GameItem[] = (data as DbItem[]).map(item => ({
        id: item.id,
        name: item.name,
        quantity: item.quantity,
        created_at: item.created_at
      }));

      setItems(gameItems);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Failed to fetch items');
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className={styles.loading}>Loading inventory...</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Game Inventory</h2>
      {error && (
        <div className={styles.notice}>
          <div className={styles.error}>
            <div className={styles.errorContent}>
              <span className={styles.statusIcon}>ℹ️</span>
              <span>{error}</span>
            </div>
            {!isSupabaseConfigured && (
              <button 
                className={styles.toggleButton}
                onClick={() => setShowInstructions(!showInstructions)}
              >
                {showInstructions ? 'Hide Setup' : 'Show Setup'}
              </button>
            )}
          </div>
          {!isSupabaseConfigured && showInstructions && (
            <div className={styles.help}>
              <p>Follow these steps to connect your database:</p>
              <ol>
                <li>Copy the environment template:
                  <pre className={styles.code}>cp .env.example .env</pre>
                </li>
                <li>Get your credentials from 
                  <a 
                    href="https://supabase.com/dashboard" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    {' Supabase Dashboard'}
                  </a>
                </li>
                <li>Update your <code>.env</code> file:
                  <pre className={styles.code}>
                    VITE_SUPABASE_URL=your-project-url{'\n'}
                    VITE_SUPABASE_ANON_KEY=your-anon-key
                  </pre>
                </li>
                <li>Restart the development server</li>
              </ol>
            </div>
          )}
        </div>
      )}
      <div className={styles.grid}>
        {items.map(item => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>
      {items.length === 0 && (
        <div className={styles.empty}>
          No items in inventory
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import { GameItem } from '../api/model';
import { ItemCard } from './ItemCard';
import { DEMO_ITEMS } from '../api/dummy';
import styles from './Inventory.module.css';
import { Database } from '../lib/database.types';

export function Inventory() {
  const [items, setItems] = useState<GameItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showInstructions, setShowInstructions] = useState(false);

  useEffect(() => {
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      setLoading(true);
      setError(null);

      // Check if Supabase is configured
      if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
        setItems(DEMO_ITEMS);
        setError('⚠️ Using demo data - Supabase not configured');
        return;
      }

      const { data, error: dbError } = await supabase
        .from('items')
        .select('*')
        .order('name');

      if (dbError) throw dbError;

      setItems(data || []);
    } catch (err) {
      console.error('Error fetching items:', err);
      setError('Failed to fetch items. Using demo data.');
      setItems(DEMO_ITEMS);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return <div className={styles.loading}>Loading...</div>;
  }

  return (
    <div className={styles.container}>
      {error && (
        <div className={styles.errorContainer}>
          <div className={styles.error}>
            <span>{error}</span>
            <button
              className={styles.infoButton}
              onClick={() => setShowInstructions(!showInstructions)}
            >
              ℹ️
            </button>
          </div>
          {showInstructions && (
            <div className={styles.instructions}>
              <h3>Setup Instructions:</h3>
              <ol>
                <li>Create a Supabase project at <a href="https://supabase.com" target="_blank" rel="noopener noreferrer">supabase.com</a></li>
                <li>Copy your project URL and anon key from the project settings</li>
                <li>Create a <code>.env</code> file in the app directory with:
                  <pre>
                    VITE_SUPABASE_URL=your-project-url
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
    </div>
  );
}

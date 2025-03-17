import { useEffect, useState } from 'react';
import { GameItem } from '../api/model';
import { DEMO_ITEMS } from '../api/dummy';
import { ItemCard } from './ItemCard';
import styles from './Inventory.module.css';

export function Inventory() {
  const [items, setItems] = useState<GameItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Initial fetch of items using MCP
    fetchItems();
  }, []);

  async function fetchItems() {
    try {
      // TODO: Replace with MCP tool call in Windsurf
      // Example MCP tool:
      // {
      //   name: "listGameItems",
      //   description: "List all items in the game inventory",
      //   parameters: {}
      // }
      setItems(DEMO_ITEMS);
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

  if (error) {
    return <div className={styles.error}>{error}</div>;
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Game Inventory</h2>
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

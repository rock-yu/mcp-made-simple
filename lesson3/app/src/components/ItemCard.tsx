import { GameItem } from '../api/model';
import styles from './ItemCard.module.css';

interface ItemCardProps {
  item: GameItem;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className={styles.card}>
      <h3 className={styles.name}>{item.name}</h3>
      <div className={styles.quantity}>Quantity: {item.quantity}</div>
    </div>
  );
}

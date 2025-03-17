import { GameItem, RARITY_COLORS } from '../api/model';
import styles from './ItemCard.module.css';

interface ItemCardProps {
  item: GameItem;
}

export function ItemCard({ item }: ItemCardProps) {
  return (
    <div className={styles.card} style={{ borderColor: RARITY_COLORS[item.rarity] }}>
      <h3 className={styles.name}>{item.name}</h3>
      <div className={styles.quantity}>Quantity: {item.quantity}</div>
      <div 
        className={styles.rarity}
        style={{ backgroundColor: RARITY_COLORS[item.rarity] }}
      >
        {item.rarity.toUpperCase()}
      </div>
    </div>
  );
}

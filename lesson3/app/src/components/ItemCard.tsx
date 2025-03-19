import { GameItem, RARITY_COLORS } from '../api/model';
import styles from './ItemCard.module.css';

interface ItemCardProps {
  item: GameItem;
}

export function ItemCard({ item }: ItemCardProps) {

  const cardClassName = `${styles.card} ${item.rarity ? styles[item.rarity] : styles.common}`;

  return (
    <div className={cardClassName}>
      <h3 className={styles.name}>{item.name}</h3>
      <div className={styles.quantity}>{item.quantity}</div>
    </div>
  );
}

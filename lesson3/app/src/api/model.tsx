// Game Item Types and Models
export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

export interface GameItem {
  id: string;
  name: string;
  quantity: number;
  rarity: ItemRarity;
  created_at: string;
}

// Rarity color mapping
export const RARITY_COLORS: Record<ItemRarity, string> = {
  common: '#9e9e9e',     // Gray
  uncommon: '#4caf50',   // Green
  rare: '#2196f3',       // Blue
  epic: '#9c27b0',       // Purple
  legendary: '#ff9800'   // Orange
};

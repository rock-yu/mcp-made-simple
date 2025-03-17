// Game Item Types and Models

/**
 * Stage 3: Adding Rarity and Customization
 *
 * In this stage, we enhance our game items with:
 * 1. Rarity levels (common to legendary)
 * 2. Visual customization based on rarity
 * 3. Sorting and filtering by rarity
 */

export type ItemRarity = 'common' | 'uncommon' | 'rare' | 'epic' | 'legendary';

// Rarity color mapping for UI customization
export const RARITY_COLORS: Record<ItemRarity, string> = {
  common: '#9d9d9d',     // Gray
  uncommon: '#1eff00',   // Green
  rare: '#0070dd',       // Blue
  epic: '#a335ee',       // Purple
  legendary: '#ff8000'   // Orange
};

// Rarity weights for random generation
export const RARITY_WEIGHTS = {
  common: 0.5,      // 50% chance
  uncommon: 0.25,   // 25% chance
  rare: 0.15,       // 15% chance
  epic: 0.07,       // 7% chance
  legendary: 0.03   // 3% chance
};


/**
 * Stage 1: Basic Game Item Model
 *
 * The core model for a game item.
 */
export interface GameItem {
  id: string;
  name: string;
  quantity: number;
  created_at: string;
  // rarity: ItemRarity; -- Part 3.
}

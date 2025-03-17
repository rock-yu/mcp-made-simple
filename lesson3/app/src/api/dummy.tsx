/**
 * Demo Data Evolution:
 *
 * Stage 1: Basic Items
 * - Simple items with id, name, quantity
 * - Used for initial React UI testing
 *
 * Stage 2: Database Ready
 * - Added created_at timestamps
 * - Matches Supabase schema
 *
 * Stage 3: Rarity System
 * - Added rarity levels to each item
 * - Balanced distribution of rarities
 * - Used for testing rarity-based features
 */

import { GameItem, ItemRarity } from './model';

// Demo items evolve through stages
export const DEMO_ITEMS: GameItem[] = [
  {
    // Stage 1: Basic properties
    id: '1',
    name: 'Wooden Sword',
    quantity: 1,
    // Stage 2: Database tracking
    created_at: new Date().toISOString(),
    // Stage 3: Rarity
    // rarity: 'common'
  },
  {
    id: '2',
    name: 'Health Potion',
    quantity: 5,
    created_at: new Date().toISOString(),
    // rarity: 'common'
  },
];

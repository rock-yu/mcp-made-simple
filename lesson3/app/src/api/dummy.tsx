/**
 * Stage 3: Demo Data with Rarity
 *
 * This file provides sample game items with rarity levels for testing
 * and development. Each item has a carefully chosen rarity that follows
 * typical game item distribution patterns.
 */

import { GameItem, ItemRarity } from './model';

export const DEMO_ITEMS: GameItem[] = [
  {
    id: '1',
    name: 'Wooden Sword',
    quantity: 1,
    rarity: 'common',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Iron Shield',
    quantity: 2,
    rarity: 'uncommon',
    created_at: new Date().toISOString()
  },
  {
    id: '3',
    name: 'Health Potion',
    quantity: 5,
    rarity: 'common',
    created_at: new Date().toISOString()
  },
  {
    id: '4',
    name: 'Magic Staff',
    quantity: 1,
    rarity: 'rare',
    created_at: new Date().toISOString()
  },
  {
    id: '5',
    name: 'Leather Armor',
    quantity: 3,
    rarity: 'uncommon',
    created_at: new Date().toISOString()
  },
  {
    id: '6',
    name: 'Dragon Scale Shield',
    quantity: 1,
    rarity: 'epic',
    created_at: new Date().toISOString()
  },
  {
    id: '7',
    name: 'Excalibur',
    quantity: 1,
    rarity: 'legendary',
    created_at: new Date().toISOString()
  },
  {
    id: '8',
    name: 'Mana Potion',
    quantity: 4,
    rarity: 'common',
    created_at: new Date().toISOString()
  },
  {
    id: '9',
    name: 'Phoenix Feather',
    quantity: 2,
    rarity: 'epic',
    created_at: new Date().toISOString()
  },
  {
    id: '10',
    name: 'Steel Dagger',
    quantity: 3,
    rarity: 'uncommon',
    created_at: new Date().toISOString()
  }
];

import { GameItem } from './model';

// Demo inventory data
export const DEMO_ITEMS: GameItem[] = [
  {
    id: '1',
    name: 'Magic Sword',
    quantity: 1,
    rarity: 'rare',
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Health Potion',
    quantity: 5,
    rarity: 'common',
    created_at: new Date().toISOString()
  }
];

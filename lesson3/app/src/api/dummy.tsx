import { GameItem } from './model';

// Demo inventory data
export const DEMO_ITEMS: GameItem[] = [
  {
    id: '1',
    name: 'Wooden Sword',
    quantity: 1,
    created_at: new Date().toISOString()
  },
  {
    id: '2',
    name: 'Health Potion',
    quantity: 5,
    created_at: new Date().toISOString()
  }
];

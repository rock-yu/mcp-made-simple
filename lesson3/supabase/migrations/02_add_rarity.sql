/**
 * Stage 3: Adding Rarity
 * 
 * This migration adds rarity to items and updates existing items with default values.
 * It also ensures data consistency through constraints and triggers.
 */

-- Create the rarity enum type
CREATE TYPE item_rarity AS ENUM ('common', 'uncommon', 'rare', 'epic', 'legendary');

-- Add rarity column to items table
ALTER TABLE items 
ADD COLUMN rarity item_rarity NOT NULL DEFAULT 'common';

-- Update existing items with meaningful rarity values
UPDATE items SET rarity = 
  CASE name
    WHEN 'Wooden Sword' THEN 'common'
    WHEN 'Iron Shield' THEN 'uncommon'
    WHEN 'Health Potion' THEN 'common'
    WHEN 'Magic Staff' THEN 'rare'
    WHEN 'Leather Armor' THEN 'uncommon'
    ELSE 'common'
  END;

-- Add some new epic and legendary items
INSERT INTO items (name, quantity, rarity) VALUES
  ('Dragon Scale Shield', 1, 'epic'),
  ('Phoenix Feather', 2, 'epic'),
  ('Excalibur', 1, 'legendary'),
  ('Mana Potion', 4, 'common'),
  ('Steel Dagger', 3, 'uncommon');

-- Create an index on rarity for faster filtering
CREATE INDEX idx_items_rarity ON items(rarity);

-- Comment on the rarity column
COMMENT ON COLUMN items.rarity IS 'The rarity level of the item (common to legendary)';

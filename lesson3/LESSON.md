# Lesson 3: Game Inventory with MCP and Supabase

This lesson demonstrates how to build a game inventory system that evolves from basic database operations to using MCP tools. We'll show both manual Supabase operations and MCP integration.

## Prerequisites
- Node.js and npm
- Supabase account
- IDE with MCP support (Windsurf recommended)
- Basic TypeScript knowledge

## Stage 1: Basic React Frontend

We start with a simple React app that will connect to our database:

### Data Model
```typescript
interface GameItem {
  id: string;
  name: string;
  quantity: number;
  created_at: string;
}
```

### Project Structure
```
app/
├── src/
│   ├── api/
│   │   ├── model.tsx   # Core types
│   │   └── dummy.tsx   # Demo data
│   └── components/     # React components
        ├── Inventory.tsx
        └── ItemCard.tsx
```

### Running the App
```bash
cd app
npm install
npm run dev
```

## Stage 2: Supabase Integration

### Database Setup

1. Optional: Reset Database
   If you want to start with a clean slate:
   - Navigate to the SQL editor in Supabase dashboard
   - Copy the contents of `supabase/migrations/00_reset_database.sql`
   - Run the SQL script to:
     - Drop all existing tables
     - Remove custom types and functions
     - Clear Row Level Security policies
     - Reset sequences

2. Create Tables and Policies
   - Copy the contents of `supabase/migrations/01_create_items_table.sql`
   - Run the SQL script to create:
     - Items table with proper constraints
     - Row Level Security policies
     - Initial sample data
     - Helpful indexes

### Environment Setup

1. Configure Environment Variables:
   ```bash
   # Copy the example env file
   cp .env.example .env

   # Edit .env and add your Supabase credentials
   VITE_SUPABASE_URL=your-project-url
   VITE_SUPABASE_ANON_KEY=your-anon-key
   ```

2. Restart Development Server:
   ```bash
   # Stop the current server (Ctrl+C)
   npm run dev
   ```

### Troubleshooting

If you see "Using demo data (Supabase not configured)" message:
1. Verify `.env` file exists in the `app` directory
2. Check that credentials are copied correctly from Supabase
3. Make sure there are no spaces around the `=` in `.env`
4. Restart the development server

### Database Schema
```sql
CREATE TABLE items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  quantity INTEGER NOT NULL CHECK (quantity >= 0),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now())
);
```

### Security Features
- Row Level Security (RLS) enabled
- Public read access
- Write access restricted to authenticated users
- Data validation through CHECK constraints

### TypeScript Integration
The `database.types.ts` file provides type safety:
```typescript
export interface Database {
  public: {
    Tables: {
      items: {
        Row: {
          id: string
          name: string
          quantity: number
          created_at: string
        }
        // ... Insert and Update types
      }
    }
  }
}
```

## Stage 3: MCP Integration

### Reading Data with MCP
Create MCP tools to analyze inventory:
```typescript
// Example MCP tool
{
  name: "summarizeInventory",
  description: "Get inventory statistics",
  parameters: {
    groupBy: "category" // optional
  }
}
```

### Key Features
- Total item count
- Items by category
- Inventory value calculation

## Stage 4: Schema Evolution

### Adding Rarity System
1. Modify table structure:
   ```sql
   ALTER TABLE items 
   ADD COLUMN rarity TEXT 
   CHECK (rarity IN ('common', 'uncommon', 'rare', 'epic', 'legendary'));
   ```

### MCP Tools for Updates
Create tools for:
- Adding new items with rarity
- Updating existing items
- Querying by rarity levels

## Learning Outcomes
1. Understand Supabase database operations
2. Master MCP tool creation and usage
3. Learn schema evolution best practices
4. Build real-world inventory management system

## Video Tutorial
Coming soon! This tutorial will be part of our MCP learning series.

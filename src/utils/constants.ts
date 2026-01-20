export const CATEGORIES = [
  'Food & Dining',
  'Transportation',
  'Housing',
  'Utilities',
  'Healthcare',
  'Entertainment',
  'Shopping',
  'Education',
  'Personal Care',
  'Savings',
  'Investments',
  'Other'
] as const;

export const CURRENCIES = [
  { code: 'USD', symbol: '$', name: 'US Dollar' },
  { code: 'EUR', symbol: '€', name: 'Euro' },
  { code: 'GBP', symbol: '£', name: 'British Pound' },
  { code: 'INR', symbol: '₹', name: 'Indian Rupee' },
  { code: 'CAD', symbol: 'C$', name: 'Canadian Dollar' },
  { code: 'AUD', symbol: 'A$', name: 'Australian Dollar' },
];

export const MONTHS = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

export const INITIAL_BUDGETS = [
  { id: '1', category: 'Food & Dining', budget: 300, spent: 250 },
  { id: '2', category: 'Transportation', budget: 150, spent: 120 },
  { id: '3', category: 'Housing', budget: 1000, spent: 1000 },
  { id: '4', category: 'Utilities', budget: 200, spent: 180 },
  { id: '5', category: 'Entertainment', budget: 100, spent: 80 },
];

export const INITIAL_EXPENSES = [
  { 
    id: '1', 
    category: 'Food & Dining', 
    amount: 45.50, 
    date: '2024-01-15', 
    description: 'Groceries at Walmart',
    note: 'Weekly grocery shopping'
  },
  { 
    id: '2', 
    category: 'Transportation', 
    amount: 60.00, 
    date: '2024-01-14', 
    description: 'Gas refill',
    note: 'Full tank'
  },
  { 
    id: '3', 
    category: 'Entertainment', 
    amount: 25.99, 
    date: '2024-01-13', 
    description: 'Netflix Subscription',
    note: 'Monthly subscription'
  },
  { 
    id: '4', 
    category: 'Utilities', 
    amount: 120.50, 
    date: '2024-01-12', 
    description: 'Electricity Bill',
    note: 'December bill'
  },
];
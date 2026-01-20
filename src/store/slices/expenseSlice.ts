import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Expense {
  id: string;
  category: string;
  amount: number;
  date: string;
  description: string;
  note?: string;
}

interface ExpenseState {
  expenses: Expense[];
}

const initialState: ExpenseState = {
  expenses: [],
};

const expenseSlice = createSlice({
  name: 'expenses',
  initialState,
  reducers: {
    addExpense: (state, action: PayloadAction<Expense>) => {
      state.expenses.push(action.payload);
    },
    updateExpense: (state, action: PayloadAction<Expense>) => {
      const index = state.expenses.findIndex(e => e.id === action.payload.id);
      if (index !== -1) {
        state.expenses[index] = action.payload;
      }
    },
    deleteExpense: (state, action: PayloadAction<string>) => {
      state.expenses = state.expenses.filter(e => e.id !== action.payload);
    },
  },
});

export const { addExpense, updateExpense, deleteExpense } = expenseSlice.actions;
export default expenseSlice.reducer;
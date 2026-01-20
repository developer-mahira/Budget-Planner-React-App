import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface BudgetItem {
  id: string;
  category: string;
  budget: number;
  spent: number;
}

interface BudgetState {
  budgets: BudgetItem[];
  monthlyIncome: number;
  savingsGoal: number;
}

const initialState: BudgetState = {
  budgets: [],
  monthlyIncome: 4000,
  savingsGoal: 20,
};

const budgetSlice = createSlice({
  name: 'budget',
  initialState,
  reducers: {
    addBudget: (state, action: PayloadAction<BudgetItem>) => {
      state.budgets.push(action.payload);
    },
    updateBudget: (state, action: PayloadAction<BudgetItem>) => {
      const index = state.budgets.findIndex(b => b.id === action.payload.id);
      if (index !== -1) {
        state.budgets[index] = action.payload;
      }
    },
    deleteBudget: (state, action: PayloadAction<string>) => {
      state.budgets = state.budgets.filter(b => b.id !== action.payload);
    },
    updateMonthlyIncome: (state, action: PayloadAction<number>) => {
      state.monthlyIncome = action.payload;
    },
    updateSavingsGoal: (state, action: PayloadAction<number>) => {
      state.savingsGoal = action.payload;
    },
  },
});

export const {
  addBudget,
  updateBudget,
  deleteBudget,
  updateMonthlyIncome,
  updateSavingsGoal,
} = budgetSlice.actions;

export default budgetSlice.reducer;
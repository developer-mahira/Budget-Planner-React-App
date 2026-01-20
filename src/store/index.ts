import { configureStore } from '@reduxjs/toolkit';
import budgetReducer from './slices/budgetSlice';
import expenseReducer from './slices/expenseSlice';
import userReducer from './slices/userSlice';

export const store = configureStore({
  reducer: {
    budget: budgetReducer,
    expenses: expenseReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
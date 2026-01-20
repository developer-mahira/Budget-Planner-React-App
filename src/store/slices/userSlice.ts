import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  name: string;
  email: string;
  monthlyIncome: number;
  budgetGoal: number;
  currency: string;
  darkMode: boolean;
}

const initialState: UserState = {
  name: 'John Doe',
  email: 'john@example.com',
  monthlyIncome: 4000,
  budgetGoal: 20,
  currency: 'USD',
  darkMode: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateProfile: (state, action: PayloadAction<Partial<UserState>>) => {
      return { ...state, ...action.payload };
    },
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
    updateCurrency: (state, action: PayloadAction<string>) => {
      state.currency = action.payload;
    },
  },
});

export const { updateProfile, toggleDarkMode, updateCurrency } = userSlice.actions;
export default userSlice.reducer;
import { userLocalStorage } from '@/utils/localstorage/localstorage';
import { UserType } from '@/utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type UserState = {
  user: UserType | null
};


  const initialState: UserState = {
 user: userLocalStorage() || null
};


export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
 profile: (state, action: PayloadAction<UserType>) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
  },
});

export const { profile } = userSlice.actions;

export default userSlice.reducer;
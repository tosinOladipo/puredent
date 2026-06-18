import { voterLocalStorage } from '@/utils/localstorage/localstorage';
import { VoterType } from '@/utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type VoterState = {
  voter: VoterType | null
};


  const initialState: VoterState = {
 voter: voterLocalStorage() || null
};


export const voterSlice = createSlice({
  name: 'voter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
 voterInfo: (state, action: PayloadAction<VoterType>) => {
      state.voter = action.payload;
      localStorage.setItem('voter', JSON.stringify(action.payload));
    },
  },
});

export const { voterInfo } = voterSlice.actions;

export default voterSlice.reducer;
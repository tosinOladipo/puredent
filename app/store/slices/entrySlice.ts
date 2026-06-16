import { EntryType, UploadType } from '@/utils/types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type EntryState = {
  allEntries: UploadType[] | null
};


  const initialState: EntryState = {
 allEntries:  null
};


export const entrySlice = createSlice({
  name: 'entries',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
 fetchEntries: (state, action: PayloadAction<UploadType[]>) => {
      state.allEntries = action.payload;
    },
  },
});

export const { fetchEntries } = entrySlice.actions;

export default entrySlice.reducer;
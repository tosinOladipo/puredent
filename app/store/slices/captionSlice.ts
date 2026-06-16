import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type CaptionType = {
  caption: string | null};


  const initialState: CaptionType = {
  caption: null
};


export const captionSlice = createSlice({
  name: 'caption',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCaption: (state, action: PayloadAction<CaptionType>) => {
      state.caption = action.payload.caption;
    },
  },
});

export const { setCaption } = captionSlice.actions;

export default captionSlice.reducer;
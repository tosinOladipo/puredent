import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type UploadType = {
  imgUpload: string | null};


  const initialState: UploadType = {
  imgUpload: null
};


export const uploadSlice = createSlice({
  name: 'imgUpload',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    upload: (state, action: PayloadAction<string>) => {
      state.imgUpload = action.payload;
    },
  },
});

export const { upload } = uploadSlice.actions;

export default uploadSlice.reducer;
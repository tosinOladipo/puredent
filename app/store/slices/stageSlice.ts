import { createSlice } from '@reduxjs/toolkit';

type StageType = {
   stage : "upload" | "caption" | "form" | "ai-reviw"
};


  const initialState: StageType = {
  stage : "caption"
};


export const stageSlice = createSlice({
  name: 'stage',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    uploadStage: (state) => {
      state.stage = "upload";
    },

    captionStage: (state) => {
      state.stage = "caption";
    },

    formStage: (state) => {
      state.stage = "form"
    }

  },
});

export const { uploadStage, captionStage, formStage } = stageSlice.actions;

export default stageSlice.reducer;
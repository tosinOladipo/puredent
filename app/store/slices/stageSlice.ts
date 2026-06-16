import { createSlice } from '@reduxjs/toolkit';

type StageType = {
   stage : "upload" | "caption" | "form" | "ai-review"
};


  const initialState: StageType = {
  stage : "upload"
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
    },

    aiStage: (state) => {
      state.stage = "ai-review"
    }

  },
});

export const { uploadStage, captionStage, formStage, aiStage } = stageSlice.actions;

export default stageSlice.reducer;
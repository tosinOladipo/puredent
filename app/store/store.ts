import { configureStore } from '@reduxjs/toolkit'
import imgUploadReducer from '@/app/store/slices/imageUploadSlice'
import stageReducer from '@/app/store/slices/stageSlice'

export const store = configureStore({
  reducer: {
    imgUpload: imgUploadReducer,
    stage: stageReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
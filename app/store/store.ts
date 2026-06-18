import { configureStore } from '@reduxjs/toolkit'
import imgUploadReducer from '@/app/store/slices/imageUploadSlice'
import stageReducer from '@/app/store/slices/stageSlice'
import userReducer from '@/app/store/slices/userSlice'
import voterReducer from '@/app/store/slices/voteSlice'
import captionReducer from '@/app/store/slices/captionSlice'
import entryReducer from '@/app/store/slices/entrySlice'

export const store = configureStore({
  reducer: {
    imgUpload: imgUploadReducer,
    stage: stageReducer,
    user: userReducer,
    voter: voterReducer,
    caption: captionReducer,
    entries: entryReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
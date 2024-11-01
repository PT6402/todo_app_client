import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo.slice";
export const store = configureStore({
  reducer: { todo: todoSlice },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: true,
      immutableCheck: true,
    }),
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

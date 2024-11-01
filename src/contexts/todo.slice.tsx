import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/TodoType";

interface TodoState {
  todos: Todo[];
}
const initialState: TodoState = {
  todos: [],
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoStore: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodoStore: (state, action: PayloadAction<number>) => {
      state.todos.filter(({ id }: Todo) => id != action.payload);
    },
    setTodoStore: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
  },
  extraReducers: () => {},
});
export const { addTodoStore, removeTodoStore, setTodoStore } =
  todoSlice.actions;
export default todoSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../types/TodoType";

interface TodoState {
  todos: Todo[];
  currentTodoEdit: Todo | undefined;
}
const initialState: TodoState = {
  todos: [],
  currentTodoEdit: undefined,
};
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodoStore: (state, action: PayloadAction<Todo>) => {
      state.todos.push(action.payload);
    },
    removeTodoStore: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter(({ id }: Todo) => id != action.payload);
    },
    setTodoStore: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload;
    },
    setCurrentTodoEditStore: (state, action: PayloadAction<number>) => {
      let item = undefined;
      if (action.payload != -1) {
        item = state.todos.find(({ id }: Todo) => id == action.payload);
      }
      state.currentTodoEdit = item;
    },
    updateTodoStore: (state, action: PayloadAction<Todo>) => {
      const newTodos = state.todos.map((todo) => {
        if (todo.id == action.payload.id) {
          todo.title = action.payload.title;
          todo.isCompleted = action.payload.isCompleted;
        }
        return todo;
      });
      state.todos = newTodos;
    },
  },
  extraReducers: () => {},
});
export const {
  addTodoStore,
  removeTodoStore,
  setTodoStore,
  setCurrentTodoEditStore,
  updateTodoStore,
} = todoSlice.actions;
export default todoSlice.reducer;

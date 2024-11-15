import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoItemModel } from "./todo";

interface TodoState {
  items: TodoItemModel[];
  loading: boolean;
  error: string | null;
}

const initialState: TodoState = {
  items: [],
  loading: false,
  error: null,
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, action: PayloadAction<TodoItemModel[]>) => {
      state.items = action.payload;
    },
    addTodo: (state, action: PayloadAction<TodoItemModel>) => {
      state.items.push(action.payload);
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const {
  setTodos,
  addTodo,
  deleteTodo,
  toggleTodo,
  setLoading,
  setError,
} = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

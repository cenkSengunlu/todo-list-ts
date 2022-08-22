import { configureStore, createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';
// import { LocalStorage } from "ts-localstorage";

interface Todo {
  id: string;
  status: boolean;
  text: string;
}


interface TodoSliceState {
  todos: Todo[];
  tabName: string;
  todoCount: number;
}


const initialState: TodoSliceState = {
  todos: [],
  tabName: 'active',
  todoCount: 0
};

export const todosSlice = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos = [
        ...state.todos,
        {
          id: nanoid(),
          status: false,
          text: action.payload,
        },
      ];
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    },

    changeStatus: (state, action: PayloadAction<string>) => {
      state.todos.forEach(todo => {
        if(todo.id === action.payload){
          todo.status = !todo.status;
        }
      });
    },

    setTab: (state, action: PayloadAction<string>) => {
      state.tabName = action.payload;
    },

    setTodoCount: (state, action: PayloadAction<number>) => {
      state.todoCount = action.payload;
    }


  },
});

export const selectTodos = (state:RootState) => state.todos.todos;
export const selectTabName = (state:RootState) => state.todos.tabName;
export const selectTodoCount = (state:RootState) => state.todos.todoCount;


export const { addTodo, removeTodo, changeStatus, setTab, setTodoCount } = todosSlice.actions;


const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
})
export type RootState = ReturnType<typeof store.getState>

export default store
import { useState, useEffect } from "react";
import { TodoItemModel } from "../../../entities/todo/model/todo";
import { todoApi } from "../../../shared/todoApi";

export function useTodoList() {
  const [todos, setTodos] = useState<TodoItemModel[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchTodos = async () => {
    setIsLoading(true);
    try {
      const response = await todoApi.getTodos();
      if (response && Array.isArray(response.data)) {
        setTodos(response.data);
      } else {
        setTodos([]);
      }
    } catch (error) {
      console.error("할 일 목록 조회 실패:", error);
      setTodos([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const addTodo = async (title: string, content: string) => {
    try {
      await todoApi.create(title, content);
      await fetchTodos();
    } catch (error) {
      console.error("할 일 추가 실패:", error);
      throw error;
    }
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return { todos, isLoading, addTodo, deleteTodo };
}

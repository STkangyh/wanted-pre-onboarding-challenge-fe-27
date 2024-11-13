import { TodoItem } from "../../../entities/todo/ui/todoItem";
import { AddTodo } from "../../../features/todo/add-todo/ui/addTodoForm";
import { useTodoList } from "../model/useTodoList";
import { Suspense } from "react";

export default function TodoList() {
  const { todos, isLoading, addTodo, deleteTodo } = useTodoList();

  if (isLoading) {
    return <div className="p-5">로딩 중...</div>;
  }

  const renderEmptyState = () => (
    <li className="text-gray-500">할 일이 없습니다.</li>
  );

  const renderTodoItems = () => {
    if (!Array.isArray(todos)) {
      console.error("Todos is not an array:", todos);
      return null;
    }

    return todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={{
          id: todo.id,
          title: String(todo.title),
          content: String(todo.content),
          createdAt: todo.createdAt,
          updatedAt: todo.updatedAt,
        }}
        onDelete={deleteTodo}
      />
    ));
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">할 일 목록</h1>
      <AddTodo onAdd={addTodo} />
      <Suspense fallback={<div className="mt-4">로딩 중...</div>}>
        <ul className="space-y-3 mt-4">
          {!todos || todos.length === 0
            ? renderEmptyState()
            : renderTodoItems()}
        </ul>
      </Suspense>
    </div>
  );
}

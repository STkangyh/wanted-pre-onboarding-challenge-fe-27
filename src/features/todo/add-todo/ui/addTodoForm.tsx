import { useTodoForm } from "../model/useTodoForm";

interface AddTodoProps {
  onAdd: (title: string, content: string) => Promise<void>;
}

export function AddTodo({ onAdd }: AddTodoProps) {
  const { input, handleInputChange, resetForm } = useTodoForm();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.title.trim() || !input.content.trim()) return;

    try {
      await onAdd(input.title, input.content);
      resetForm();
    } catch (error) {
      console.error("Todo 생성 실패:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        value={input.title}
        onChange={handleInputChange}
        placeholder="제목"
        className="w-full p-2 border rounded"
      />
      <input
        name="content"
        value={input.content}
        onChange={handleInputChange}
        placeholder="내용"
        className="w-full p-2 border rounded"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        추가
      </button>
    </form>
  );
}

import { TodoItemModel } from "../model/todo";

interface TodoItemProps {
  todo: TodoItemModel;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onDelete }: TodoItemProps) {
  if (!todo) return null;

  const { title, content, createdAt, updatedAt } = todo;

  return (
    <li className="group hover:shadow-lg transition-all duration-200 bg-white rounded-lg border border-gray-200">
      <div className="p-6">
        {/* 헤더 영역 */}
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
            {title}
          </h3>
          <button
            onClick={() => onDelete(todo.id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                     px-3 py-1 text-sm bg-red-500 hover:bg-red-600 text-white rounded-full"
          >
            삭제
          </button>
        </div>

        {/* 컨텐츠 영역 */}
        <div className="mb-4">
          <p className="text-gray-600 whitespace-pre-wrap break-words">
            {content}
          </p>
        </div>

        {/* 푸터 영역 */}
        <div className="flex justify-between items-center text-xs text-gray-500">
          <div className="flex gap-2">
            <span>
              생성:{" "}
              {new Date(createdAt).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
            {updatedAt !== createdAt && (
              <span>
                수정:{" "}
                {new Date(updatedAt).toLocaleDateString("ko-KR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            )}
          </div>
        </div>
      </div>
    </li>
  );
}

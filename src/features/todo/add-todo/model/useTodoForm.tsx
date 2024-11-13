import { useState } from "react";

interface TodoInput {
  title: string;
  content: string;
}

export function useTodoForm() {
  const [input, setInput] = useState<TodoInput>({ title: "", content: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setInput({ title: "", content: "" });
  };

  return {
    input,
    handleInputChange,
    resetForm,
  };
}

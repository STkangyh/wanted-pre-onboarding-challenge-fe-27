import { TodoItemModel } from "../entities/todo/model/todo";
import { authTokenUtils } from "./authToken";

interface ApiResponse<T> {
  data: T;
}

const baseUrl = "http://localhost:8080/todos";

export const todoApi = {
  create: async (title: string, content: string) => {
    const response = await fetch(baseUrl, {
      method: "POST",
      headers: {
        ...authTokenUtils.getAuthHeader(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, content: content }),
    });
    console.log(response);
    return response.json();
  },
  async getTodos(): Promise<ApiResponse<TodoItemModel[]>> {
    const response = await fetch(baseUrl, {
      method: "GET",
      headers: {
        ...authTokenUtils.getAuthHeader(),
        "Content-Type": "application/json",
      },
    });
    return response.json();
  },
  getById: async (id: string) => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "GET",
      headers: {
        ...authTokenUtils.getAuthHeader(),
        "Content-Type": "application/json",
      },
    });
    return response.json();
  },
  update: async (id: string, title: string, content: string) => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        ...authTokenUtils.getAuthHeader(),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title: title, content: content }),
    });
    return response.json();
  },
  delete: async (id: string) => {
    const response = await fetch(`${baseUrl}/${id}`, {
      method: "DELETE",
      headers: {
        ...authTokenUtils.getAuthHeader(),
        "Content-Type": "application/json",
      },
    });
    return response.json();
  },
};

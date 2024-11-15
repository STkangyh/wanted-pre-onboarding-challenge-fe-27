import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import AuthPage from "../pages/auth/Auth";
import TodoPage from "../pages/todo/Todo";

const queryClient = new QueryClient();

const routes = createBrowserRouter([
  {
    path: "/",
    element: <TodoPage />,
  },
  {
    path: "/auth",
    element: <AuthPage />,
  },
]);

export function AppProvider() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={routes} />
      </QueryClientProvider>
    </Provider>
  );
}

import { useNavigate } from "react-router-dom";
import TodoList from "../../widgets/todo-list/ui";

export default function TodoRoute() {
  const navigate = useNavigate();
  const login = () => {
    navigate("/auth");
  };
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/auth");
  };
  const isLogin = localStorage.getItem("token");
  return (
    <>
      {!isLogin ? (
        <button onClick={logout}>Log Out</button>
      ) : (
        <button onClick={login}>Log In</button>
      )}
      <TodoList />
    </>
  );
}

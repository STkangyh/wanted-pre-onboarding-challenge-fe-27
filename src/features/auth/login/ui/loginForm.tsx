import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../../../../shared/authApi";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const login = useLogin();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    return password.length >= 8;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (email === "" || password === "") {
      setError("이메일과 비밀번호를 입력해주세요.");
      return;
    }

    if (!validateEmail(email)) {
      setError("올바른 이메일 형식이 아닙니다.");
      return;
    }

    if (!validatePassword(password)) {
      setError("비밀번호는 8자 이상이어야 합니다.");
      return;
    }

    login.mutate(
      { email, password },
      {
        onSuccess: () => {
          navigate("/");
        },
        onError: () => {
          setError("로그인에 실패하였습니다.");
        },
      }
    );
  };

  return (
    <>
      <h1>로그인</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호"
        />
        <button
          type="submit"
          disabled={!validateEmail(email) || !validatePassword(password)}
        >
          로그인
        </button>
        {error && <p className="error">{error}</p>}
        {login.isSuccess && <p>로그인 성공</p>}
      </form>
    </>
  );
}

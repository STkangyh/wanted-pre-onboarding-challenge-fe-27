import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSignup } from "../../../../shared/authApi";

export default function SignupForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const signup = useSignup();

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

    signup.mutate(
      { email, password },
      {
        onSuccess: () => {
          navigate("/");
        },
        onError: () => {
          setError("회원가입에 실패하였습니다.");
        },
      }
    );
  };

  return (
    <>
      <h1>회원가입</h1>
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
          회원가입
        </button>
        {error && <p className="error">{error}</p>}
        {signup.isSuccess && <p>회원가입 성공</p>}
      </form>
    </>
  );
}

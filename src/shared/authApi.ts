import { useMutation } from "@tanstack/react-query";

export const authSignupFetch = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:8080/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("Signup error:", error);
    throw error;
  }
};

export const authLoginFetch = async (email: string, password: string) => {
  try {
    const response = await fetch("http://localhost:8080/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};

export const useLogin = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authLoginFetch(email, password),
  });
};

export const useSignup = () => {
  return useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) =>
      authSignupFetch(email, password),
  });
};

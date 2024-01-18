"use client";

import PasswordInput from "../components/ui/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import Button from "../components/ui/Button";
import { login } from "../libs/apis";
import { userStore } from "../store/userStore";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signup = userStore((state: any) => state.signup);
  const navigate = useNavigate();
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: async (data) => {
        signup(data);
        console.log(data);
        navigate("/");
        
    },
    onError: async () => {

        console.log("Yolo")
    }
  });

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (email && password) {
      loginMutation.mutate({ email, password });
    //   console.log(loginMutation.data);
    //   if (loginMutation.isSuccess) {
    //     console.log(loginMutation.data);
    //     redirect("/");
    //   } else {
    //     console.log("Hello There");
    //   }
    }
  };

  return (
    <form
      className="flex flex-col gap-10 lg:w-[50%] mx-auto p-10 mt-10 lg:shadow-lg"
      onSubmit={handleLogin}
    >
      <p className="text-lg font-semibold text-center">Welcome Back</p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Please enter your email"
        className="p-3 outline-none border rounded-md hover:border-black focus:border-black"
      />
      <PasswordInput
        value={password}
        setValue={setPassword}
        placeholder="Please enter your password"
      />
      <Button type="submit" className="bg-black hover:bg-slate-700">
        Login
      </Button>
      <p className="text-center">
        Don't have an account? <Link to="/signup">Signup</Link>
      </p>
    </form>
  );
}

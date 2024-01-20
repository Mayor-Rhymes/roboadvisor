import Button from "../components/ui/Button";
import PasswordInput from "../components/ui/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { signup2 } from "../libs/apis";
import { userStore } from "../store/userStore";
export default function Signup() {

  const signup = userStore((state: any) => state.signup);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [confirmPassword, setConfirmPassword] = useState("");
  const signupMutation = useMutation({
    mutationFn: signup2,
    onSuccess: async (data) => {
      signup(data);
      console.log(data);
      navigate("/");
    },
    onError: async () => {
      console.log("Yolo");
    },
  });

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    if (email && password && username && confirmPassword == password) {
      signupMutation.mutate({ email, username, password });
    }
  };

  return (
    <form
      className="flex flex-col gap-10 lg:w-[50%] mx-auto p-10 mt-10 lg:shadow-lg"
      onSubmit={handleSignup}
    >
      <p className="text-lg font-semibold text-center">
        Get Started With WealthHelp
      </p>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Please enter your email"
        className="p-3 outline-none border rounded-md hover:border-black focus:border-black"
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Please enter your username"
        className="p-3 outline-none border rounded-md hover:border-black focus:border-black"
      />
      <PasswordInput
        value={password}
        setValue={setPassword}
        placeholder="Please enter a password"
      />
      <PasswordInput
        value={confirmPassword}
        setValue={setConfirmPassword}
        placeholder="Confirm your password"
      />
      <Button type="submit" className="bg-black hover:bg-slate-700">
        Signup
      </Button>
      <p className="text-center">
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
}

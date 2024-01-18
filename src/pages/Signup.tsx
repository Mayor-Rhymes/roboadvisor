import Button from "../components/ui/Button";
import PasswordInput from "../components/ui/PasswordInput";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      email &&
      username &&
      password &&
      confirmPassword &&
      password == confirmPassword
    ) {
      try {
        const response = await fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            email,
            username,
            password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          console.log(data);
        } else {
          console.log("There is an error");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <form
      className="flex flex-col gap-10 lg:w-[50%] mx-auto p-10 mt-10 lg:shadow-lg"
      onSubmit={handleSubmit}
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

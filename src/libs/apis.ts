import { User } from "./types";

type UserLog = {
  email: string;
  password: string;
};

export const login = async ({ email, password }: UserLog): Promise<User> => {
  const response = await fetch("http://localhost:4000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  if (!response.ok) {
    console.log("There was an issue with your credential");
  }

  const data = (await response.json());
  //   signup(data);
  return data.user as User;
};

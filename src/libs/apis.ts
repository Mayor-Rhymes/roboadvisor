import { stockDataType } from "./fakeData";
import { User } from "./types";

type UserLog = {
  email: string;
  password: string;
  username?: string;
};

export const login = async ({ email, password }: UserLog): Promise<User> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    }
  );

  if (!response.ok) {
    console.log("There was an issue with your credential");
  }

  const data = await response.json();
  //   signup(data);
  return data.user as User;
};

export const signup2 = async ({
  email,
  username,
  password,
}: UserLog): Promise<User> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/auth/signup`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        username,
        password,
      }),
    }
  );

  if (!response.ok) {
    console.log("There was an issue with your credential");
  }

  const data = await response.json();
  //   signup(data);
  return data.user as User;
};

export const getPortfolio = async (id: string): Promise<stockDataType> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/api/portfolio/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );


  if (!response.ok) {
    console.log("Something went wrong");
  }

  const data = await response.json();

  return data.portfolio as stockDataType;
};

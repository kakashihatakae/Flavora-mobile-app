import { BASE_URL, ROLE } from "../../utils/constants";

export enum AuthScreen {
  LOGIN = "/login",
  SIGNUP = "/register"
}

export const AuthHelper = async ({
  email,
  password,
  path
}: {
  email: string;
  password: string;
  path: AuthScreen;
}) => {
  try {
    const response = await fetch(`${BASE_URL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email, password, role: ROLE })
    });
    if (response.status !== 200) {
      throw new Error(`${response.statusText}`);
    }
    return response;
  } catch (error) {
    console.log("==");
    console.log(error);
    throw new Error(`Failed to authenticate.  ${error}`);
  }
};

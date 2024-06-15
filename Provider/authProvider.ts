import { getAdminById } from "@/axios/admin";

const login = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const request = new Request("http://localhost:8080/admin/signin", {
    method: "PUT",
    body: JSON.stringify({
      email: username,
      password,
    }),
    headers: new Headers({ "Content-Type": "application/json" }),
  });
  try {
    const response = await fetch(request);
    if (response.status == 401) {
      throw new Error("Bad credentials");
    } else if (response.status < 200 || response.status >= 300) {
      throw new Error(response.statusText);
    }
    const bodyJson: {
      token: string;
      admin: {
        id: number;
      };
    } = await response.json();
    localStorage.setItem("auth", bodyJson.token);
    localStorage.setItem("id", String(bodyJson.admin.id));
    localStorage.setItem("username", username);
  } catch (e) {
    console.error(e);
    throw new Error("Network error");
  }
};

const logout = async () => {
  localStorage.removeItem("username");
  localStorage.removeItem("auth");
  return Promise.resolve();
};

const getIdentity = async (id: number) => {
  let response = await getAdminById(id);
  let json: {
    email: string;
    id: number;
    name: string;
    password: string;
  } = await response;
  return {
    id: json.id,
    fullName: json.name,
  };
};

export const authProvider = {
  login: login,
  logout: logout,
  checkAuth: () =>
    localStorage.getItem("username") ? Promise.resolve() : Promise.reject(),
  checkError: (error: any) => {
    const status = error.status;
    if (status === 401 || status === 403) {
      localStorage.removeItem("username");
      return Promise.reject();
    }
    // other error code (404, 500, etc): no need to log out
    return Promise.resolve();
  },
  getIdentity: () => getIdentity(Number(localStorage.getItem("id"))),
  getPermissions: () => Promise.resolve(""),
};

export default authProvider;

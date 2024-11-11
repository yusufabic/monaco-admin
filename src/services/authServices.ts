import { UserModel } from "../models/user";

const users: UserModel[] = [
  {
    Id: 1,
    UserName: "admin",
    FullName: "Admin User",
    Email: "admin@example.com",
    Password: "password",
    RoleId: 1,
  },
  {
    Id: 2,
    UserName: "user",
    FullName: "Regular User",
    Email: "user@example.com",
    Password: "password",
    RoleId: 2,
  },
];

export const authService = {
  login: (email: string, password: string): UserModel | null => {
    const user = users.find(
      (u) => u.Email === email && u.Password === password
    );
    if (user) {
      user.Token = "fake-jwt-token";
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    }
    return null;
  },
  logout: () => {
    localStorage.removeItem("user");
  },
  getCurrentUser: (): UserModel | null => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },
};

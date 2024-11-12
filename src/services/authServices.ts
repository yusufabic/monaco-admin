import { UserModel } from "../models/user";

const users: UserModel[] = [
  {
    Id: 1,
    UserName: "admin",
    FullName: "Admin User",
    Email: "test@test.com",
    Password: "test11",
    RoleId: 1,
    ImageUrl:
      "https://www.jahbatfc.org/wp-content/uploads/2024/02/soccer-image.webp",
  },
  {
    Id: 2,
    UserName: "user",
    FullName: "Regular User",
    Email: "user@example.com",
    Password: "password",
    RoleId: 2,
    ImageUrl:
      "https://img.olympics.com/images/image/private/t_1-1_300/f_auto/v1687307644/primary/cqxzrctscdr8x47rly1g",
  },
];

export const authService = {
  login: async (
    email: string,
    password: string
  ): Promise<{ user: Omit<UserModel, "Password">; token: string } | null> => {
    const user = users.find(
      (u) => u.Email === email && u.Password === password
    );
    if (user) {
      const token = "fake-jwt-token"; // Gerçek bir projede, bu token bir API'den alınmalıdır.
      const { Password, ...userWithoutPassword } = user;
      return { user: userWithoutPassword, token };
    }
    return null;
  },
  logout: () => {
    // Gerçek bir projede, burada API'ye logout isteği gönderilebilir.
  },
  getCurrentUser: (): Omit<UserModel, "Password"> | null => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
  },
};

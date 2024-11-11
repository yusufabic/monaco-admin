export interface UserModel {
  Id: number;
  UserName: string;
  FullName?: string;
  Email: string;
  Password: string;
  RoleId: number;
  Token?: string;
}

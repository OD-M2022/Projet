import { Role } from "./role";

export class User {
  id: string;
  role: Role;
  token?: string;
}

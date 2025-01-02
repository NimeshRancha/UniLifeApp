import { User } from "../models/User";

export class ApiService {
  static async fetchUsers(): Promise<User[]> {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return await response.json();
  }
}
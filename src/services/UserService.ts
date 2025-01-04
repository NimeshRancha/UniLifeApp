import { BASE_URL } from "./Config"; // Import the BASE_URL from config
import { User } from "../models/User";

export class UserService {
  static async fetchUsers(): Promise<User[]> {
    const response = await fetch(`${BASE_URL}/users`); // Use the BASE_URL here
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return await response.json();
  }
}

import { BASE_URL } from "./Config"; // Import the BASE_URL from config
import { Boarding } from "../models/Boarding";

export class BoardingService {
  static async fetchBoardings(): Promise<Boarding[]> {
    const response = await fetch(`${BASE_URL}/boardings`); // Use the BASE_URL here
    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }
    return await response.json();
  }
}

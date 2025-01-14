import { useState, useEffect } from "react";
import { Boarding } from "../models/Boarding";
import { BoardingService } from "../services/BoardingService";

export function useBoardingViewModel() {
  const [boardings, setBoardings] = useState<Boarding[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await BoardingService.fetchBoardings();
        setBoardings(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadUsers();
  }, []);

  return { boardings, isLoading, error };
}

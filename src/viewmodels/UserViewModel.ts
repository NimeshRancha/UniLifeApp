import { useState, useEffect } from "react";
import { User } from "../models/User";
import { UserService } from "../services/UserService";

export function useUserViewModel() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadUsers() {
      try {
        const data = await UserService.fetchUsers();
        setUsers(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    loadUsers();
  }, []);

  return { users, isLoading, error };
}

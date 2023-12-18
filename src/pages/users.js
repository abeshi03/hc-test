import axios from "axios"
import { useQuery } from '@tanstack/react-query';

export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
    }
  });
}

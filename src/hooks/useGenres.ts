import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import genres from "../data/genres";
import APIClient from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');

// const useGenres = () => ({ data: genres, isLoading: false, error: null })
const useGenres = () => useQuery({
  queryKey: ['genres'],
  queryFn: apiClient.get,
  staleTime: ms('24h'),
  initialData: genres
})

export default useGenres;
import { useQuery } from "@tanstack/react-query";
import { verifyToken as verifyTokenApi } from "../../services/apiAuth";

export function useValidToken(token) {
  const {
    isPending: isTokenValidLoading,
    isError: isTokenValidError,
    error: tokenValidError,
  } = useQuery({
    queryKey: ["verifyToken", token],
    queryFn: () => verifyTokenApi(token),
    retry: false,
  });

  return {
    isTokenValidLoading,
    isTokenValidError,
    tokenValidError,
  };
}

import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSettings() {
  const {
    isPending,
    error,
    data: settings,
  } = useQuery({
    queryFn: getSettings,
    queryKey: ["settings"],
  });

  return { isPending, error, settings };
}

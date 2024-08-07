import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { recovery as recoveryApi } from "../../services/apiAuth";

export function useRecovery() {
  const navigate = useNavigate();

  const { mutate: recovery, isPending } = useMutation({
    mutationFn: ({ email, captchaToken }) =>
      recoveryApi({ email, captchaToken }),
    onSuccess: () => {
      toast.success("Check your email to reset your password");
      navigate("/login", { replace: true });
    },
    onError: (error) => {
      console.error("ERROR", error);
      toast.error(error.message);
    },
  });

  return { recovery, isPending };
}

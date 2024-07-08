import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import { updatePassword as updatePasswordApi } from "../../services/apiAuth";

export function useUpdatePassword() {
  const navigate = useNavigate();

  const { mutate: updatePassword, isPending: isUpdating } = useMutation({
    mutationFn: updatePasswordApi,
    onSuccess: () => {
      toast.success("User password successfully updated");
      navigate("/dashboard", { replace: true });
    },
    onError: (err) => {
      toast.error(err.message);
      console.error(err.message);
    },
  });

  return { isUpdating, updatePassword };
}

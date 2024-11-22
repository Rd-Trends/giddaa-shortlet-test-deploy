import { useMutation } from "@tanstack/react-query";
import {
  FORGOT_PASSWORD_KEY,
  LOGIN_USER_KEY,
  REGISTER_USER_KEY,
  RESET_PASSWORD_KEY,
  VERIFY_EMAIL_KEY,
} from "../constants/keys";
import {
  deleteToken,
  loginUser,
  registerUser,
  resetPassword,
  saveToken,
  sendResetPasswordLink,
  verifyResetPassword,
} from "../services/account";
import useAuth from "@/hooks/useAuth";

export const useRegisterUser = () => {
  return useMutation({
    mutationKey: [REGISTER_USER_KEY],
    mutationFn: registerUser,
    onSuccess: async (data) => {
      await saveToken(data.token);
    },
  });
};

export const useLoginUser = () => {
  return useMutation({
    mutationKey: [LOGIN_USER_KEY],
    mutationFn: loginUser,
    onSuccess: async (data) => {
      await saveToken(data.token);
    },
  });
};

export const useGenerateResetPasswordLink = () => {
  return useMutation({
    mutationKey: [FORGOT_PASSWORD_KEY],
    mutationFn: sendResetPasswordLink,
  });
};

export const useVerifyResetPassword = () => {
  return useMutation({
    mutationKey: [VERIFY_EMAIL_KEY],
    mutationFn: verifyResetPassword,
  });
};

export const useResetPassword = () => {
  return useMutation({
    mutationKey: [RESET_PASSWORD_KEY],
    mutationFn: resetPassword,
  });
};

export const useLogout = () => {
  const { removeAuth } = useAuth();
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: deleteToken,
    onSuccess: () => {
      removeAuth();
    },
  });
};

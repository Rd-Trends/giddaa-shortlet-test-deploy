import {
  GenerateResetPasswordLinkPayload,
  GenerateResetPasswordResponse,
  LoginResponse,
  LoginUserPayload,
  RegisterUserPayload,
  ResetPasswordPayload,
  VerifyResetPasswordPayload,
} from "@/types/account";
import {
  FORGOT_PASSWORD,
  LOGIN,
  RESET_PASSWORD,
  SIGNUP,
  VERIFY_EMAIL,
} from "../constants/endpoints";
import http from "../http";

export const registerUser = (data: RegisterUserPayload) => {
  return http.post(SIGNUP, data, {}, (res: LoginResponse) => res.value.value);
};

export const loginUser = (data: LoginUserPayload) => {
  return http.post(LOGIN, data, {}, (res: LoginResponse) => res.value.value);
};

export const sendResetPasswordLink = async (
  data: GenerateResetPasswordLinkPayload
) => {
  return http.post(
    FORGOT_PASSWORD,
    data,
    {},
    (res: GenerateResetPasswordResponse) => res
  );
};

export const verifyResetPassword = (data: VerifyResetPasswordPayload) => {
  return http.post(
    VERIFY_EMAIL,
    data,
    {},
    (res: GenerateResetPasswordResponse) => res
  );
};

export const resetPassword = (data: ResetPasswordPayload) => {
  return http.post(
    RESET_PASSWORD,
    data,
    {},
    (res: GenerateResetPasswordResponse) => res
  );
};

// handle cookies
export const saveToken = async (token: string) => {
  await fetch("/api/session", {
    method: "POST",
    body: JSON.stringify({ token }),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const deleteToken = async () => {
  await fetch("/api/session", {
    method: "DELETE",
  });
};

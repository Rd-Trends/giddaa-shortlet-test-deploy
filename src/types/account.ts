import { SingleResponseType } from "./api";
import { User } from "./user";

export type RegisterUserPayload = {
  firstName: string;
  lastName: string;
  gender?: string;
  dateOfBirth?: string;
  preferredPurchaseOption?: string;
  age?: number;
  email: string;
  phoneNumber?: string;
  password: string;
  roleId: string;
  organizationId: string;
  title?: string;
};

export type LoginUserPayload = {
  email: string;
  password: string;
  type: string;
};

export type LoginResponse = SingleResponseType<{ token: string; user: User }>;

export type GenerateResetPasswordLinkPayload = {
  email: string;
  type: string;
};

export type GenerateResetPasswordResponse = {
  statusCode: number;
  message: string;
  value: string;
};

export type VerifyResetPasswordPayload = {
  key: string;
  code: string;
  emailAddress: string;
};

export type ResetPasswordPayload = {
  key: string;
  code: string;
  newPassword: string;
};

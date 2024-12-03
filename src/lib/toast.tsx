import CustomToast, { CustomToastProps } from "@/components/ui/CustomToast";
import { Id, toast as rToast, ToastItem, ToastOptions } from "react-toastify";

const defaultOptions = {
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeButton: false,
  pauseOnHover: true,
  className: "custom-toast-container",
} as ToastOptions;

export const toast = (myProps: CustomToastProps, toastProps?: ToastItem): Id =>
  rToast(<CustomToast {...myProps} />, { ...defaultOptions, ...toastProps });

toast.success = (
  myProps: Omit<CustomToastProps, "onClose" | "type">,
  toastProps?: ToastItem
): Id =>
  rToast(<CustomToast {...myProps} type="success" />, {
    ...defaultOptions,
    ...toastProps,
  });

toast.error = (
  myProps: Omit<CustomToastProps, "onClose" | "type">,
  toastProps?: ToastItem
): Id =>
  rToast(<CustomToast {...myProps} type="error" />, {
    ...defaultOptions,
    ...toastProps,
  });

toast.warning = (
  myProps: Omit<CustomToastProps, "onClose" | "type">,
  toastProps?: ToastItem
): Id =>
  rToast(<CustomToast {...myProps} type="warning" />, {
    ...defaultOptions,
    ...toastProps,
  });

toast.info = (
  myProps: Omit<CustomToastProps, "onClose" | "type">,
  toastProps?: ToastItem
): Id =>
  rToast(<CustomToast {...myProps} type="info" />, {
    ...defaultOptions,
    ...toastProps,
  });

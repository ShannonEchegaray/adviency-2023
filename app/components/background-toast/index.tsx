import { useEffect, type FC } from "react";
import runToast, { Toaster } from "react-hot-toast";
import { type ToastMessage } from "remix-toast";

interface IBackgroundToast {
  toast: ToastMessage
}

const BackgroundToast: FC<IBackgroundToast> = ({ toast }) => {

  const TOAST_MAP: Record<ToastMessage["type"], (message: string) => void> = {
    "success": runToast.success,
    "error": runToast.error,
    "info": runToast.error,
    "warning": runToast.error,
  };

  useEffect(() => {
    TOAST_MAP[toast.type](toast.message);
  }, [toast]);

  return (
  <Toaster>
  </Toaster>
  );
};

export default BackgroundToast;
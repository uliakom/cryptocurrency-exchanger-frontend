import { toast } from 'react-toastify';

const toastConfig = {
  position: 'top-center',
  autoClose: 4500,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: false,
  style: {
    backgroundColor: 'aliceblue',
    color: 'black',
  },
};

export const notifySuccess = message =>
  toast.success(message, { ...toastConfig, toastId: message });

export const notifyWarning = message =>
  toast.warning(message, { ...toastConfig, toastId: message });

export const notifyError = message => toast.error(message, { ...toastConfig, toastId: message });

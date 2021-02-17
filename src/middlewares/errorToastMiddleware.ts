import ToastStatusEnum from 'constants/toastStatusEnum.ts';
import ToastsAction from 'store/toasts/toastsAction.ts';

const errorToastMiddleware = () => (store) => (next) => (action) => {
  if (action.error) {
    const errorAction = action;

    next(ToastsAction.add(errorAction.payload.message, ToastStatusEnum.Error));
  }

  next(action);
};

export default errorToastMiddleware;

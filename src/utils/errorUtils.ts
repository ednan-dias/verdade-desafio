import { AxiosError, AxiosResponse } from "axios";
import { toast } from "./toast";

interface APIResponse extends AxiosResponse {
  data: {
    message: string;
  };
}

interface APIError extends AxiosError {
  response: APIResponse;
}

export function customAPIMessageError(error: unknown, message: string) {
  const err = error as APIError;

  if (err.response?.data.message) {
    return toast("error", err.response.data.message);
  } else {
    return toast("error", message);
  }
}

export function formatAPIError(err: unknown) {
  return err as APIError;
}

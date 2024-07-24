import { trimToLength } from "utils/string";

export function assert(predicate: unknown, errorMessage: string): void {
  if (!predicate) throw new Error(errorMessage);
}

export function errorToString(
  error: string | number | Record<string, string>,
  maxLength = 240
): string {
  if (!error) return "Unknown Error";
  if (typeof error === "string") return trimToLength(error, maxLength);
  if (typeof error === "number") return `Error code: ${error}`;
  if (error.message) return trimToLength(error.message, maxLength);
  return trimToLength(JSON.stringify(error), maxLength);
}

export const validateEmail = (email: string) => {
  let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
  return reg.test(email);
};

export const validatePassword = (password: string) => {
  return (
    password.match(/[^A-Za-z0-9]/) &&
    password.match(/[0-9]/) &&
    password.match(/[a-z]/) &&
    password.match(/[A-Z]/) &&
    password.length >= 8
  );
};

export const validatePhone = (phone: string) => {
  const regex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  return phone.match(regex);
};

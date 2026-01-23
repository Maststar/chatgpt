import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const USD_TO_LKR = 300;

export function formatPrice(value: number, currency: "USD" | "LKR") {
  const amount = currency === "USD" ? value : value * USD_TO_LKR;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency === "USD" ? "USD" : "LKR",
    maximumFractionDigits: 0
  }).format(amount);
}

export function clampNumber(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

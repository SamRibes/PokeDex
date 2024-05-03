import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getStorageIsDimmed(): boolean {
  const localStorageState = localStorage.getItem('isDimmed');
  if (localStorageState) return JSON.parse(localStorageState);
  return false;
}

export function setStorageIsDimmed(newValue: boolean) {
  localStorage.setItem('isDimmed', `${newValue}`);
}

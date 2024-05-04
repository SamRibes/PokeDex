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

export function capitalizeFirstLetter(string: string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function processDescription(description: string) {
  return description.replace(/[\u0000-\u001F\u007F-\u009F]/g, ' ');
}

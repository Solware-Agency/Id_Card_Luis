import { getEmployeeBySubdomain as getEmployeeBySubdomainFromData } from '../data/empleados';
import type { Employee } from '../types';

export const getSubdomain = (): string | null => {
  const hostname = window.location.hostname;
  const parts = hostname.split('.');
  
  // Si es localhost o una IP, no hay subdominio
  if (hostname === 'localhost' || /^\d+\.\d+\.\d+\.\d+$/.test(hostname)) {
    return null;
  }
  
  // Si tiene más de 2 partes (ej: luis.solware.agency), el primer elemento es el subdominio
  if (parts.length > 2) {
    return parts[0];
  }
  
  return null;
};

export const getEmployeeBySubdomain = (subdomain: string): Employee | null => {
  return getEmployeeBySubdomainFromData(subdomain.toLowerCase()) || null;
};

export const shouldUseSubdomainRouting = (): boolean => {
  return getSubdomain() !== null;
};
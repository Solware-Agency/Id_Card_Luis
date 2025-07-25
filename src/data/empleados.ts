import { Employee } from '../types';

export const empleados: Employee[] = [
  {
    slug: 'luis-mejia',
    name: 'Luis Mejía',
    title: {
      en: 'Coach & Consultant',
      es: 'Coach y Consultor'
    },
    company: {
      en: 'Solware Agency',
      es: 'Agencia Solware'
    },
    photo: 'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/imagenes/Equipo/Luis.png',
    email: 'luismccoach@gmail.com',
    phone: '+58 412-7224007',
    whatsapp: '584127224007',
    linkedin: 'luis-mejia-bb590a223',
    website: 'solware.agency'
  }
];

export const getEmployeeBySlug = (slug: string): Employee | undefined => {
  return empleados.find(emp => emp.slug === slug);
};
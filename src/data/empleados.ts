import { Employee } from '../types';

export const empleados: Employee[] = [
  {
    slug: 'luis-mejia',
    name: 'Luis Mejía',
    title: {
      en: 'Sales Advisor',
      es: 'Asesor de Ventas'
    },
    company: {
      en: 'Solware Agency',
      es: 'Agencia Solware'
    },
    photo: 'https://lafysstpyiejevhrlmzc.supabase.co/storage/v1/object/public/imagenes/Equipo/Luis.png',
    phone: '+58 412-7224007',
    whatsapp: '584127224007',
    linkedin: 'luis-mejia-bb590a223',
    website: 'solware.agency',
    calendly: 'https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ28TbL6x8Jj7yLpzgpH2OQ1MV5t5zdvwYRbjCTVKTjj-pNNzSSZ3mGSpguP7Sv4AksuyRdav2bJ'
  }
];

export const getEmployeeBySlug = (slug: string): Employee | undefined => {
  return empleados.find(emp => emp.slug === slug);
};
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ContactCard from './components/ContactCard';
import { getSubdomain, getEmployeeBySubdomain, shouldUseSubdomainRouting } from './utils/subdomain';

function App() {
  // Detectar si estamos usando enrutamiento por subdominio
  const useSubdomainRouting = shouldUseSubdomainRouting();
  const subdomain = getSubdomain();
  
  if (useSubdomainRouting && subdomain) {
    const employee = getEmployeeBySubdomain(subdomain);
    
    if (employee) {
      // Si encontramos el empleado por subdominio, mostrar su tarjeta directamente
      return <ContactCard employeeSlug={employee.slug} />;
    } else {
      // Si el subdominio no corresponde a ningún empleado, mostrar error
      return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Contacto no encontrado</h1>
            <p className="text-gray-600">El subdominio "{subdomain}" no corresponde a ningún perfil.</p>
          </div>
        </div>
      );
    }
  }

  // Enrutamiento tradicional para desarrollo local o dominios sin subdominio
  return (
    <Router>
      <Routes>
        <Route path="/id/:slug" element={<ContactCard />} />
        <Route path="/" element={<Navigate to="/id/luis-mejia" replace />} />
        <Route path="*" element={<Navigate to="/id/luis-mejia" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
'use client';

import { useState } from 'react';

interface ClientFormProps {
  onSubmit: (password: string) => void;
}

export default function ClientForm({ onSubmit }: ClientFormProps) {
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(password);
  };

  return (
    <aside className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono mx-auto mt-20">
      {/* Encabezado */}
      <div className="flex justify-between items-center mb-4">
        {/* Indicadores de estado */}
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        {/* Título de la terminal */}
        <p className="text-sm text-gray-400">bash</p>
      </div>

      {/* Contenido de la terminal */}
      <div className="mt-4">
        {/* Mensaje inicial */}
        <p className='text-green-400'>Welcome to Love Terminal v1.0.0</p>
        <p className="text-green-400">$ Enter the password:</p>
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-transparent border-b border-green-400 text-white focus:outline-none w-full py-1"
            placeholder="Password..."
            required
          />
        </form>
        {/* Simulación de salida de terminal */}
        <p className="text-white mt-2 animate-pulse">🔐♥️ Waiting for authentication.....</p>
        <p className="text-green-400">$</p>
      </div>
    </aside>
  );
}
'use client'

import{ useState, useEffect } from 'react';


interface ApodData {
    copyright?: string; // Opcional, ya que no siempre está presente
    date: string;
    explanation: string;
    media_type: 'image' | 'video'; // Puede ser 'image' o 'video'
    service_version: string;
    title: string;
    url: string;
    hdurl?: string; // Opcional, solo para imágenes
  }
  
  const NasaApodMultipleYears: React.FC = () => {
    const [apodDataList, setApodDataList] = useState<ApodData[]>([]);
    const [error, setError] = useState<string | null>(null);
  
    // Reemplaza 'TU_API_KEY' con tu clave de API de la NASA
    const API_KEY = '6UNGNPoueeXweG8PcKBxrDKplzlO4SceaMDSqmqp';
  
    // Lista de años para los que queremos obtener la imagen
    const years = ['2021', '2022', '2023', '2024'];
    const date = '11-27'; // Fecha fija: 27 de noviembre
  
    useEffect(() => {
      const fetchApodForYears = async () => {
        setError(null);
        const apodDataPromises = years.map(async (year) => {
          try {
            const response = await fetch(
              `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${year}-${date}`
            );
  
            if (!response.ok) {
              throw new Error(`Error en ${year}: ${response.status}`);
            }
  
            const data: ApodData = await response.json();
            return data;
          } catch (err) {
            setError(`No se pudo obtener la imagen para ${year}: ${(err as Error).message}`);
            return null;
          }
        });
  
        // Esperar a que todas las solicitudes se completen
        const results = await Promise.all(apodDataPromises);
        setApodDataList(results.filter((data): data is ApodData => data !== null)); // Filtrar resultados válidos
      };
  
      fetchApodForYears();
    }, []);
  
    return (
        <div className="min-h-screen bg-black p-4 md:p-8 flex items-center justify-center">
        <div className="w-full max-w-6xl bg-black border border-pink-500/20 rounded-lg shadow-2xl shadow-pink-500/10">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-pink-500/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="text-gray-400 text-sm">APOD Terminal</div>
            <div className="w-20" />
          </div>
  
          {/* Contenido */}
          <div className="p-6 font-mono space-y-6">
            <div className="text-green-400">Welcome to the NASA APOD Terminal 🚀...</div>
            <div className='text-green-400'>Estás son las imagenes que se obtuvieron en la fecha de 27/11 de los años 2021 - 2022 - 2023 - 2024</div>
  
            {/* Mostrar errores si los hay */}
            {error && <div className="text-red-500">{error}</div>}
  
            {/* Cuadrícula de Imágenes/Videos */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {apodDataList.length > 0 ? (
                apodDataList.map((apodData, index) => (
                  <div
                    key={index}
                    className="border border-pink-500/20 rounded-lg p-4 hover:bg-pink-500/5 cursor-pointer transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between text-pink-400 mb-2">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-500">🌌</span>
                        {apodData.title}
                      </div>
                    </div>
  
                    {/* Mostrar imagen o video */}
                    {apodData.media_type === 'image' ? (
                      <img src={apodData.url} alt={apodData.title} className="w-full h-48 object-cover rounded-md mt-2" />
                    ) : (
                      <iframe
                        width="100%"
                        height="200"
                        src={apodData.url.replace('watch?v=', 'embed/')}
                        title={apodData.title}
                        allowFullScreen
                        className="rounded-md mt-2"
                      ></iframe>
                    )}
                    {apodData.hdurl && (
                    <a
                      href={apodData.hdurl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className=" text-sm text-green-400 hover:text-blue-400 transition-colors block mt-2"
                    >
                      Ver versión en alta resolución
                    </a>
                  )}
            
                  </div>
                ))
              ) : (
                <div className="text-gray-500 animate-pulse col-span-full">Cargando imágenes...</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default NasaApodMultipleYears;
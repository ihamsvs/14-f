'use client'
import { useState } from "react";

type Message = {
    url: string;
    title: string;
  };


const ImageZoom = ({ message }: { message: Message }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const toggleExpand = () => {
      setIsExpanded(!isExpanded);
    };
  
    return (
      <div
        className="relative overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          height: isExpanded ? "auto" : "192px", // Altura inicial (h-48)
        }}
        onClick={toggleExpand}
      >
        <img
          src={message.url}
          alt={message.title}
          className="w-full object-cover rounded-lg mt-2 shadow-lg transition-transform duration-500 ease-in-out"
          style={{
            transform: isExpanded ? "scale(1)" : "scale(0.9)", // Escala inicial
          }}
          loading="lazy"
        />
      </div>
    );
  };
  
  export default ImageZoom;
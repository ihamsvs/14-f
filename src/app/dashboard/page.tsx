"use client"

import { useState } from "react"
import { useRouter } from "next/navigation";

const valentineMessages = [
  {
    id: 0,
    title: "commands.txt",
    content: "Comandos para navegar en la página:\n- 'cd /memories' para ver nuestros recuerdos\n- 'cd /' para volver al inicio\n- 'cd /****' SECRETO",
    date: "2024-02-14 11:30:00",
  },
  {
    id: 1,
    title: "love_letter_001.txt",
    content: "Cada línea de código que escribo es pensando en ti ❤️",
    date: "2024-02-14 12:00:00",
  },
  {
    id: 2,
    title: "secret_crush.exe",
    content: "Cargando love.module... \nIniciando heart.service... \nEstado: Completamente enamorado ❤️",
    date: "2024-02-14 12:30:00",
  },
  {
    id: 3,
    title: "reasons_to_love.json",
    content: "{\n  'smile': 'brightest',\n  'heart': 'biggest',\n  'love': 'infinite'\n}",
    date: "2024-02-14 13:00:00",
  },
  {
    id: 4,
    title: "love_algorithm.py",
    content: "while true:\n  print('Te amo más cada día')\n  heart.grow()",
    date: "2024-02-14 13:30:00",
  },
  {
    id: 5,
    title: "valentine_countdown.sh",
    content: "Cada momento contigo es un regalo ✨\nTiempo juntos: INFINITO",
    date: "2024-02-14 14:00:00",
  },
  {
    id: 6,
    title: "love_007.sql",
    content: "`SELECT * FROM corazones WHERE dueño = 'tú';`",
    date: "2024-02-14 14:30:00",
  },
  {
    id: 7,
    title: "heartbeat_monitor.log",
    content: "ERROR 404: Latidos no encontrados cuando no estás cerca ❤️",
    date: "2024-02-14 15:00:00",
  },
  {
    id: 8,
    title: "romance_script.js",
    content: "if (tú === 'conmigo') {\n  console.log('Felicidad infinita ❤️');\n} else {\n  console.log('Intentando reconectar...');\n}",
    date: "2024-02-14 15:30:00",
  },
  {
    id: 9,
    title: "together_forever.css",
    content: "body {\n  background: 'tú';\n  color: 'felicidad';\n  animation: love 4ever infinite;\n}",
    date: "2024-02-14 16:30:00",
  }
];

export default function TerminalGallery() {
  const [selectedFile, setSelectedFile] = useState<number | null>(null);
  const [command, setCommand] = useState("");
  const router = useRouter();

  const handleCommand = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (command === "cd /memories") {
        router.push("/Gallery");
      } else if (command === "cd /") {
        router.push("/");
      } else if (command === "cd /stars") {
        router.push("/nasa");
      }
      setCommand("");
    }
  };

  return (
    <div className="min-h-screen bg-black p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-black border border-pink-500/20 rounded-lg shadow-2xl shadow-pink-500/10">
        <div className="flex items-center justify-between p-3 border-b border-pink-500/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>
          <div className="text-gray-400 text-sm">love_terminal.sh</div>
          <div className="w-20" />
        </div>

        <div className="p-6 font-mono">
          <div className="space-y-6">
            <div className="text-green-400">Welcome to your love files ❤️</div>

            <input
              type="text"
              className="w-full bg-black text-green-400 border border-pink-500/20 p-2 mt-4"
              placeholder="Type a command..."
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleCommand}
            />

            <div className="grid gap-4">
              {valentineMessages.map((message) => (
                <div
                  key={message.id}
                  className="border border-pink-500/20 rounded-lg p-4 hover:bg-pink-500/5 cursor-pointer transition-colors duration-300"
                  onClick={() => setSelectedFile(message.id)}
                >
                  <div className="flex items-center justify-between text-pink-400 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-red-500">❤</span>
                      {message.title}
                    </div>
                    <span className="text-xs text-gray-500">{message.date}</span>
                  </div>
                  <pre className="text-gray-400 text-sm whitespace-pre-wrap animate-pulse">
                    {selectedFile === message.id ? message.content : "[ Click to decrypt message ]"}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client'
import { useState } from "react";
import ImageZoom from "../components/ImageZoom";
import { useRouter } from "next/navigation";
const moments = [
    {
        id:1,
        url: "/img1.jpg",
        date: "2021-07-02 18:15:28",
        title: "first_date.jpg",
        content: "Primera foto que te tomé ❤️"
    },
    {
        id: 2,
        url: "/img2.jpg",
        date: "2021-07-12 13:05:11",
        title: "day_with_donuts.jpg",
        content: "Día de donas 🍩"

    },
    {
        id: 3,
        url : "/img3.jpg",
        date: "2021-07-31 21:53:16",
        title: "hallowen_night.jpg",
        content: "Noche de halloween 🎃"
    },
    {
        id: 4,
        url : "/img4.jpg",
        date: "2022-01-13 08:59:44",
        title: "first_travel.jpg",
        content: "Primer viaje juntos ✈️"
    },
    {
        id: 5,
        url: "/img5.jpg",
        date: "2022-07-02 15:01:38",
        title: "japanese_park.jpg",
        content: "Día en el parque japonés 🌸"
    },
    {
      id: 6,
      url: "/img6.jpg",
      date: "2021-09-03 19:54:33",
      title: "graduation_day.jpg",
      content: "Día de tu fiesta graduación 🎓"

    }
]


export default function GalleryPhotos(){
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
     const [selectedFile, setSelectedFile] = useState<number | null>(null);
    return(
        <div className="min-h-screen bg-black p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-black border border-pink-500/20 rounded-lg shadow-2xl shadow-pink-500/10">
        <div className="flex items-center justify-between p-3 border-b border-pink-500/20">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500">
            </div>
          </div>
          <div className="text-gray-400 text-sm">love_terminal.sh</div>
          <div className="w-20" />
        </div>

        <div className="p-6 font-mono">
          <div className="space-y-6">
            <div className="text-green-400">Welcome to our memories ❤️</div>
            <input
              type="text"
              className="w-full bg-black text-green-400 border border-pink-500/20 p-2 mt-4"
              placeholder="Type a command..."
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleCommand}
            />
            <div className="grid gap-4">
              {moments.map((message) => (
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
                    <ImageZoom message={message} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
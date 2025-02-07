"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const photos = [
  {
    url: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745",
    title: "Evento de música eletrônica",
    description: "Festival com iluminação e efeitos especiais"
  },
  {
    url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3",
    title: "Casamento",
    description: "Iluminação e sonorização para casamento"
  },
  {
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
    title: "Festa corporativa",
    description: "Estrutura completa de áudio e vídeo"
  },
  {
    url: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7",
    title: "Show ao vivo",
    description: "Sistema de som profissional"
  },
];

const videos = [
  {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Aftermovie Festival 2024",
    description: "Highlights do evento"
  },
  {
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    title: "Wedding Highlights",
    description: "Momentos especiais"
  },
];

export default function GaleriaPage() {
  const [activeTab, setActiveTab] = useState("fotos");

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Nossa Galeria</h1>
        
        <Tabs defaultValue="fotos" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="fotos">Fotos</TabsTrigger>
            <TabsTrigger value="videos">Vídeos</TabsTrigger>
          </TabsList>

          <TabsContent value="fotos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <Card key={index} className="overflow-hidden">
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{photo.title}</h3>
                    <p className="text-sm text-muted-foreground">{photo.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className="relative pt-[56.25%]">
                    <iframe
                      src={video.url}
                      title={video.title}
                      className="absolute top-0 left-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{video.title}</h3>
                    <p className="text-sm text-muted-foreground">{video.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
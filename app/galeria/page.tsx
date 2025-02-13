"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const nextImage = () => {
    setSelectedImageIndex((prev) => (prev + 1) % photos.length);
  };

  const previousImage = () => {
    setSelectedImageIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center py-32 bg-[#111827]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-white">Nossa Galeria</h1>
        
        <Tabs defaultValue="fotos" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2 mb-8 bg-[#1E293B] p-1 rounded-xl gap-2">
            <TabsTrigger 
              value="fotos" 
              className="flex items-center gap-2 data-[state=active]:bg-[#1C64F2] data-[state=active]:text-white rounded-lg transition-all duration-300 hover:bg-[#1C64F2]/20 text-gray-300"
            >
              Fotos
            </TabsTrigger>
            <TabsTrigger 
              value="videos"
              className="flex items-center gap-2 data-[state=active]:bg-[#1C64F2] data-[state=active]:text-white rounded-lg transition-all duration-300 hover:bg-[#1C64F2]/20 text-gray-300"
            >
              Vídeos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fotos">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {photos.map((photo, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden bg-[#374151] border-none hover:bg-[#1C64F2] transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1C64F2]/30 cursor-pointer group"
                  onClick={() => {
                    setSelectedImageIndex(index);
                    setIsModalOpen(true);
                  }}
                >
                  <img
                    src={photo.url}
                    alt={photo.title}
                    className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 text-white">{photo.title}</h3>
                    <p className="text-sm text-gray-300">{photo.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video, index) => (
                <Card 
                  key={index} 
                  className="overflow-hidden bg-[#374151] border-none hover:bg-[#1C64F2] transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1C64F2]/30 group"
                >
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
                    <h3 className="font-semibold mb-2 text-white group-hover:text-white">{video.title}</h3>
                    <p className="text-sm text-gray-300 group-hover:text-white/90">{video.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
          <DialogContent className="max-w-[80vw] h-[80vh] bg-[#111827] border-none">
            <DialogHeader>
              <DialogTitle className="text-white">{photos[selectedImageIndex].title}</DialogTitle>
              <DialogDescription className="text-gray-300">
                {photos[selectedImageIndex].description}
              </DialogDescription>
            </DialogHeader>
            <div className="relative flex items-center justify-center h-full">
              <button
                onClick={previousImage}
                className="absolute left-4 p-2 rounded-full bg-[#1C64F2]/80 hover:bg-[#1C64F2] text-white transition-all"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <img
                src={photos[selectedImageIndex].url}
                alt={photos[selectedImageIndex].title}
                className="max-h-[70vh] max-w-[70vw] object-contain"
              />
              <button
                onClick={nextImage}
                className="absolute right-4 p-2 rounded-full bg-[#1C64F2]/80 hover:bg-[#1C64F2] text-white transition-all"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
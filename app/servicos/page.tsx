import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Music, Video } from "lucide-react";

const audioVisualServices = [
  {
    title: "Palcos e cenários",
    description: "Estruturas profissionais para eventos de todos os portes"
  },
  {
    title: "Painéis de LED",
    description: "Displays de alta resolução para uma experiência visual impressionante"
  },
  {
    title: "Pista de dança",
    description: "Pistas iluminadas e personalizadas para seu evento"
  },
  {
    title: "Vídeo mapping",
    description: "Projeções mapeadas para transformar qualquer superfície"
  }
];

const djServices = [
  {
    title: "Repertório personalizado",
    description: "Músicas selecionadas de acordo com seu perfil e preferências"
  },
  {
    title: "Tempo de festa full time",
    description: "Cobertura completa do seu evento sem intervalos"
  },
  {
    title: "Hora adicional",
    description: "Flexibilidade para estender a festa com custo adicional de 15%/hora"
  },
  {
    title: "Hospedagem e logística",
    description: "Todo suporte necessário para eventos em outras cidades"
  }
];

export default function ServicosPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center pt-32 bg-[#111827] text-white">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12">Serviços</h1>

        <Tabs defaultValue="audiovisual" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12 bg-[#1E293B] p-1 rounded-xl gap-2">
            <TabsTrigger 
              value="audiovisual" 
              className="flex items-center gap-2 data-[state=active]:bg-[#1C64F2] data-[state=active]:text-white rounded-lg transition-all duration-300 hover:bg-[#1C64F2]/20"
            >
              <Video className="h-5 w-5" />
              Áudio Visual
            </TabsTrigger>
            <TabsTrigger 
              value="dj" 
              className="flex items-center gap-2 data-[state=active]:bg-[#1C64F2] data-[state=active]:text-white rounded-lg transition-all duration-300 hover:bg-[#1C64F2]/20"
            >
              <Music className="h-5 w-5" />
              DJ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="audiovisual">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">O que oferecemos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {audioVisualServices.map((service, index) => (
                  <Card 
                    key={index} 
                    className="p-6 bg-[#374151] border-none hover:bg-[#1C64F2] transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1C64F2]/30 cursor-pointer group"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">{service.title}</h3>
                    <p className="text-gray-300 group-hover:text-white/90">{service.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="dj">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">Serviços de DJ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {djServices.map((service, index) => (
                  <Card 
                    key={index} 
                    className="p-6 bg-[#374151] border-none hover:bg-[#1C64F2] transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1C64F2]/30 cursor-pointer group"
                  >
                    <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-white">{service.title}</h3>
                    <p className="text-gray-300 group-hover:text-white/90">{service.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12 mb-16 md:mb-24"> {/* Adicionado margin inferior para mobile */}
          <Button 
            asChild 
            size="lg"
            className="bg-[#1C64F2] hover:bg-[#1C64F2]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#1C64F2]/30"
          >
            <Link href="/orcamento">Solicitar Orçamento</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
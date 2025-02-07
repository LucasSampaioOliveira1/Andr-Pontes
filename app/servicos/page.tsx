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
    <div className="w-full min-h-screen flex flex-col items-center py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">Nossos Serviços</h1>

        <Tabs defaultValue="audiovisual" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger value="audiovisual" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Áudio Visual
            </TabsTrigger>
            <TabsTrigger value="dj" className="flex items-center gap-2">
              <Music className="h-4 w-4" />
              DJ
            </TabsTrigger>
          </TabsList>

          <TabsContent value="audiovisual">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-6">O que oferecemos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {audioVisualServices.map((service, index) => (
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
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
                  <Card key={index} className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/orcamento">Solicitar Orçamento</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
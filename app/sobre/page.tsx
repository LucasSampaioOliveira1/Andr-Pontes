import { Card } from "@/components/ui/card";

export default function SobrePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="w-full">
            <h1 className="text-4xl font-bold mb-6">Nossa História</h1>
            <div className="space-y-4 text-muted-foreground">
              <p>
                A VortekLabs nasceu da paixão por criar experiências únicas e memoráveis através da tecnologia e da música. Desde 2014, temos sido pioneiros em trazer soluções audiovisuais inovadoras para eventos de todos os portes.
              </p>
              <p>
                Nossa jornada começou com um simples sistema de som e hoje evoluiu para uma empresa completa de soluções audiovisuais, oferecendo desde serviços de DJ profissional até complexas instalações de vídeo mapping e painéis de LED.
              </p>
              <p>
                Com uma equipe altamente qualificada e anos de experiência no mercado, nos orgulhamos de ter participado de mais de 500 eventos bem-sucedidos, sempre mantendo nosso compromisso com a excelência e a satisfação do cliente.
              </p>
              <p>
                Nossa missão é transformar cada evento em uma experiência única e inesquecível, combinando tecnologia de ponta com criatividade e profissionalismo.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Card className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec"
                alt="Equipe VortekLabs"
                className="w-full h-[500px] object-cover"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
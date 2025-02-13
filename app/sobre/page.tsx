import { Card } from "@/components/ui/card";

export default function SobrePage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#111827] pt-16 md:pt-0"> {/* Aumentado padding superior para mobile */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="w-full">
            <h1 className="text-4xl font-bold mb-8 mt-8 text-white animate-fade-in">História</h1> {/* Aumentado espaçamento inferior */}
            <div className="space-y-4 text-gray-300">
              <p className="transition-all duration-300 hover:text-white">
                A VortekLabs nasceu da paixão por criar experiências únicas e memoráveis através da tecnologia e da música. Desde 2014, temos sido pioneiros em trazer soluções audiovisuais inovadoras para eventos de todos os portes.
              </p>
              <p className="transition-all duration-300 hover:text-white">
                Nossa jornada começou com um simples sistema de som e hoje evoluiu para uma empresa completa de soluções audiovisuais, oferecendo desde serviços de DJ profissional até complexas instalações de vídeo mapping e painéis de LED.
              </p>
              <p className="transition-all duration-300 hover:text-white">
                Com uma equipe altamente qualificada e anos de experiência no mercado, nos orgulhamos de ter participado de mais de 500 eventos bem-sucedidos, sempre mantendo nosso compromisso com a excelência e a satisfação do cliente.
              </p>
              <p className="transition-all duration-300 hover:text-white">
                Nossa missão é transformar cada evento em uma experiência única e inesquecível, combinando tecnologia de ponta com criatividade e profissionalismo.
              </p>
            </div>
          </div>
          <div className="w-full">
            <Card className="overflow-hidden bg-[#374151] border-none hover:bg-[#1C64F2] transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1C64F2]/30 mb-12 md:mb-0">
              <img
                src="/img/ANDRE PONTES CERIMONIAL DA BARRA.jpg"
                alt="Equipe VortekLabs"
                className="w-full h-[500px] object-cover transition-transform duration-300 hover:scale-105"
              />
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#111827]">
      <div className="container max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-white animate-fade-in">Entre em Contato</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 bg-[#374151] border-none hover:border-[#1C64F2] transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1C64F2]/30">
            <h2 className="text-2xl font-semibold mb-6 text-white">Informações de Contato</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="h-5 w-5" />
                <span>contato@vorteklabs.com</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="h-5 w-5" />
                <span>(11) 99999-9999</span>
              </div>
              
              <div className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors">
                <MapPin className="h-5 w-5" />
                <span>São Paulo, SP</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 text-white">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-[#374151] border-none hover:border-[#1C64F2] transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1C64F2]/30">
            <h2 className="text-2xl font-semibold mb-6 text-white">Horário de Atendimento</h2>
            <div className="space-y-2 text-gray-300">
              <p className="flex justify-between hover:text-white transition-colors">
                <span>Segunda a Sexta</span>
                <span>9h às 18h</span>
              </p>
              <p className="flex justify-between hover:text-white transition-colors">
                <span>Sábado</span>
                <span>9h às 13h</span>
              </p>
              <p className="flex justify-between hover:text-white transition-colors">
                <span>Domingo</span>
                <span>Fechado</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
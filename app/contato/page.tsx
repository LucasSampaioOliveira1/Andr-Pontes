import { Card } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";

export default function ContatoPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="container max-w-4xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">Entre em Contato</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Informações de Contato</h2>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>contato@vorteklabs.com</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary" />
                <span>(11) 99999-9999</span>
              </div>
              
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-primary" />
                <span>São Paulo, SP</span>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
              <div className="flex gap-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-2xl font-semibold mb-6">Horário de Atendimento</h2>
            <div className="space-y-2">
              <p className="flex justify-between">
                <span>Segunda a Sexta</span>
                <span>9h às 18h</span>
              </p>
              <p className="flex justify-between">
                <span>Sábado</span>
                <span>9h às 13h</span>
              </p>
              <p className="flex justify-between">
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
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import CountUpSection from "@/components/CountUpSection";
import TestimonialSection from "@/components/TestimonialSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center pt-32 bg-[#111827]">
      {/* Hero Section */}
      <section className="container flex-1 flex items-center px-4 md:px-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center w-full">
          <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">
              Transforme seu evento em uma experiência única
            </h1>
            <p className="text-lg text-white mb-6">
              Somos especialistas em criar momentos inesquecíveis através de soluções audiovisuais e DJ profissional para seu evento.
            </p>
            <Button 
              asChild 
              size="lg" 
              className="w-full md:w-auto bg-[#1C64F2] hover:bg-[#1C64F2]/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-[#1C64F2]/30 hover:translate-y-[-2px] active:translate-y-[1px]"
            >
              <Link href="/orcamento">Solicitar Orçamento</Link>
            </Button>
          </div>
          <div className="relative aspect-video w-full">
            <img
              src="/img/foto1.jpg"
              alt="DJ em evento"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Statistics */}
      <CountUpSection />
    </main>
  );
}
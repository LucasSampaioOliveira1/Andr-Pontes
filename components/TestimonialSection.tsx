"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const testimonials = [
  {
    content: "Incrível trabalho! A qualidade do som e a iluminação transformaram completamente nosso evento. A equipe foi muito profissional e atenciosa.",
    author: "Maria Silva",
    role: "Organizadora de Eventos",
    event: "Casamento"
  },
  {
    content: "Profissionalismo e dedicação em cada detalhe. Superou todas as expectativas! O equipamento de última geração fez toda diferença.",
    author: "João Santos",
    role: "Empresário",
    event: "Evento Corporativo"
  },
  {
    content: "O melhor serviço de DJ que já contratamos. Playlist perfeita e energia contagiante! Todos os convidados elogiaram muito.",
    author: "Ana Costa",
    role: "Cliente",
    event: "Festa de Formatura"
  },
  {
    content: "Estrutura impecável e som de altíssima qualidade. A iluminação criou uma atmosfera única para nossa festa.",
    author: "Pedro Oliveira",
    role: "Cliente",
    event: "Aniversário de 15 anos"
  },
  {
    content: "Equipe extremamente profissional e equipamentos de primeira linha. O vídeo mapping foi espetacular!",
    author: "Carla Mendes",
    role: "Produtora de Eventos",
    event: "Show Corporativo"
  },
  {
    content: "Serviço excepcional do início ao fim. A pista de LED foi um sucesso absoluto entre os convidados.",
    author: "Roberto Almeida",
    role: "Empresário",
    event: "Festa de Fim de Ano"
  }
];

const TestimonialSection = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="container py-16 bg-[#111827]">
      <h2 className="text-3xl font-bold text-center mb-12 text-white">
        O que nossos clientes dizem
      </h2>
      
      <div className="relative mx-4 md:mx-0"> {/* Adicionado margin para mobile */}
        <button className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-[#1C64F2] swiper-button-prev hover:text-[#1C64F2]/80 transition-colors">
          <ChevronLeft className="h-8 w-8" />
        </button>
        
        <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full text-[#1C64F2] swiper-button-next hover:text-[#1C64F2]/80 transition-colors">
          <ChevronRight className="h-8 w-8" />
        </button>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true}
          loop={true}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card
                className="p-8 transition-all duration-500 ease-in-out hover:border-[#93C5FD] hover:scale-105 backdrop-blur-sm"
                style={{
                  border: "1px solid rgba(107, 114, 128, 0.3)",
                  background: "rgba(55, 65, 81, 0.9)",
                  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
                }}
              >
                <Quote className="h-8 w-8 text-[#93C5FD] mb-6" />
                <p className="text-white mb-6 text-lg leading-relaxed italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="border-t border-gray-600 pt-4">
                  <p className="font-semibold text-white text-lg">{testimonial.author}</p>
                  <p className="text-[#93C5FD] mb-1">{testimonial.role}</p>
                  <p className="text-sm text-gray-400">{testimonial.event}</p>
                </div>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default TestimonialSection;
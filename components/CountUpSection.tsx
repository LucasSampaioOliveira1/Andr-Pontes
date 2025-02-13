"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Card } from "@/components/ui/card";

const stats = [
  { label: "Projetos realizados", value: 500 },
  { label: "Anos de experiência", value: 10 },
  { label: "Profissionais no time", value: 15 },
];

const CountUpSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Não renderiza nada até o componente estar montado no cliente
  if (!mounted) {
    return null;
  }

  return (
    <section ref={ref} className="container py-24 bg-[#111827] rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-0"> {/* Adicionado padding horizontal para mobile */}
        {stats.map((stat, index) => (
          <Card 
            key={index} 
            className="p-8 text-center bg-[#111827] border border-[#1C64F2]/20 hover:border-[#1C64F2]/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-[#1C64F2]/10"
          >
            <div className="text-5xl font-bold mb-4 text-white bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              {inView ? (
                <CountUp end={stat.value} duration={2} />
              ) : (
                '0'
              )}
              <span className="text-[#1C64F2]">+</span>
            </div>
            <div className="text-gray-400 text-lg font-medium tracking-wide">{stat.label}</div>
          </Card>
        ))}
      </div>
    </section>
  );
};

const CountUp = ({ end, duration }: { end: number; duration: number }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const startTimeRef = useRef(0);

  useEffect(() => {
    startTimeRef.current = Date.now();
    countRef.current = 0;
    
    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTimeRef.current) / (duration * 1000), 1);
      
      if (progress < 1) {
        countRef.current = Math.floor(end * progress);
        setCount(countRef.current);
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };
    
    requestAnimationFrame(animate);
    
    return () => {
      countRef.current = 0;
    };
  }, [end, duration]);

  return <>{count}</>;
};

export default CountUpSection;
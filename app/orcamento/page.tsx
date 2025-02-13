"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "5527999164443"; // Coloque seu número aqui no formato: 55 + DDD + número

const formSchema = z.object({
  nome: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  telefone: z.string().min(10, "Telefone inválido"),
  tipoServico: z.string(),
  mensagem: z.string().min(10, "Mensagem deve ter pelo menos 10 caracteres"),
});

export default function OrcamentoPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      telefone: "",
      tipoServico: "",
      mensagem: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const message = `*Novo Orçamento*\n\n*Nome:* ${values.nome}\n*Email:* ${values.email}\n*Telefone:* ${values.telefone}\n*Tipo de Serviço:* ${values.tipoServico}\n*Mensagem:* ${values.mensagem}`;
    
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    toast.success("Redirecionando para o WhatsApp!", {
      description: "Continue o atendimento no WhatsApp.",
    });
    
    form.reset();
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#111827]">
      <div className="container max-w-2xl mx-auto py-8">
        <h1 className="text-4xl font-bold mb-8 text-center text-white">Solicitar Orçamento</h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-[#374151] p-8 rounded-lg shadow-md">
            <FormField
              control={form.control}
              name="nome"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Seu nome completo" {...field} className="bg-[#1F2937] text-white border-none focus:ring-[#1A56DB]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Email</FormLabel>
                  <FormControl>
                    <Input placeholder="seu@email.com" type="email" {...field} className="bg-[#1F2937] text-white border-none focus:ring-[#1A56DB]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="telefone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="(11) 99999-9999" {...field} className="bg-[#1F2937] text-white border-none focus:ring-[#1A56DB]" />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="tipoServico"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Tipo de Serviço</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-[#1F2937] text-white border-none focus:ring-[#1A56DB]">
                        <SelectValue placeholder="Selecione um serviço" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-[#1F2937] text-white border-none">
                      <SelectItem value="audiovisual">Áudio Visual</SelectItem>
                      <SelectItem value="dj">DJ</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="mensagem"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white">Mensagem</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva seu evento e suas necessidades..."
                      className="min-h-[120px] bg-[#1F2937] text-white border-none focus:ring-[#1A56DB]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-[#1A56DB] text-white hover:bg-[#1E40AF] transform hover:scale-105 transition-all duration-300 hover:shadow-lg hover:shadow-[#1A56DB]/30"
            >
              Enviar Orçamento
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
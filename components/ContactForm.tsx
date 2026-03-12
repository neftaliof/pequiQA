"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID
  ? `https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID}`
  : null;

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!FORMSPREE_ENDPOINT) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (!FORMSPREE_ENDPOINT) {
    return (
      <Card className="bg-white border border-primary/10 shadow-lg">
        <CardContent className="p-8">
          <p className="text-text/70 text-center">
            Configure <code className="text-sm bg-background-alt px-1 rounded">NEXT_PUBLIC_FORMSPREE_FORM_ID</code> no
            .env.local para ativar o formulário. Crie um form em{" "}
            <a
              href="https://formspree.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline"
            >
              formspree.io
            </a>
            .
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-white border border-primary/10 shadow-lg">
      <CardContent className="p-8">
        <h3 className="text-2xl font-display font-bold text-primary mb-2">
          Envie uma mensagem
        </h3>
        <p className="text-text/70 mb-6">
          Preencha o formulário e responderemos em até 24 horas úteis.
        </p>

        {status === "success" && (
          <div
            className="mb-6 p-4 rounded-lg bg-green-50 border border-green-200 flex items-center gap-3 text-green-800"
            role="alert"
          >
            <CheckCircle className="w-5 h-5 flex-shrink-0" />
            <span>Mensagem enviada. Obrigado! Entraremos em contato em breve.</span>
          </div>
        )}
        {status === "error" && (
          <div
            className="mb-6 p-4 rounded-lg bg-red-50 border border-red-200 flex items-center gap-3 text-red-800"
            role="alert"
          >
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <span>Não foi possível enviar. Tente o WhatsApp ou o e-mail abaixo.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-text mb-1.5">
                Nome *
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                placeholder="Seu nome"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-sm font-medium text-text mb-1.5">
                E-mail *
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                placeholder="seu@email.com"
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-phone" className="block text-sm font-medium text-text mb-1.5">
              Telefone / WhatsApp
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
              placeholder="(00) 00000-0000"
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="block text-sm font-medium text-text mb-1.5">
              Mensagem *
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              className="w-full px-4 py-2.5 rounded-md border border-border bg-background text-text focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent resize-y min-h-[120px]"
              placeholder="Conte brevemente como podemos ajudar..."
            />
          </div>
          <Button
            type="submit"
            variant="accent"
            size="lg"
            className="w-full sm:w-auto"
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Enviar mensagem
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

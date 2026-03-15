"use client";

import { MessageCircle, Mail } from 'lucide-react';
import { PremiumButton } from './PremiumButton';

const WHATSAPP_URL = "https://wa.me/5548988526644?text=Ol%C3%A1%21%20Vi%20o%20site%20da%20Pequi%20QA%20e%20quero%20entender%20como%20voc%C3%AAs%20podem%20ajudar.";

export function FinalCTA() {
  return (
    <section className="relative py-24" style={{ background: '#F4EFE6' }}>
      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', top: '-1px', height: '100px' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="mb-6 font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#0B2F1F', lineHeight: '1.2' }}>Pronto para transformar a qualidade do seu produto?</h2>
          <p className="mb-10 font-body" style={{ fontSize: '1.25rem', color: '#133A28', opacity: 0.8 }}>Agende uma conversa sem compromisso e receba um diagnóstico.</p>

          <div className="flex flex-wrap gap-4 justify-center">
            <PremiumButton variant="primary" size="large" icon={false} href={WHATSAPP_URL}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Falar no WhatsApp
            </PremiumButton>
            <PremiumButton variant="secondary" size="large" icon={false} href="mailto:contato@pequiqa.com.br">
              <Mail className="w-5 h-5 mr-2" />
              Enviar e-mail
            </PremiumButton>
          </div>
        </div>
      </div>
    </section>
  );
}

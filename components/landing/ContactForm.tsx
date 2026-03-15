"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { PremiumButton } from './PremiumButton';

export function ContactForm() {
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormState('success');
        setTimeout(() => {
          setFormState('idle');
          setFormData({ name: '', email: '', company: '', phone: '', message: '' });
        }, 4000);
      } else {
        setFormState('error');
        setTimeout(() => setFormState('idle'), 3000);
      }
    } catch {
      setFormState('error');
      setTimeout(() => setFormState('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const inputStyle: React.CSSProperties = {
    background: 'rgba(255, 255, 255, 0.05)',
    border: '1px solid rgba(242, 183, 5, 0.3)',
    color: '#FFFFFF',
    fontSize: '1rem',
  };

  const focusHandlers = {
    onFocus: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = '#F2B705';
      e.target.style.boxShadow = '0 0 0 3px rgba(242, 183, 5, 0.1)';
    },
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      e.target.style.borderColor = 'rgba(242, 183, 5, 0.3)';
      e.target.style.boxShadow = 'none';
    },
  };

  return (
    <section className="relative py-24" style={{ background: 'linear-gradient(180deg, #0B2F1F 0%, #133A28 100%)' }}>
      <div
        className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25"
        style={{ background: '#F2B705', top: '-1px', height: '100px' }}
      />

      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="mb-6 font-display"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FFFFFF', lineHeight: '1.2' }}
            >
              Vamos conversar sobre qualidade?
            </h2>

            <p
              className="mb-8 font-body"
              style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.8)', lineHeight: '1.8' }}
            >
              Preencha o formulário e receba um diagnóstico gratuito sobre a maturidade de qualidade do seu produto digital.
            </p>

            <div className="space-y-4">
              {[
                { label: 'Resposta em até 24h', icon: '⚡' },
                { label: 'Diagnóstico gratuito', icon: '🎁' },
                { label: 'Sem compromisso', icon: '✅' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                >
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-body" style={{ fontSize: '1rem', color: '#F2B705' }}>
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div
              className="relative p-8 rounded-2xl overflow-hidden"
              style={{
                background: 'rgba(244, 239, 230, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(242, 183, 5, 0.2)',
              }}
            >
              <motion.div
                className="absolute inset-x-0 h-px pointer-events-none"
                style={{ background: 'linear-gradient(90deg, transparent, #F2B705, transparent)' }}
                animate={{ top: ['0%', '100%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
              />

              {formState === 'success' ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <CheckCircle2 className="w-16 h-16 mx-auto mb-4" style={{ color: '#F2B705' }} />
                  <h3 className="mb-2 font-display" style={{ fontSize: '1.75rem', color: '#FFFFFF' }}>
                    Mensagem enviada!
                  </h3>
                  <p className="font-body" style={{ fontSize: '1rem', color: 'rgba(255, 255, 255, 0.7)' }}>
                    Retornaremos em até 24 horas.
                  </p>
                </motion.div>
              ) : formState === 'error' ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <p className="font-body text-red-400 mb-2">Erro ao enviar. Tente novamente.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div>
                    <label htmlFor="cf-name" className="block mb-2 font-body text-sm uppercase tracking-wider" style={{ color: '#F2B705' }}>
                      Nome completo *
                    </label>
                    <input
                      type="text" id="cf-name" name="name" required
                      value={formData.name} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 font-body"
                      style={inputStyle} {...focusHandlers}
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cf-email" className="block mb-2 font-body text-sm uppercase tracking-wider" style={{ color: '#F2B705' }}>
                        E-mail *
                      </label>
                      <input
                        type="email" id="cf-email" name="email" required
                        value={formData.email} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 font-body"
                        style={inputStyle} {...focusHandlers}
                      />
                    </div>
                    <div>
                      <label htmlFor="cf-phone" className="block mb-2 font-body text-sm uppercase tracking-wider" style={{ color: '#F2B705' }}>
                        Telefone
                      </label>
                      <input
                        type="tel" id="cf-phone" name="phone"
                        value={formData.phone} onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg transition-all duration-300 font-body"
                        style={inputStyle} {...focusHandlers}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cf-company" className="block mb-2 font-body text-sm uppercase tracking-wider" style={{ color: '#F2B705' }}>
                      Empresa
                    </label>
                    <input
                      type="text" id="cf-company" name="company"
                      value={formData.company} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg transition-all duration-300 font-body"
                      style={inputStyle} {...focusHandlers}
                    />
                  </div>

                  <div>
                    <label htmlFor="cf-message" className="block mb-2 font-body text-sm uppercase tracking-wider" style={{ color: '#F2B705' }}>
                      Mensagem *
                    </label>
                    <textarea
                      id="cf-message" name="message" required rows={4}
                      value={formData.message} onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg resize-none transition-all duration-300 font-body"
                      style={inputStyle} {...focusHandlers}
                    />
                  </div>

                  <div className="pt-4">
                    <PremiumButton
                      variant="primary"
                      size="large"
                      icon={false}
                      type="submit"
                      disabled={formState === 'submitting'}
                    >
                      {formState === 'submitting' ? (
                        <>
                          <motion.div
                            className="w-5 h-5 border-2 border-[#0B2F1F]/30 border-t-[#0B2F1F] rounded-full mr-2"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          />
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Solicitar diagnóstico
                        </>
                      )}
                    </PremiumButton>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

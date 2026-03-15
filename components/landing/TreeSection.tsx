"use client";

import { motion } from 'framer-motion';
import { PequiTree } from './PequiTree';

const techTools = [
  { name: 'Playwright', src: '/tools/playwright.svg', bg: '#2EAD33', x: '5%', y: '55%', delay: 0.3, desc: 'E2E Testing' },
  { name: 'Cypress', src: '/tools/cypress.svg', bg: '#1B1E2E', x: '91%', y: '57%', delay: 0.5, desc: 'E2E Testing' },
  { name: 'K6', src: '/tools/k6.svg', bg: '#7D64FF', x: '11%', y: '46%', delay: 0.7, desc: 'Load Testing' },
  { name: 'Postman', src: '/tools/postman.svg', bg: '#FF6C37', x: '86%', y: '47%', delay: 0.9, desc: 'API Testing' },
  { name: 'JMeter', src: '/tools/jmeter.svg', bg: '#D22128', x: '22%', y: '44%', delay: 1.1, desc: 'Performance' },
  { name: 'Selenium', src: '/tools/selenium.svg', bg: '#43B02A', x: '76%', y: '43%', delay: 1.3, desc: 'UI Automation' },
];

export function TreeSection() {
  return (
    <section className="relative py-20" style={{ background: 'linear-gradient(180deg, #0B2F1F 0%, #133A28 100%)' }}>
      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', top: '-1px', height: '80px' }} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="mb-4 font-display" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', color: '#FFFFFF' }}>
            Como o Pequi
          </h2>
          <p className="max-w-2xl mx-auto font-body" style={{ fontSize: '1.125rem', color: 'rgba(255, 255, 255, 0.7)', lineHeight: '1.8' }}>
            Assim como o pequizeiro cresce forte nas raízes do cerrado goiano,
            a qualidade do seu software precisa de raízes sólidas: processo estruturado,
            automação consistente e prevenção estratégica.
          </p>
        </div>

        <div className="relative w-full max-w-5xl mx-auto">
          <PequiTree />

          {techTools.map((tool, index) => (
            <motion.div
              key={tool.name}
              className="absolute"
              style={{ left: tool.x, top: tool.y, transform: 'translate(-50%, -50%)', zIndex: 10 }}
              initial={false}
              whileHover={{ scale: 1.35, zIndex: 20 }}
            >
              <motion.div
                className="relative group cursor-pointer"
                animate={{
                  y: [0, index % 2 === 0 ? -10 : -13, 0],
                  x: [0, index % 2 === 0 ? -4 : 4, 0],
                  rotate: [0, index % 2 === 0 ? -3 : 3, 0],
                }}
                transition={{ duration: 3.2 + index * 0.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <motion.div
                  className="absolute rounded-2xl opacity-60"
                  style={{ inset: '-6px', background: 'radial-gradient(circle, rgba(242,183,5,0.35), transparent 70%)' }}
                  animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                />

                <div
                  className="relative rounded-2xl overflow-hidden flex items-center justify-center transition-all duration-300 group-hover:shadow-2xl"
                  style={{
                    width: '58px',
                    height: '58px',
                    background: tool.bg,
                    border: '2.5px solid rgba(242, 183, 5, 0.7)',
                    boxShadow: '0 6px 24px rgba(0,0,0,0.5), 0 0 0 1px rgba(242,183,5,0.2)',
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={tool.src}
                    alt={tool.name}
                    width={32}
                    height={32}
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                  <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.18) 0%, transparent 50%)' }} />
                </div>

                <div
                  className="absolute bottom-full mb-2.5 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap"
                  style={{ background: 'rgba(7,26,15,0.96)', border: '1px solid rgba(242,183,5,0.4)', borderRadius: '8px', padding: '5px 10px', backdropFilter: 'blur(8px)' }}
                >
                  <div className="font-body" style={{ fontSize: '0.75rem', color: '#F2B705', fontWeight: 600 }}>
                    {tool.name}
                  </div>
                  <div className="font-body" style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.6)' }}>
                    {tool.desc}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="italic max-w-lg mx-auto font-display" style={{ fontSize: '1.125rem', color: '#F2B705' }}>
            Cada fruto dourado representa uma ferramenta de qualidade.
            <br />
            Tecnologia que nasce do processo e floresce na produção.
          </p>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 w-0.5 opacity-25" style={{ background: '#F2B705', bottom: '-1px', height: '80px' }} />
    </section>
  );
}

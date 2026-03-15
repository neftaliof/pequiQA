'use client';

import { useEffect, useRef } from 'react';

export function PequizeiroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    let t = 0;
    let animId: number;

    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);

    // PARTÍCULAS
    const particles: any[] = [];
    class Particle {
      x: number; y: number; type: string;
      vx: number; vy: number; life: number; decay: number;
      size: number; angle: number; spin: number; color: string;
      constructor(x: number, y: number, type: string) {
        this.x = x; this.y = y; this.type = type;
        this.vx = (Math.random()-.5)*1.2;
        this.vy = Math.random()*0.8 + 0.3;
        this.life = 1; this.decay = 0.005 + Math.random()*0.008;
        this.size = type === 'fruit' ? 3+Math.random()*3 : 1.5+Math.random()*2;
        this.angle = Math.random()*Math.PI*2;
        this.spin = (Math.random()-.5)*0.05;
        this.color = type === 'fruit'
          ? ['#F0A500','#FFD97D','#C8860A'][Math.floor(Math.random()*3)]
          : `rgba(${100+Math.random()*60|0},${160+Math.random()*40|0},${40+Math.random()*30|0},`;
      }
      update() {
        this.x += this.vx + Math.sin(t*0.02+this.angle)*0.3;
        this.y += this.vy;
        this.life -= this.decay;
        this.angle += this.spin;
        this.vy += 0.01;
      }
      draw() {
        ctx!.save();
        ctx!.globalAlpha = this.life * 0.8;
        ctx!.translate(this.x, this.y);
        ctx!.rotate(this.angle);
        if (this.type === 'fruit') {
          ctx!.beginPath();
          ctx!.arc(0, 0, this.size, 0, Math.PI*2);
          ctx!.fillStyle = this.color;
          ctx!.fill();
          ctx!.beginPath();
          ctx!.arc(-this.size*.3, -this.size*.3, this.size*.35, 0, Math.PI*2);
          ctx!.fillStyle = 'rgba(255,255,255,0.4)';
          ctx!.fill();
        } else {
          ctx!.beginPath();
          ctx!.ellipse(0, 0, this.size, this.size*2.5, 0, 0, Math.PI*2);
          ctx!.fillStyle = this.color + '0.7)';
          ctx!.fill();
        }
        ctx!.restore();
      }
    }

    // VAGA-LUMES
    const fireflies = Array.from({length:18}, () => ({
      x: Math.random()*W, y: Math.random()*H,
      vx: (Math.random()-.5)*0.4, vy: (Math.random()-.5)*0.3,
      phase: Math.random()*Math.PI*2,
      size: 1.5+Math.random()*1.5
    }));

    function drawBg() {
      // Background transparente no topo (deixar StarLink) - apenas neblina na base
      ctx!.clearRect(0, 0, W, H);
      
      const fog = ctx!.createLinearGradient(0, H*0.7, 0, H);
      fog.addColorStop(0, 'rgba(0,0,0,0)');
      fog.addColorStop(0.5, 'rgba(10,24,6,0.3)');
      fog.addColorStop(1, 'rgba(10,24,6,0.6)');
      ctx!.fillStyle = fog;
      ctx!.fillRect(0, H*0.7, W, H*0.3);

      // Arbustos de chão
      ctx!.fillStyle = '#050d03';
      const shrubs = [
        {x:0.05,w:80,h:35},{x:0.12,w:60,h:25},
        {x:0.82,w:90,h:40},{x:0.88,w:55,h:30},
        {x:0.93,w:70,h:28},{x:0.72,w:45,h:20},
      ];
      shrubs.forEach(s => {
        ctx!.beginPath();
        ctx!.ellipse(s.x*W, H*0.82, s.w, s.h, 0, 0, Math.PI*2);
        ctx!.fill();
      });
    }

    function drawTree(ox: number, oy: number, sway: number) {
      const cx = ox, base = oy;
      const sw = Math.sin(sway) * 3;

      // atmosfera
      const grd = ctx!.createRadialGradient(cx, base-180, 20, cx, base-160, 260);
      grd.addColorStop(0, 'rgba(74,124,40,0.08)');
      grd.addColorStop(0.5, 'rgba(45,80,22,0.04)');
      grd.addColorStop(1, 'rgba(0,0,0,0)');
      ctx!.beginPath(); ctx!.arc(cx, base-160, 260, 0, Math.PI*2);
      ctx!.fillStyle = grd; ctx!.fill();

      // raízes
      const roots = [
        {dx:-90,dy:70,c1x:-40,c1y:30,c2x:-70,c2y:55,w:5},
        {dx:-55,dy:50,c1x:-20,c1y:20,c2x:-40,c2y:40,w:3.5},
        {dx:70,dy:68,c1x:30,c1y:28,c2x:55,c2y:52,w:5},
        {dx:40,dy:52,c1x:15,c1y:22,c2x:32,c2y:42,w:3},
        {dx:0,dy:55,c1x:5,c1y:25,c2x:2,c2y:45,w:2.5},
      ];
      roots.forEach(r => {
        ctx!.beginPath();
        ctx!.moveTo(cx, base);
        ctx!.bezierCurveTo(cx+r.c1x,base+r.c1y,cx+r.c2x,base+r.c2y,cx+r.dx,base+r.dy);
        ctx!.strokeStyle = '#3d2a0a'; ctx!.lineWidth = r.w;
        ctx!.lineCap = 'round'; ctx!.stroke();
      });

      // tronco
      ctx!.beginPath();
      ctx!.moveTo(cx-16, base);
      ctx!.bezierCurveTo(cx-18+sw*.3,base-80,cx-14+sw*.5,base-160,cx-8+sw,base-240);
      ctx!.bezierCurveTo(cx-6+sw,base-280,cx-2+sw,base-310,cx+sw,base-330);
      ctx!.lineTo(cx+12+sw,base-330);
      ctx!.bezierCurveTo(cx+10+sw,base-310,cx+6+sw,base-280,cx+8+sw,base-240);
      ctx!.bezierCurveTo(cx+14+sw*.5,base-160,cx+18+sw*.3,base-80,cx+16,base);
      ctx!.closePath();
      const trunkGrd = ctx!.createLinearGradient(cx-16,base,cx+16,base);
      trunkGrd.addColorStop(0,'#2a1a06');
      trunkGrd.addColorStop(0.3,'#6B4C1E');
      trunkGrd.addColorStop(0.65,'#8B6020');
      trunkGrd.addColorStop(1,'#4a3010');
      ctx!.fillStyle = trunkGrd; ctx!.fill();

      // casca textura
      for(let i=0;i<8;i++){
        const ty=base-40-i*32+Math.sin(i*1.3)*8;
        const tx=cx+Math.sin(i*2.1)*3+sw*0.4;
        ctx!.beginPath();
        ctx!.moveTo(tx-6,ty);
        ctx!.quadraticCurveTo(tx,ty-8,tx+4,ty+4);
        ctx!.strokeStyle='rgba(30,15,3,0.35)'; ctx!.lineWidth=1.5; ctx!.stroke();
      }

      // galhos
      const branches = [
        {y:-230,a:-0.9+sw*.008,l:110,w:9},
        {y:-250,a:-0.6+sw*.006,l:90,w:7},
        {y:-270,a:0.8+sw*.008,l:115,w:9},
        {y:-255,a:0.55+sw*.007,l:85,w:7},
        {y:-300,a:-0.25+sw*.005,l:70,w:6},
        {y:-295,a:0.2+sw*.005,l:65,w:5.5},
        {y:-325,a:-0.05+sw*.003,l:55,w:5},
      ];
      branches.forEach(b => {
        const bx=cx+sw*(b.y/-330), by=base+b.y;
        const ex=bx+Math.cos(b.a-Math.PI/2)*b.l;
        const ey=by+Math.sin(b.a-Math.PI/2)*b.l;
        ctx!.beginPath(); ctx!.moveTo(bx,by);
        ctx!.quadraticCurveTo(bx+(ex-bx)*.5+Math.cos(b.a)*15,by+(ey-by)*.5,ex,ey);
        ctx!.strokeStyle='#5A3E15'; ctx!.lineWidth=b.w; ctx!.lineCap='round'; ctx!.stroke();
        const sub=b.l*0.6;
        const sx2=bx+Math.cos(b.a-Math.PI/2)*sub+Math.cos(b.a)*10;
        const sy2=by+Math.sin(b.a-Math.PI/2)*sub;
        [-0.4,0.4,-0.7,0.6].forEach(da=>{
          const sl=40+Math.random()*25;
          const sa=b.a+da;
          ctx!.beginPath(); ctx!.moveTo(sx2,sy2);
          ctx!.lineTo(sx2+Math.cos(sa-Math.PI/2)*sl,sy2+Math.sin(sa-Math.PI/2)*sl);
          ctx!.strokeStyle='#4a3010'; ctx!.lineWidth=b.w*0.35; ctx!.stroke();
        });
      });

      // copa — 15 camadas
      const foliage = [
        {ox:-20,oy:-200,rx:140,ry:110,c:'#0d2008',a:0.9},
        {ox:30,oy:-210,rx:130,ry:105,c:'#0f2509',a:0.85},
        {ox:-60,oy:-220,rx:100,ry:85,c:'#1a3d0a',a:0.9},
        {ox:65,oy:-215,rx:105,ry:88,c:'#1e4510',a:0.88},
        {ox:0,oy:-255,rx:90,ry:80,c:'#1a3d0a',a:0.85},
        {ox:-45,oy:-235,rx:85,ry:72,c:'#2D5016',a:0.95},
        {ox:50,oy:-230,rx:88,ry:74,c:'#2D5016',a:0.92},
        {ox:-10,oy:-270,rx:80,ry:70,c:'#2D5016',a:0.9},
        {ox:-30,oy:-248,rx:70,ry:62,c:'#3A6B1E',a:0.88},
        {ox:35,oy:-244,rx:72,ry:64,c:'#3A6B1E',a:0.85},
        {ox:5,oy:-282,rx:65,ry:58,c:'#3A6B1E',a:0.85},
        {ox:-10,oy:-310,rx:55,ry:50,c:'#4A7C28',a:0.9},
        {ox:15,oy:-305,rx:52,ry:48,c:'#4A7C28',a:0.88},
        {ox:-55,oy:-248,rx:42,ry:36,c:'#5a9830',a:0.25},
        {ox:-15,oy:-308,rx:35,ry:30,c:'#6aab38',a:0.2},
      ];
      foliage.forEach(f => {
        const fx=cx+f.ox+sw*(Math.abs(f.oy)/330);
        const fy=base+f.oy;
        ctx!.save(); ctx!.translate(fx,fy);
        ctx!.rotate(Math.sin(t*0.008+f.ox*0.01)*0.03);
        ctx!.scale(1+Math.sin(t*0.015+f.oy*0.01)*0.012,1+Math.cos(t*0.012+f.ox*0.01)*0.01);
        ctx!.beginPath();
        const r=f.rx, r2=f.ry;
        ctx!.moveTo(0,-r2);
        ctx!.bezierCurveTo(r*.7,-r2*.8,r,-r2*.2,r*.85,r2*.3);
        ctx!.bezierCurveTo(r*.6,r2*.9,r*.2,r2,0,r2*.95);
        ctx!.bezierCurveTo(-r*.2,r2,-r*.65,r2*.85,-r*.9,r2*.2);
        ctx!.bezierCurveTo(-r,-r2*.3,-r*.65,-r2*.85,0,-r2);
        ctx!.closePath();
        ctx!.fillStyle=f.c; ctx!.globalAlpha=f.a; ctx!.fill(); ctx!.restore();
      });
      ctx!.globalAlpha=1;

      // frutos
      const fruits=[
        {ox:-42,oy:-225,s:7},{ox:55,oy:-218,s:8},
        {ox:-8,oy:-255,s:6.5},{ox:28,oy:-268,s:7.5},
        {ox:-62,oy:-248,s:6},{ox:68,oy:-238,s:7},
        {ox:-22,oy:-296,s:6},{ox:18,oy:-302,s:6.5},
        {ox:-35,oy:-195,s:5.5},{ox:40,oy:-200,s:6},
      ];
      fruits.forEach((f,i)=>{
        const bob=Math.sin(t*0.02+i*0.8)*2;
        const fx=cx+f.ox+sw*0.3, fy=base+f.oy+bob;
        const s=f.s*(0.95+Math.sin(t*0.015+i)*0.05);
        ctx!.beginPath(); ctx!.arc(fx,fy,s*1.15,0,Math.PI*2);
        ctx!.fillStyle='#2a5010'; ctx!.globalAlpha=0.7; ctx!.fill();
        const fg=ctx!.createRadialGradient(fx-s*.3,fy-s*.3,s*.1,fx,fy,s);
        fg.addColorStop(0,'#FFD97D'); fg.addColorStop(0.5,'#F0A500'); fg.addColorStop(1,'#C8860A');
        ctx!.beginPath(); ctx!.arc(fx,fy,s,0,Math.PI*2);
        ctx!.fillStyle=fg; ctx!.globalAlpha=0.95; ctx!.fill();
        ctx!.beginPath(); ctx!.arc(fx-s*.32,fy-s*.32,s*.35,0,Math.PI*2);
        ctx!.fillStyle='rgba(255,255,220,0.55)'; ctx!.globalAlpha=0.6; ctx!.fill();
        ctx!.globalAlpha=1;
      });

      // vaga-lumes na copa
      fireflies.forEach(ff=>{
        const inCanopy=ff.y<base-140&&ff.y>base-350&&Math.abs(ff.x-cx)<140;
        if(!inCanopy)return;
        const glow=(Math.sin(t*0.04+ff.phase)+1)*0.5;
        const gr=ctx!.createRadialGradient(ff.x,ff.y,0,ff.x,ff.y,ff.size*4);
        gr.addColorStop(0,`rgba(240,200,80,${glow*0.9})`); gr.addColorStop(1,'rgba(240,200,80,0)');
        ctx!.beginPath(); ctx!.arc(ff.x,ff.y,ff.size*4,0,Math.PI*2);
        ctx!.fillStyle=gr; ctx!.fill();
        ctx!.beginPath(); ctx!.arc(ff.x,ff.y,ff.size,0,Math.PI*2);
        ctx!.fillStyle=`rgba(255,230,100,${glow})`; ctx!.fill();
      });
    }

    let lastSpawn=0;
    function loop(){
      t++;
      drawBg();

      const treeX=W*0.72, treeY=H*0.92;

      if(t-lastSpawn>8){
        lastSpawn=t;
        const type=Math.random()>0.4?'fruit':'leaf';
        particles.push(new Particle(treeX+(Math.random()-.5)*160, treeY-100-Math.random()*200, type));
      }

      particles.forEach(p=>{p.update();p.draw()});
      const dead=particles.filter(p=>p.life<=0).length;
      particles.splice(0,dead);

      drawTree(treeX, treeY, t);

      fireflies.forEach(ff=>{
        ff.x+=ff.vx+Math.sin(t*0.02+ff.phase)*0.2;
        ff.y+=ff.vy+Math.cos(t*0.025+ff.phase)*0.15;
        if(ff.x<0)ff.x=W; if(ff.x>W)ff.x=0;
        if(ff.y<0)ff.y=H*0.6; if(ff.y>H)ff.y=0;
      });

      animId=requestAnimationFrame(loop);
    }
    loop();

    return ()=>{
      cancelAnimationFrame(animId);
      window.removeEventListener('resize',resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}

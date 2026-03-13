"use client";

import { useEffect, useState } from "react";

const PIPELINE_STAGES = ["commit", "build", "test", "deploy", "monitor"];

export default function SiteTrunk() {
  const [mounted, setMounted] = useState(false);
  const [winW, setWinW] = useState(1024);

  useEffect(() => {
    setMounted(true);
    setWinW(window.innerWidth);

    const onResize = () => setWinW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const isMobile = winW < 768;

  const svgW = 120;
  const svgH = 2000;
  const cx = svgW / 2;

  const trunkTop = 0;
  const trunkBot = svgH;

  const stageCount = PIPELINE_STAGES.length;
  const stageSpacing = (trunkBot - trunkTop - 200) / (stageCount - 1);
  const stageStartY = 100;

  const nodes = PIPELINE_STAGES.map((label, i) => ({
    x: cx + (i % 2 === 0 ? -4 : 4),
    y: stageStartY + i * stageSpacing,
    label,
  }));

  const branches = [
    { from: nodes[1], dir: -1, len: 35 },
    { from: nodes[2], dir: 1, len: 38 },
    { from: nodes[3], dir: -1, len: 32 },
  ];

  // Path top-to-bottom (for drawing the trunk line)
  const trunkPathDown = (() => {
    let d = `M ${cx} ${trunkTop}`;
    for (let i = 0; i < nodes.length; i++) {
      const n = nodes[i];
      const prev = i === 0 ? { x: cx, y: trunkTop } : nodes[i - 1];
      const midY = (prev.y + n.y) / 2;
      d += ` C ${prev.x} ${midY}, ${n.x} ${midY}, ${n.x} ${n.y}`;
    }
    const last = nodes[nodes.length - 1];
    d += ` C ${last.x} ${last.y + 100}, ${cx} ${trunkBot - 100}, ${cx} ${trunkBot}`;
    return d;
  })();

  // Path bottom-to-top (for packets traveling UPWARD from roots)
  const trunkPathUp = (() => {
    const allPts = [
      { x: cx, y: trunkBot },
      ...([...nodes].reverse()),
      { x: cx, y: trunkTop },
    ];
    let d = `M ${allPts[0].x} ${allPts[0].y}`;
    for (let i = 1; i < allPts.length; i++) {
      const prev = allPts[i - 1];
      const curr = allPts[i];
      const midY = (prev.y + curr.y) / 2;
      d += ` C ${prev.x} ${midY}, ${curr.x} ${midY}, ${curr.x} ${curr.y}`;
    }
    return d;
  })();

  // Multiple packets at different speeds/offsets
  const packets = [
    { dur: "10s", delay: "0s", r: 2.5, opacity: 0.6 },
    { dur: "14s", delay: "3s", r: 2, opacity: 0.4 },
    { dur: "18s", delay: "7s", r: 1.8, opacity: 0.35 },
  ];

  if (!mounted || isMobile) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden
    >
      <svg
        viewBox={`0 0 ${svgW} ${svgH}`}
        preserveAspectRatio="none"
        className="w-[60px] h-full absolute"
        style={{
          left: "50%",
          transform: "translateX(-50%)",
          opacity: 0.6,
        }}
      >
        <defs>
          <linearGradient id="trunk-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(200,160,60,0.08)" />
            <stop offset="30%" stopColor="rgba(200,160,60,0.2)" />
            <stop offset="70%" stopColor="rgba(200,160,60,0.18)" />
            <stop offset="100%" stopColor="rgba(140,100,40,0.12)" />
          </linearGradient>

          <linearGradient id="trunk-glow" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(253,217,106,0)" />
            <stop offset="20%" stopColor="rgba(253,217,106,0.06)" />
            <stop offset="80%" stopColor="rgba(253,217,106,0.04)" />
            <stop offset="100%" stopColor="rgba(253,217,106,0)" />
          </linearGradient>

          <filter id="node-glow">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="packet-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Trunk glow (wide, subtle) */}
        <path
          d={trunkPathDown}
          fill="none"
          stroke="url(#trunk-glow)"
          strokeWidth="12"
          strokeLinecap="round"
        />

        {/* Main trunk line */}
        <path
          d={trunkPathDown}
          fill="none"
          stroke="url(#trunk-grad)"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        {/* Side branches (git-like) */}
        {branches.map((br, i) => {
          const endX = br.from.x + br.dir * br.len;
          const endY = br.from.y - 15;
          const ctrlX = br.from.x + br.dir * br.len * 0.4;
          return (
            <g key={`br-${i}`}>
              <path
                d={`M ${br.from.x} ${br.from.y} C ${ctrlX} ${br.from.y}, ${endX} ${endY + 10}, ${endX} ${endY}`}
                fill="none"
                stroke="rgba(200,160,60,0.1)"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="3 5"
              />
              <circle
                cx={endX}
                cy={endY}
                r="2"
                fill="rgba(253,217,106,0.2)"
              />
            </g>
          );
        })}

        {/* Pipeline nodes */}
        {nodes.map((node, i) => (
          <g key={`node-${i}`} filter="url(#node-glow)">
            <circle
              cx={node.x}
              cy={node.y}
              r="4.5"
              fill="rgba(15,20,10,0.6)"
              stroke="rgba(253,217,106,0.3)"
              strokeWidth="0.8"
            >
              <animate
                attributeName="stroke-opacity"
                values="0.2;0.5;0.2"
                dur={`${2.5 + i * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
            <circle cx={node.x} cy={node.y} r="1.8" fill="rgba(253,217,106,0.35)">
              <animate
                attributeName="opacity"
                values="0.25;0.6;0.25"
                dur={`${2.5 + i * 0.4}s`}
                repeatCount="indefinite"
              />
            </circle>
            <text
              x={node.x + (i % 2 === 0 ? -10 : 10)}
              y={node.y + 1}
              textAnchor={i % 2 === 0 ? "end" : "start"}
              dominantBaseline="middle"
              fill="rgba(200,170,100,0.18)"
              fontSize="5"
              fontFamily="system-ui, sans-serif"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Multiple nutrient packets traveling UPWARD from roots to canopy */}
        {packets.map((pkt, i) => (
          <g key={`pkt-${i}`}>
            <circle
              r={pkt.r}
              fill={`rgba(253,230,130,${pkt.opacity})`}
              filter="url(#packet-glow)"
            >
              <animateMotion
                dur={pkt.dur}
                begin={pkt.delay}
                repeatCount="indefinite"
                path={trunkPathUp}
              />
            </circle>
            <circle
              r={pkt.r * 0.4}
              fill={`rgba(253,230,130,${pkt.opacity + 0.2})`}
            >
              <animateMotion
                dur={pkt.dur}
                begin={pkt.delay}
                repeatCount="indefinite"
                path={trunkPathUp}
              />
            </circle>
          </g>
        ))}
      </svg>
    </div>
  );
}

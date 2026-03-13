import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Pequi QA - Consultoria em Qualidade de Software";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          background:
            "radial-gradient(ellipse 120% 70% at 50% -10%, rgba(255,235,180,0.06) 0%, transparent 45%), linear-gradient(180deg, #0f0d08 0%, #0c0a06 25%, #080706 55%, #050504 100%)",
          color: "#FBF5E6",
          fontFamily: '"Playfair Display", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
        }}
      >
        {/* Logo + nome */}
        <div
          style={{
            display: "flex",
            fontSize: 96,
            fontWeight: 800,
            letterSpacing: -4,
            lineHeight: 1.05,
            textAlign: "center",
          }}
        >
          Pequi{" "}
          <span
            style={{
              color: "#F0A500",
              fontWeight: 700,
            }}
          >
            QA
          </span>
        </div>

        {/* Tagline */}
        <div
          style={{
            display: "flex",
            marginTop: 24,
            fontFamily:
              '"Syne", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize: 20,
            textTransform: "uppercase",
            letterSpacing: 8,
            color: "rgba(251,245,230,0.82)",
          }}
        >
          Qualidade que nasce do processo
        </div>

        {/* Linha de apoio */}
        <div
          style={{
            display: "flex",
            marginTop: 32,
            paddingInline: 48,
            maxWidth: 760,
            textAlign: "center",
            fontFamily:
              '"Syne", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
            fontSize: 18,
            color: "rgba(251,245,230,0.7)",
          }}
        >
          Consultoria especializada em QA, testes e implantação de processos
          de qualidade sem atravessadores.
        </div>
      </div>
    ),
    {
      width: size.width,
      height: size.height,
    }
  );
}


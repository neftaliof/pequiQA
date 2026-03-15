import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: NextRequest) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "Serviço de e-mail não configurado." },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const toEmail = process.env.CONTACT_TO_EMAIL || "contato@pequiqa.com.br";

    const body = await req.json();
    const { name, email, phone, company, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Nome, e-mail e mensagem são obrigatórios." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "E-mail inválido." },
        { status: 400 }
      );
    }

    await resend.emails.send({
      from: "Pequi QA <noreply@pequiqa.com.br>",
      to: [toEmail],
      replyTo: email,
      subject: `[Contato Site] ${name}${company ? ` — ${company}` : ""}`,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F4EFE6; border-radius: 12px; overflow: hidden;">
          <div style="background: #0B2F1F; padding: 32px; text-align: center;">
            <h1 style="color: #F2B705; font-size: 24px; margin: 0;">Novo contato pelo site</h1>
          </div>
          <div style="padding: 32px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0d8c8; color: #666; font-size: 14px; width: 120px;">Nome</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0d8c8; color: #0B2F1F; font-weight: 600;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0d8c8; color: #666; font-size: 14px;">E-mail</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0d8c8; color: #0B2F1F; font-weight: 600;">
                  <a href="mailto:${email}" style="color: #0B2F1F;">${email}</a>
                </td>
              </tr>
              ${phone ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0d8c8; color: #666; font-size: 14px;">Telefone</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0d8c8; color: #0B2F1F; font-weight: 600;">${phone}</td>
              </tr>` : ""}
              ${company ? `
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0d8c8; color: #666; font-size: 14px;">Empresa</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #e0d8c8; color: #0B2F1F; font-weight: 600;">${company}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top: 24px; padding: 20px; background: white; border-radius: 8px; border-left: 4px solid #F2B705;">
              <p style="color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 8px;">Mensagem</p>
              <p style="color: #0B2F1F; line-height: 1.6; margin: 0; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          <div style="background: #0B2F1F; padding: 16px; text-align: center;">
            <p style="color: rgba(255,255,255,0.5); font-size: 12px; margin: 0;">Pequi QA — Qualidade que dá frutos</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Erro interno ao enviar mensagem." },
      { status: 500 }
    );
  }
}

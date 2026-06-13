import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const runtime = 'nodejs';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 },
      );
    }

    const port = Number(process.env.SMTP_PORT) || 465;
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port,
      secure: port === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const teamEmail = process.env.TEAM_EMAIL || 'prabakaran@saisreelogistics.com';

    const serviceLabels: Record<string, string> = {
      manpower: 'Manpower Supply',
      warehousing: 'Warehousing',
      transportation: 'Transportation',
      '3pl': 'Integrated 3PL Solutions',
      other: 'Other',
    };

    await transporter.sendMail({
      from: `"Sai Sree Logistics" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
      to: teamEmail,
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:#f4f4f4;margin:0;padding:24px;">
          <table width="100%" cellpadding="0" cellspacing="0"><tr><td align="center">
            <table style="max-width:560px;width:100%;background:#fff;border-radius:8px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
              <tr><td style="background:#B31B1B;padding:24px 32px;">
                <h1 style="color:#fff;margin:0;font-size:20px;font-weight:700;">Sai Sree Logistics</h1>
                <p style="color:rgba(255,255,255,0.7);margin:4px 0 0;font-size:13px;">New Quote Request</p>
              </td></tr>
              <tr><td style="padding:32px;">
                <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6;">
                  <tr><td style="padding:8px 0;color:#888;width:100px;vertical-align:top;">Name</td>
                      <td style="padding:8px 0;color:#333;font-weight:600;">${name}</td></tr>
                  <tr><td style="padding:8px 0;color:#888;vertical-align:top;">Email</td>
                      <td style="padding:8px 0;color:#333;"><a href="mailto:${email}" style="color:#B31B1B;">${email}</a></td></tr>
                  ${phone ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top;">Phone</td>
                      <td style="padding:8px 0;color:#333;"><a href="tel:${phone}" style="color:#B31B1B;text-decoration:none;">${phone}</a></td></tr>` : ''}
                  ${service ? `<tr><td style="padding:8px 0;color:#888;vertical-align:top;">Service</td>
                      <td style="padding:8px 0;color:#333;">${serviceLabels[service] || service}</td></tr>` : ''}
                </table>
                <div style="margin-top:16px;padding:16px;background:#f9f9f9;border-radius:6px;border-left:3px solid #B31B1B;">
                  <p style="margin:0 0 4px;font-size:12px;color:#888;text-transform:uppercase;letter-spacing:0.5px;">Message</p>
                  <p style="margin:0;font-size:14px;color:#333;white-space:pre-wrap;">${message}</p>
                </div>
              </td></tr>
            </table>
          </td></tr></table>
        </body>
        </html>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Quote email error:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: 'Failed to send message.', detail: message },
      { status: 500 },
    );
  }
}

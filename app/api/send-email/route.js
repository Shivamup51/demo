import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, address, preferredDateTime, message } = body;

    // Email is now optional, but we need at least phone or email for contact
    if (!email && !phone) {
      return NextResponse.json(
        { error: "Either email or phone is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_SENDER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.verify();

    const dateDisplay = preferredDateTime
      ? new Date(preferredDateTime).toLocaleString()
      : "Not provided";

    const adminTo = process.env.ADMIN_EMAIL || "kynexaphysio@gmail.com";

    const adminText = `New consultation request:

Name: ${name || "-"}
Email: ${email || "Not provided"}
Phone: ${phone || "-"}
Address: ${address || "Not provided"}
Preferred Date/Time: ${dateDisplay}
Message: ${message || "-"}
`;
    const adminHtml = `
			<div style="font-family: Arial, sans-serif; line-height: 1.6">
				<h2>New Consultation Request</h2>
				<ul>
					<li><strong>Name:</strong> ${name || "-"}</li>
					<li><strong>Email:</strong> ${email || "Not provided"}</li>
					<li><strong>Phone:</strong> ${phone || "-"}</li>
					<li><strong>Address:</strong> ${address || "Not provided"}</li>
					<li><strong>Preferred Date/Time:</strong> ${dateDisplay}</li>
					<li><strong>Message:</strong> ${message || "-"}</li>
				</ul>
			</div>
		`;

    const userHtml = `
			<div style="font-family: Arial, sans-serif; line-height: 1.6">
				<h2>Consultation Request Confirmation</h2>
				<p>Hi ${name || "there"},</p>
				<p>We received your request. Here are the details:</p>
				<ul>
					<li><strong>Name:</strong> ${name || "-"}</li>
					<li><strong>Email:</strong> ${email || "Not provided"}</li>
					<li><strong>Phone:</strong> ${phone || "-"}</li>
					<li><strong>Address:</strong> ${address || "Not provided"}</li>
					<li><strong>Preferred Date/Time:</strong> ${dateDisplay}</li>
					<li><strong>Message:</strong> ${message || "-"}</li>
				</ul>
				<p>We'll contact you within 24 hours.</p>
			</div>
		`;

    const adminMail = {
      from: `${process.env.GMAIL_SENDER_NAME || "Kynexa Physio"} <${
        process.env.GMAIL_SENDER
      }>`,
      to: adminTo,
      replyTo: email || process.env.GMAIL_SENDER,
      subject: `New consultation request - ${name || phone || "Guest"}`,
      text: adminText,
      html: adminHtml,
    };

    // Send to admin
    const sendPromises = [transporter.sendMail(adminMail)];

    // Only send confirmation email to user if email is provided
    if (email) {
      const userMail = {
        from: `${process.env.GMAIL_SENDER_NAME || "Kynexa Physio"} <${
          process.env.GMAIL_SENDER
        }>`,
        to: email,
        subject: "We received your consultation request",
        text: adminText,
        html: userHtml,
      };
      sendPromises.push(transporter.sendMail(userMail));
    }

    // Send emails
    await Promise.all(sendPromises);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("send-email error", err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

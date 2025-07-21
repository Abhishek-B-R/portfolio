import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 })
    }

    // Create transporter (using Gmail as example)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your app password
      },
    })

    // Email to you (notification)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.OFFICIAL_EMAIL,
      subject: `New Contact Form: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background: white; padding: 20px; border-left: 4px solid #007bff; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <div style="margin-top: 30px; padding: 15px; background: #e9ecef; border-radius: 5px;">
            <p style="margin: 0; font-size: 14px; color: #666;">
              Reply directly to this email to respond to ${name}.
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    }

    // Confirmation email to sender
    const mailToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thanks for reaching out!",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Hi ${name}!</h2>
          
          <p style="line-height: 1.6; color: #555;">
            Thanks for reaching out! I've received your message about "<strong>${subject}</strong>" 
            and I'll get back to you within 24 hours.
          </p>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          
          <p style="line-height: 1.6; color: #555;">
            In the meantime, feel free to check out my 
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #007bff;">portfolio</a> 
            or connect with me on 
            <a href="https://linkedin.com/in/abhi-br" style="color: #007bff;">LinkedIn</a>.
          </p>
          
          <div style="margin-top: 30px; padding: 20px; background: #007bff; color: white; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-weight: bold;">Abhishek BR</p>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Full Stack Developer</p>
          </div>
        </div>
      `,
    }

    // Send both emails
    await transporter.sendMail(mailToYou)
    await transporter.sendMail(mailToSender)

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Email error:", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}

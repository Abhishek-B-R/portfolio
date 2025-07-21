import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const { name, email, date, time, duration, message } = await request.json()

    // Validate required fields
    if (!name || !email || !date || !time) {
      return NextResponse.json({ error: "Name, email, date, and time are required" }, { status: 400 })
    }

    // Format date and time
    const meetingDate = new Date(`${date}T${time}`)
    const formattedDate = meetingDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
    const formattedTime = meetingDate.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    })

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Email to you (meeting request)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.OFFICIAL_EMAIL,
      subject: `Meeting Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            New Meeting Request
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196f3;">
            <h3 style="margin-top: 0; color: #333;">Meeting Details:</h3>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${formattedTime}</p>
            <p><strong>Duration:</strong> ${duration} minutes</p>
          </div>
          
          ${
            message
              ? `
            <div style="background: white; padding: 20px; border-left: 4px solid #4caf50; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Discussion Topics:</h3>
              <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
            </div>
          `
              : ""
          }
          
          <div style="margin-top: 30px; padding: 15px; background: #fff3cd; border-radius: 5px; border-left: 4px solid #ffc107;">
            <p style="margin: 0; font-size: 14px; color: #856404;">
              <strong>Action Required:</strong> Please confirm this meeting by replying to ${email}
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    }

    // Confirmation email to requester
    const mailToRequester = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Meeting Request Received - Confirmation Pending",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Hi ${name}!</h2>
          
          <p style="line-height: 1.6; color: #555;">
            Thanks for requesting a meeting! I've received your request and will confirm the details shortly.
          </p>
          
          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Requested Meeting Details:</h3>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${formattedTime}</p>
            <p><strong>Duration:</strong> ${duration} minutes</p>
            ${message ? `<p><strong>Topics:</strong> ${message}</p>` : ""}
          </div>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">What's Next?</h3>
            <ul style="color: #555; line-height: 1.6;">
              <li>I'll review your request and check my availability</li>
              <li>You'll receive a confirmation email within 24 hours</li>
              <li>If the time works, I'll send you a calendar invite</li>
              <li>If not, I'll suggest alternative times</li>
            </ul>
          </div>
          
          <p style="line-height: 1.6; color: #555;">
            Looking forward to our conversation! In the meantime, feel free to check out my 
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #007bff;">latest projects</a>.
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
    await transporter.sendMail(mailToRequester)

    return NextResponse.json({ message: "Meeting request sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Meeting booking error:", error)
    return NextResponse.json({ error: "Failed to book meeting" }, { status: 500 })
  }
}

// app/api/contact/meeting/route.ts
import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(request: NextRequest) {
  try {
    const {
      name,
      email,
      date,
      time,
      duration = "30",
      message = "",
      timezone = "IST",
      location = "google-meet",
      countryCode = "+91",
      phoneNumber = "",
      meetingType = "",
      meetingTypeTitle = "",
      fullPhoneNumber = "",
    } = await request.json()

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required fields" },
        { status: 400 }
      )
    }

    // Additional validation for meeting scheduling
    if (meetingType && (!date || !time)) {
      return NextResponse.json(
        { error: "Date and time are required for scheduling a meeting" },
        { status: 400 }
      )
    }

    // Validate phone number if location is phone
    if (location === "phone" && !phoneNumber) {
      return NextResponse.json(
        { error: "Phone number is required for phone meetings" },
        { status: 400 }
      )
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Format meeting details
    let dateTimeInfo = ""
    let subject = ""

    if (meetingType) {
      // For scheduled meetings
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

      dateTimeInfo = `
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Time:</strong> ${formattedTime} (${timezone})</p>
        <p><strong>Duration:</strong> ${duration} minutes</p>
      `

      subject = `Meeting Request: ${meetingTypeTitle || "General Discussion"} with ${name}`
    } else {
      // For general messages
      subject = `New Message from ${name}`
    }

    // Format contact method
    let contactMethod = ""
    if (location === "google-meet") {
      contactMethod = "<p><strong>Preferred Contact:</strong> Google Meet</p>"
    } else if (location === "phone") {
      contactMethod = `
        <p><strong>Preferred Contact:</strong> Phone Call</p>
        <p><strong>Phone Number:</strong> ${fullPhoneNumber || `${countryCode} ${phoneNumber}`}</p>
      `
    }

    // Email to you (the recipient)
    const mailToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.OFFICIAL_EMAIL,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
            ${meetingType ? "New Meeting Request" : "New Contact Form Submission"}
          </h2>
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${contactMethod}
          </div>
          
          ${meetingType ? `
          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #2196f3;">
            <h3 style="margin-top: 0; color: #333;">Meeting Details:</h3>
            ${meetingTypeTitle ? `<p><strong>Meeting Type:</strong> ${meetingTypeTitle}</p>` : ''}
            ${dateTimeInfo}
          </div>
          ` : ''}
          
          ${message ? `
          <div style="background: white; padding: 20px; border-left: 4px solid #4caf50; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, "<br>")}</p>
          </div>
          ` : ''}
          
          <div style="margin-top: 30px; padding: 15px; background: #fff3cd; border-radius: 5px; border-left: 4px solid #ffc107;">
            <p style="margin: 0; font-size: 14px; color: #856404;">
              <strong>Action Required:</strong> Please respond to ${email}
            </p>
          </div>
        </div>
      `,
      replyTo: email,
    }

    // Confirmation email to the sender
    const mailToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: meetingType 
        ? `Meeting Request Received - ${meetingTypeTitle || "General Discussion"}`
        : "Thank you for your message",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Hi ${name}!</h2>
          
          <p style="line-height: 1.6; color: #555;">
            ${meetingType 
              ? `Thanks for requesting a ${meetingTypeTitle ? meetingTypeTitle.toLowerCase() : "meeting"}! 
                 I've received your request and will confirm the details shortly.`
              : "Thank you for reaching out! I've received your message and will get back to you soon."}
          </p>
          
          ${meetingType ? `
          <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Request Details:</h3>
            ${meetingTypeTitle ? `<p><strong>Meeting Type:</strong> ${meetingTypeTitle}</p>` : ''}
            ${dateTimeInfo}
            ${contactMethod}
          </div>
          ` : ''}
          
          ${message ? `
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">Your Message:</h3>
            <p style="line-height: 1.6; color: #555;">${message}</p>
          </div>
          ` : ''}
          
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #333;">What's Next?</h3>
            <ul style="color: #555; line-height: 1.6;">
              ${meetingType 
                ? `
                  <li>I'll review your request and check my availability</li>
                  <li>You'll receive a confirmation email within 24 hours</li>
                  <li>If the time works, I'll send you a calendar invite</li>
                  <li>If not, I'll suggest alternative times</li>
                `
                : `
                  <li>I'll review your message and respond as soon as possible</li>
                  <li>Typically you'll hear back within 1-2 business days</li>
                `}
            </ul>
          </div>
          
          <p style="line-height: 1.6; color: #555;">
            Looking forward to connecting with you! In the meantime, feel free to check out my 
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}" style="color: #007bff;">latest projects</a>.
          </p>
          
          <div style="margin-top: 30px; padding: 20px; background: #007bff; color: white; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-weight: bold;">Abhishek BR</p>
            <p style="margin: 5px 0 0 0; opacity: 0.9;">Full Stack Developer</p>
          </div>
        </div>
      `,
    }

    // Send emails
    await transporter.sendMail(mailToYou)
    await transporter.sendMail(mailToSender)

    return NextResponse.json(
      { message: meetingType ? "Meeting request sent successfully" : "Message sent successfully" },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error processing request:", error)
    return NextResponse.json(
      { error: "An error occurred while processing your request" },
      { status: 500 }
    )
  }
}
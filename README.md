# Serverless Contact Form using AWS

This is a fully serverless contact form I built using **HTML, JavaScript, and AWS**.  
The goal? Let people send me messages directly from my website **without needing any backend server** — all using cloud tools.

---

## 🧩 The Problem

I wanted to build a simple “Contact Me” form for my website — something that could:
- Let people send messages
- Deliver those messages to my email
- Work without a backend server, database, or paid service

The challenge was:  
> “How do I make a contact form work using only the frontend and the cloud?”

---

## ✅ What I Built

I created a static website (hosted on Amazon S3) with an HTML form and JavaScript that:
1. Collects a visitor’s name, email, and message
2. Sends the form data using `fetch()` to a secure API Gateway endpoint
3. Triggers an AWS Lambda function written in Python
4. The Lambda processes the data and sends an email through Amazon SES
5. I receive the message in my inbox — all serverless, clean, and simple

---

## ⚙️ Tools & Technologies I Used

- **Frontend:** HTML + JavaScript (vanilla)
- **Website Hosting:** Amazon S3 (Static Website Hosting)
- **JavaScript:** Used `fetch()` to send JSON data from the form
- **Backend Logic:** AWS Lambda (Python 3.11)
- **API Management:** Amazon API Gateway (HTTP API)
- **Email Sending:** Amazon SES (Simple Email Service)
- **Monitoring & Debugging:** AWS CloudWatch Logs
- **Security Config:** IAM roles + CORS settings for cross-origin access

---

## 🧠 What I Did, Step-by-Step

- Wrote the HTML structure for the contact form (no CSS used)
- Added JavaScript to:
  - Listen for form submission
  - Collect and structure form data
  - Use `fetch()` to send a POST request to API Gateway
  - Handle success or error responses
- Deployed the site to an S3 bucket with public access
- Built a Lambda function in Python to:
  - Parse the request body
  - Format the message
  - Send the email via Amazon SES
- Verified sender/receiver emails in SES Sandbox
- Set up CORS to allow requests from my S3-hosted frontend
- Used CloudWatch to debug issues in Lambda

---

## 💪 Skills I Gained

- JavaScript skills for working with APIs and form handling
- Connecting cloud services end-to-end (S3 → API Gateway → Lambda → SES)
- Writing Python Lambda functions
- Understanding and configuring CORS properly
- Debugging API calls, JSON parsing, and browser console errors
- Using CloudWatch to troubleshoot backend logic
- Managing AWS permissions with IAM roles
- Deploying real-world, production-level solutions using serverless tools

---

## 🌐 How It Works (Simple Flow)

1. Visitor opens the website (hosted on S3)
2. Fills out the contact form and clicks "Send"
3. JavaScript sends the data to API Gateway
4. API Gateway triggers the Lambda function
5. Lambda sends the email via SES
6. I receive the message in my inbox, with the visitor’s name, email, and message

---

## 🧪 What’s Next?

- Move SES out of sandbox mode so it can email any address
- Add validation in JavaScript before sending
- Optionally log messages to DynamoDB
- Add success/error message styling with CSS
- (Maybe even auto-reply to users)

---

## 🚀 Why This Matters

This isn’t just a small contact form. It’s a real cloud project that:
- Runs with no server
- Can scale without limits
- Costs almost nothing (free-tier)
- Is clean, modern, and production-ready

---

## 📬 Final Thoughts

This project helped me understand **how real systems are built in the cloud** — not just with code, but by connecting services, solving errors, reading logs, and making something that actually works.

If you’re learning AWS or JavaScript, this is a great project to build, test, and be proud of.

Thanks for reading!

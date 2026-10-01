# Carter | Digital Solutions

A personal digital-solutions website built as a hands-on AWS cloud project. The project started as a simple static website hosted on Amazon S3 and has progressively been extended into a serverless web application using CloudFront, API Gateway, Lambda, and DynamoDB.

The project is intentionally being developed in stages to practice real-world cloud architecture, deployment, version control, and backend integration.

## 🚀 Live Website

**CloudFront URL**

https://d15dd2y8vjhvo6.cloudfront.net/

## 🏗️ Current Architecture

```text
Visitor / Browser / Mobile
          |
        HTTPS
          v
     CloudFront
          |
      +---+---+
      |       |
      v       v
     S3    API Gateway
              |
              v
            Lambda
              |
              v
           DynamoDB
```

### Request flow

**Website**
```text
Visitor → CloudFront → S3
```

**Contact form**
```text
Visitor → JavaScript → API Gateway → Lambda → DynamoDB
```

## ✨ Features

- Responsive website
- Hero section with optimized `hero.webp`
- About, Services, and Contact sections
- JavaScript welcome interaction
- Contact form with client-side validation
- Live serverless contact backend
- Contact submissions stored in DynamoDB
- CloudFront HTTPS/CDN delivery
- Git and GitHub version control
- AWS CLI deployment workflow

## ☁️ AWS Services Used

### Amazon S3

Stores the website's static assets.

Bucket:

```text
carter-static-website-1738
```

Main files:

```text
index.html
style.css
script.js
hero.webp
README.md
```

### Amazon CloudFront

CloudFront sits in front of the S3 website and provides HTTPS delivery and CDN functionality.

Current public URL:

```text
https://d15dd2y8vjhvo6.cloudfront.net/
```

The distribution uses the S3 regional endpoint as its origin.

An Origin Access Control was also created:

```text
carter-s3-oac
```

### Amazon API Gateway

The contact form uses an HTTP API.

Endpoint:

```text
https://hj5wckmmj0.execute-api.us-east-1.amazonaws.com/contact
```

Route:

```text
POST /contact
```

CORS is configured to allow the CloudFront-hosted website to communicate with the API.

### AWS Lambda

Function:

```text
carter-contact-api
```

Lambda receives the contact form data from API Gateway and processes the submission before saving it to DynamoDB.

Example data:

```json
{
  "name": "Visitor Name",
  "email": "visitor@example.com",
  "message": "Message from the visitor"
}
```

### Amazon DynamoDB

DynamoDB is the project's database for contact submissions.

Real contact-form submissions have been successfully stored and verified in the table.

## 📬 Contact Form

The form collects:

- Name
- Email
- Message

JavaScript performs basic validation before sending the request.

The request follows:

```text
Browser
  ↓
API Gateway
  ↓
Lambda
  ↓
DynamoDB
```

## 🌐 Frontend

Built with:

- HTML5
- CSS3
- JavaScript

| File | Purpose |
|---|---|
| `index.html` | Website structure and content |
| `style.css` | Layout and visual styling |
| `script.js` | JavaScript and API integration |
| `hero.webp` | Optimized hero image |
| `README.md` | Project documentation |

## 🖼️ Performance Improvement

The original hero image was significantly larger and was optimized to:

```text
hero.webp
```

Current size is approximately 166 KB, reducing the amount of data required for the hero section, especially on mobile connections.

## 🔧 Deployment

The website can be synchronized to S3 using AWS CLI:

```powershell
aws s3 sync . s3://carter-static-website-1738 --exclude ".git/*"
```

A dry run can be performed first:

```powershell
aws s3 sync . s3://carter-static-website-1738 --exclude ".git/*" --dryrun
```

The `.git` directory is excluded so repository files are not uploaded to S3.

## 🌿 Git Workflow

Repository:

```text
MagnaCart3r/carter-static-s3_aws_websit
```

Current development branch:

```text
feature/dynamic-backend
```

Previous feature branch:

```text
feature/javascript-interactions
```

The JavaScript feature branch was merged before backend development continued.

## 📈 Project Evolution

### Phase 1 — Static Website

```text
HTML + CSS → S3
```

### Phase 2 — JavaScript

```text
HTML + CSS + JavaScript → S3
                     ↓
                 Git/GitHub
```

### Phase 3 — Serverless Contact Backend

```text
Website → API Gateway → Lambda
```

### Phase 4 — Database

```text
Website → API Gateway → Lambda → DynamoDB
```

### Phase 5 — CloudFront

```text
Visitor → CloudFront → S3
```

The contact backend remains:

```text
Visitor → API Gateway → Lambda → DynamoDB
```

## 🧪 Current Status

| Component | Status |
|---|---|
| S3 website | ✅ Working |
| HTML/CSS frontend | ✅ Working |
| JavaScript interaction | ✅ Working |
| Optimized hero image | ✅ Complete |
| Git/GitHub | ✅ Working |
| API Gateway | ✅ Working |
| Lambda backend | ✅ Working |
| DynamoDB | ✅ Working |
| Contact form | ✅ Working |
| CORS | ✅ Working |
| CloudFront | ✅ Enabled |
| HTTPS | ✅ Working |
| Custom domain | ⏸️ Not planned yet |
| S3 CloudFront-only hardening | ⏭️ Future exercise |
| AWS WAF | ⏭️ Future exercise |

## 🔐 Security and Current Scope

HTTPS is provided through CloudFront and API Gateway.

CloudFront Origin Access Control was created during the CloudFront setup.

For the current learning phase, the S3 bucket has not yet been fully restricted to CloudFront-only access. This is intentionally left as a future security-hardening exercise.

AWS WAF was also not enabled during the current CloudFront setup.

## 🔮 Future Improvements

Potential future phases include:

- Stronger contact-form validation
- Backend validation and error handling
- Admin workflow for viewing contact submissions
- Monitoring and logging
- Further S3/CloudFront security hardening
- AWS WAF exploration
- Accessibility and SEO improvements
- Additional dynamic website features
- Authentication for protected/admin functionality
- Custom domain if one is purchased in the future

## 🎯 Project Goal

The purpose of this project is to learn how a modern cloud-hosted application is assembled step by step.

The project has progressed from:

```text
Static Website
      ↓
S3 Hosting
      ↓
Git/GitHub
      ↓
JavaScript
      ↓
Serverless API
      ↓
Database
      ↓
CloudFront + HTTPS
```

The architecture will continue to evolve gradually as new AWS concepts are introduced and tested.

## 🛠️ Technologies

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- Amazon S3
- Amazon CloudFront
- Amazon API Gateway
- AWS Lambda
- Amazon DynamoDB
- AWS CLI

---

**Carter | Digital Solutions**

Built as an ongoing AWS learning and development project.

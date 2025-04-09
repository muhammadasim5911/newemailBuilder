# SendGrid Integration Guide

This guide explains how to integrate the Public Circles Email Builder with SendGrid to enable sending your created email templates.

## Prerequisites

1. A SendGrid account with API access
2. API key with appropriate permissions
3. A verified sender identity in SendGrid

## Basic Integration

Here's how to set up a basic integration with SendGrid:

### 1. Install Required Dependencies

```bash
# Install the email builder if you haven't already
npm install public-circles-email-builder

# Install SendGrid's mail service
npm install @sendgrid/mail
```

### 2. Set Up Environment Variables

Create or update your `.env` file to include your SendGrid API key:

```
SENDGRID_API_KEY=your_api_key_here
```

Remember to add this file to your `.gitignore` to keep your API key secure.

### 3. Create the Email Builder with SendGrid Integration

```jsx
import React, { useState } from 'react';
import { EmailEditor, generateTemplateHtml } from 'public-circles-email-builder';
import 'public-circles-email-builder/dist/style.css';
import { MailService } from '@sendgrid/mail';

// Set up the SendGrid mail service
const mailService = new MailService();
mailService.setApiKey(process.env.SENDGRID_API_KEY);

const EmailBuilderWithSendGrid = () => {
  const [emailHtml, setEmailHtml] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [emailSubject, setEmailSubject] = useState('Your Newsletter');
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState(null);
  
  // Handle HTML export from the editor
  const handleExport = (html) => {
    setEmailHtml(html);
  };
  
  // Send the email using SendGrid
  const sendEmail = async () => {
    if (!emailHtml || !recipientEmail) {
      setSendResult({
        success: false,
        message: 'Please create an email template and enter a recipient email.'
      });
      return;
    }
    
    setIsSending(true);
    
    try {
      await mailService.send({
        to: recipientEmail,
        from: 'your-verified-sender@example.com', // Must be verified in SendGrid
        subject: emailSubject,
        html: emailHtml,
      });
      
      setSendResult({
        success: true,
        message: 'Email sent successfully!'
      });
    } catch (error) {
      console.error('SendGrid error:', error);
      setSendResult({
        success: false,
        message: `Failed to send email: ${error.message}`
      });
    } finally {
      setIsSending(false);
    }
  };
  
  return (
    <div>
      <div style={{ height: '600px', marginBottom: '20px' }}>
        <EmailEditor onExport={handleExport} />
      </div>
      
      <div>
        <h3>Send Your Email</h3>
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="recipient" style={{ display: 'block', marginBottom: '5px' }}>
            Recipient Email:
          </label>
          <input
            id="recipient"
            type="email"
            value={recipientEmail}
            onChange={(e) => setRecipientEmail(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '8px', 
              borderRadius: '4px', 
              border: '1px solid #ccc' 
            }}
            placeholder="recipient@example.com"
          />
        </div>
        
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="subject" style={{ display: 'block', marginBottom: '5px' }}>
            Email Subject:
          </label>
          <input
            id="subject"
            type="text"
            value={emailSubject}
            onChange={(e) => setEmailSubject(e.target.value)}
            style={{ 
              width: '100%', 
              padding: '8px', 
              borderRadius: '4px', 
              border: '1px solid #ccc' 
            }}
            placeholder="Your Newsletter"
          />
        </div>
        
        <button
          onClick={sendEmail}
          disabled={isSending || !emailHtml}
          style={{
            backgroundColor: emailHtml ? '#E61DAB' : '#cccccc',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '4px',
            cursor: emailHtml ? 'pointer' : 'not-allowed',
          }}
        >
          {isSending ? 'Sending...' : 'Send Email'}
        </button>
        
        {sendResult && (
          <div
            style={{
              marginTop: '10px',
              padding: '10px',
              backgroundColor: sendResult.success ? '#e6fff2' : '#fff0f0',
              border: `1px solid ${sendResult.success ? '#a3e6c6' : '#f5c6c6'}`,
              borderRadius: '4px',
            }}
          >
            {sendResult.message}
          </div>
        )}
      </div>
    </div>
  );
};

export default EmailBuilderWithSendGrid;
```

## Server-Side Implementation (Recommended)

For security reasons, you should never include API keys directly in your frontend code. Here's a more secure approach using a backend endpoint:

### 1. Frontend Component

```jsx
import React, { useState } from 'react';
import { EmailEditor } from 'public-circles-email-builder';
import 'public-circles-email-builder/dist/style.css';

const SecureEmailBuilder = () => {
  const [emailHtml, setEmailHtml] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [emailSubject, setEmailSubject] = useState('Your Newsletter');
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState(null);
  
  // Handle HTML export from the editor
  const handleExport = (html) => {
    setEmailHtml(html);
  };
  
  // Send the email via your backend API
  const sendEmail = async () => {
    if (!emailHtml || !recipientEmail) {
      setSendResult({
        success: false,
        message: 'Please create an email template and enter a recipient email.'
      });
      return;
    }
    
    setIsSending(true);
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: recipientEmail,
          subject: emailSubject,
          html: emailHtml,
        }),
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to send email');
      }
      
      setSendResult({
        success: true,
        message: 'Email sent successfully!'
      });
    } catch (error) {
      console.error('Error sending email:', error);
      setSendResult({
        success: false,
        message: error.message || 'Failed to send email'
      });
    } finally {
      setIsSending(false);
    }
  };
  
  // Component rendering (similar to the previous example)
  return (
    <div>
      {/* Same UI as the previous example */}
    </div>
  );
};
```

### 2. Backend Endpoint (Node.js/Express Example)

```javascript
// server.js
const express = require('express');
const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const app = express();
app.use(express.json());

// Set SendGrid API key from environment variables
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post('/api/send-email', async (req, res) => {
  const { to, subject, html } = req.body;
  
  if (!to || !subject || !html) {
    return res.status(400).json({ 
      success: false, 
      message: 'Missing required fields' 
    });
  }
  
  const msg = {
    to,
    from: process.env.SENDGRID_VERIFIED_SENDER, // Use environment variable
    subject,
    html,
  };
  
  try {
    await sgMail.send(msg);
    res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully' 
    });
  } catch (error) {
    console.error('SendGrid error:', error);
    
    // Send a sanitized error to the client
    res.status(500).json({
      success: false,
      message: 'Failed to send email',
    });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Testing Your Integration

1. Create an email template in the editor
2. Export the HTML
3. Send a test email to yourself
4. Check that the email renders correctly in your inbox

## Best Practices

1. **Security**:
   - Never expose your SendGrid API key in frontend code
   - Use environment variables to store sensitive information
   - Implement proper authentication for your email sending endpoints

2. **Sending Limits**:
   - Be aware of SendGrid's sending limits for your plan
   - Implement rate limiting on your backend to prevent abuse

3. **Error Handling**:
   - Provide clear error messages to users
   - Log detailed error information on the server for debugging

4. **Tracking**:
   - Consider using SendGrid's tracking features to monitor open rates and clicks
   - Add UTM parameters to links for better campaign tracking

## Troubleshooting

### Common Issues

1. **403 Forbidden Errors**:
   - Check that your API key has the right permissions
   - Verify that your sender email is properly authenticated in SendGrid

2. **Invalid Recipients**:
   - Validate email addresses before sending
   - Handle bounced emails appropriately

3. **HTML Rendering Issues**:
   - Use inlined CSS for better email client compatibility
   - Test your templates in multiple email clients

## Additional Resources

- [SendGrid Documentation](https://docs.sendgrid.com/)
- [Email HTML Best Practices](https://www.litmus.com/blog/email-coding-guidelines/)
- [SendGrid Node.js SDK Documentation](https://github.com/sendgrid/sendgrid-nodejs)
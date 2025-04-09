import React, { useState } from 'react';
import { EmailEditor, generateTemplateHtml } from 'public-circles-email-builder';

// Import the styles
import 'public-circles-email-builder/dist/style.css';

// Note: In a real application, you would handle the API key securely,
// typically with environment variables on the server side.
// This is just for demonstration purposes.

interface SendEmailProps {
  to: string;
  subject: string;
  html: string;
}

// Function to send email using SendGrid (would be in your backend)
const sendEmail = async ({ to, subject, html }: SendEmailProps) => {
  try {
    // In a real application, this would be an API call to your backend
    // which would then use the SendGrid SDK to send the email
    // For example:
    
    /*
    // Backend code (not to be used in frontend):
    import { MailService } from '@sendgrid/mail';
    
    const mailService = new MailService();
    mailService.setApiKey(process.env.SENDGRID_API_KEY);
    
    await mailService.send({
      to,
      from: 'your@company.com', // Verified sender in SendGrid
      subject,
      html,
    });
    */
    
    // For this example, we'll just simulate a successful response
    return { success: true, message: 'Email sent successfully!' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Failed to send email. Please try again.' };
  }
};

const SendGridIntegrationExample = () => {
  const [emailTo, setEmailTo] = useState('');
  const [emailSubject, setEmailSubject] = useState('Your Newsletter from Public Circles');
  const [htmlContent, setHtmlContent] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [sendResult, setSendResult] = useState<{success: boolean; message: string} | null>(null);
  
  // Initial template HTML
  const initialHtml = `
    <div style="font-family: Arial, sans-serif; margin: 0 auto; max-width: 600px;">
      <h1 style="color: #E61DAB;">Your Newsletter</h1>
      <p>This is a sample newsletter that will be sent through SendGrid.</p>
      <div style="background-color: #f0f0f0; padding: 20px; margin: 20px 0;">
        <p>Customize this template before sending!</p>
      </div>
      <a href="https://example.com" style="background-color: #8E33FF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; display: inline-block;">Read More</a>
    </div>
  `;

  // Handle the exported HTML
  const handleExport = (html: string) => {
    setHtmlContent(html);
  };

  // Handle the form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!emailTo || !emailSubject || !htmlContent) {
      setSendResult({
        success: false,
        message: 'Please fill out all fields and generate HTML content first.'
      });
      return;
    }

    setIsSending(true);
    
    try {
      // Send the email
      const result = await sendEmail({
        to: emailTo,
        subject: emailSubject,
        html: htmlContent
      });
      
      setSendResult(result);
    } catch (error) {
      setSendResult({
        success: false,
        message: 'An unexpected error occurred.'
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Email Builder with SendGrid Integration</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="border rounded-lg overflow-hidden" style={{ height: '700px' }}>
            <EmailEditor 
              initialHtml={initialHtml}
              onExport={handleExport}
            />
          </div>
        </div>
        
        <div className="space-y-6">
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-4">Send Email with SendGrid</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Recipient Email</label>
                <input
                  type="email"
                  value={emailTo}
                  onChange={(e) => setEmailTo(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="recipient@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Subject</label>
                <input
                  type="text"
                  value={emailSubject}
                  onChange={(e) => setEmailSubject(e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Email Subject"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">HTML Content</label>
                <div className="bg-gray-50 p-3 border rounded text-sm text-gray-600 h-20 overflow-auto">
                  {htmlContent ? (
                    <span>HTML content generated ({htmlContent.length} characters)</span>
                  ) : (
                    <span>No HTML content generated yet. Click "Export HTML" in the editor.</span>
                  )}
                </div>
              </div>
              
              <button
                type="submit"
                disabled={isSending || !htmlContent}
                className={`w-full p-2 rounded font-medium ${
                  htmlContent
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {isSending ? 'Sending...' : 'Send Email'}
              </button>
            </form>
            
            {sendResult && (
              <div className={`mt-4 p-3 rounded ${
                sendResult.success 
                  ? 'bg-green-100 text-green-800 border border-green-200' 
                  : 'bg-red-100 text-red-800 border border-red-200'
              }`}>
                {sendResult.message}
              </div>
            )}
          </div>
          
          <div className="border rounded-lg p-4">
            <h2 className="text-lg font-semibold mb-3">How It Works</h2>
            <ol className="list-decimal pl-5 space-y-2 text-sm">
              <li>Design your email template in the editor</li>
              <li>Click "Export HTML" in the editor to generate the HTML</li>
              <li>Fill out the recipient email and subject</li>
              <li>Click "Send Email" to deliver your newsletter</li>
            </ol>
            <p className="mt-4 text-sm text-gray-600">
              Note: In a real application, the SendGrid API key would be securely stored on the server side.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendGridIntegrationExample;
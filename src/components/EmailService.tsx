import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailData {
  fullName: string;
  role: string;
  email: string;
  phone: string;
  interest: string[];
  message: string;
}

export const useEmailService = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendEmail = async (data: EmailData) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const templateParams = {
        from_name: data.fullName,
        role: data.role,
        from_email: data.email,
        phone: data.phone,
        interest: data.interest.join(', '),
        message: data.message,
      };

      await emailjs.send(
        'service_barqtech',  // Your EmailJS service ID
        'template_contact',  // Your EmailJS template ID
        templateParams,
        'YOUR_PUBLIC_KEY'    // Your EmailJS public key
      );

      setSuccess(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while sending the message');
    } finally {
      setIsLoading(false);
    }
  };

  return { sendEmail, isLoading, error, success };
};
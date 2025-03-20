interface EmailData {
  fullName: string;
  role?: string;
  email: string;
  phone: string;
  interest?: string[];
  message: string;
}

export const sendEmailRequest = async (data: EmailData) => {
  const apiUrl = 'https://api.nudevices.ai/v1/send_waitlist_email/';

  let formattedMessage = data.message;
  if (data.interest && data.interest.length > 0) {
    formattedMessage += "\n\n----------------------\nInterested in:\n" +
      data.interest.join("\n") +
      "\n----------------------";
  }

  formattedMessage += "\n\nPhone: " + data.phone;
  const payload = {
    subject: `${data.fullName} - ${data.role || 'Not Specified'} - Contact Form`,
    body: formattedMessage,
    metadata: {
      name: data.fullName,
      email: data.email,
      company: "Not Specified",
      job_title: data.role || 'Not Specified',
      country: 'Not Specified',
      message: formattedMessage
    }
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const responseText = await response.text();
    return responseText ? JSON.parse(responseText) : { success: true };
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

export default sendEmailRequest;
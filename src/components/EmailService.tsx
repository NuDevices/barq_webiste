// src/services/emailService.ts
interface EmailData {
    name: string;
    company: string;
    message: string;
    email?: string;
    jobTitle?: string;
    country?: string;
}

export const sendEmailRequest = async (data: EmailData) => {
    const apiUrl = 'https://api.nudevices.ai/v1/send_waitlist_email/';
    const payload = {
        subject: `${data.name} - ${data.company} - Contact Form`,
        body: data.message,
        metadata: {
            name: data.name,
            email: data.email || `${data.name.replace(/\s+/g, '.')}@${data.company.replace(/\s+/g, '')}.com`,
            company: data.company,
            job_title: data.jobTitle || 'Not Specified',
            country: data.country || 'Not Specified',
            message: data.message
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

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};

export default sendEmailRequest;
import emailjs from 'emailjs-com';

const sendEmail = async (formData) => {
  try {
    const result = await emailjs.send(
      'service_7f5bq8q', // Replace with your EmailJS service ID
      'template_lay07i9', // Replace with your EmailJS template ID
      formData,
      '5PcmdZcoqGQzfFZ1v' // Replace with your EmailJS user ID
    );
    return result;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};

export default sendEmail;
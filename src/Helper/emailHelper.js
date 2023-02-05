import emailJS from '@emailjs/browser';

export const sendEmail = templateParams => {
  return emailJS.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    templateParams,
    import.meta.env.VITE_EMAILJS_USER_ID
  );
};

export default sendEmail;

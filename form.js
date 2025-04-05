document.getElementById('contact-form').addEventListener('submit', async function (e) {
  e.preventDefault();

  const form = e.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  const responseMsg = document.getElementById('response-msg');
  responseMsg.textContent = 'Sending...';

  try {
    const res = await fetch('https://2fnx78feib.execute-api.us-east-1.amazonaws.com/prod/contact', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    responseMsg.textContent = result.message || 'Your message has been sent!';
    form.reset();
  } catch (error) {
    console.error(error);
    responseMsg.textContent = 'There was an error sending your message.';
  }
});
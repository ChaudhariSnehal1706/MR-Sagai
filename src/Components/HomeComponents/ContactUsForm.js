import React from 'react';
// import emailjs from 'emailjs-com';

function ContactUsForm() {
  // const [formData, setFormData] = useState({
  //   name: '',
  //   email: '',
  //   phone: '',
  //   message: ''
  // });

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: value
  //   });
  // };

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .send(
  //       'your_service_id',        // Replace with your EmailJS service ID
  //       'your_template_id',       // Replace with your EmailJS template ID
  //       formData,
  //       'your_user_id'            // Replace with your EmailJS user ID
  //     )
  //     .then(
  //       (response) => {
  //         console.log('SUCCESS!', response.status, response.text);
  //         alert('Message sent successfully!');
  //         setFormData({ name: '', email: '', phone: '', message: '' }); // Clear form
  //       },
  //       (err) => {
  //         console.log('FAILED...', err);
  //         alert('Failed to send the message, please try again later.');
  //       }
  //     );
  // };

  return (
    
    <div className="min-h-screen flex flex-col justify-center items-center">

    <div className="font-[sans-serif] max-w-6xl mx-auto relative bg-white shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-3xl overflow-hidden mt-4">
      <div className="absolute -bottom-6 -left-6 w-20 h-20 rounded-full bg-blue-400"></div>
      <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-400"></div>

      <div className="grid md:grid-cols-2 gap-8 py-8 px-6">
        <div className="text-center flex flex-col items-center justify-center">
          <img
            src="https://readymadeui.com/signin-image.webp"
            alt="Contact Us"
            className="shrink-0 w-5/6"
          />
        </div>

        {/* <form onSubmit={sendEmail} className="rounded-tl-3xl rounded-bl-3xl">
          <h2 className="text-2xl text-blue-600 font-bold text-center mb-6">Contact Us</h2>
          <div className="max-w-md mx-auto space-y-3 relative">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-blue-600 focus-within:bg-transparent"
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-blue-600 focus-within:bg-transparent"
            />

            <input
              type="text"
              name="phone"
              placeholder="Phone No."
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-md py-3 px-4 text-sm outline-blue-600 focus-within:bg-transparent"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-gray-100 rounded-md px-4 text-sm pt-3 outline-blue-600 focus-within:bg-transparent"
            ></textarea>

            <button
              type="submit"
              className="text-white w-full relative bg-blue-500 hover:bg-blue-600 rounded-md text-sm px-6 py-3 !mt-6 flex justify-center items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16px"
                height="16px"
                fill="#fff"
                className="mr-2"
                viewBox="0 0 548.244 548.244"
              >
                <path
                  fillRule="evenodd"
                  d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                  clipRule="evenodd"
                />
              </svg>
              Send Message
            </button>
          </div>
        </form> */}
      </div>
    </div>
    </div>
  );
}

export default ContactUsForm;

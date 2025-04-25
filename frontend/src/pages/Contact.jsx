function Contact() {
  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto bg-white p-8 rounded shadow">
        <h1 className="text-3xl font-bold text-green-700 mb-4 text-center">Get in Touch</h1>
        <p className="text-gray-700 text-center mb-8">
          Have questions about soil types, farming techniques, or how to use our platform? Fill out the form below and we'll get back to you as soon as possible.
        </p>
        <form className="space-y-6">
          <div>
            <label className="block text-green-700 font-medium mb-1" htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              className="w-full border border-green-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-green-700 font-medium mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="w-full border border-green-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-green-700 font-medium mb-1" htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-green-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
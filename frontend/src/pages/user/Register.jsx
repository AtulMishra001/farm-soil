import { useState } from 'react';

function Register() {
  const [registerMessage, setRegisterMessage] = useState({ text: "", type: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = {
      username: form.name.value,
      email: form.email.value,
      password: form.password.value,
    };
  
    try {
      const res = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
      if (res.ok) {
        setRegisterMessage({ text: data.message, type: "success" });
      } else {
        setRegisterMessage({ text: data.message || data.error, type: "error" });
      }
      setTimeout(() => {
        setRegisterMessage({ text: "", type: "" });
      }, 3000);
      
    } catch (error) {
      console.error('Fetch error:', error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm border border-green-200">
        <h1 className="text-2xl font-bold text-green-700 text-center mb-6">Register</h1>
        {registerMessage.text && (
          <div
            className={`${
              registerMessage.type === "success"
                ? "text-green-700 bg-green-100 border border-green-400"
                : "text-red-700 bg-red-100 border border-red-400"
            } px-4 py-2 rounded mb-4 text-center`}
          >
            {registerMessage.text}
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            required
            name="email"
            type="email"
            placeholder="Enter your email"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            required
            name="name"
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            required
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{' '}
          <a
            href="/login"
            className="text-green-600 font-bold hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
}

export default Register;
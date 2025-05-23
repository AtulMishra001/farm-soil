import { Link } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const [loginMessage, setLoginMessage] = useState({ text: "", type: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      username : `${e.target[0].value}`,
      password: `${e.target[1].value}`
    }

    try {
      await fetch('http://localhost:8000/api/auth/login',{
        method: 'POST',
        headers: {
          'content-type': "application/json"
        },
        body: JSON.stringify(formData)

      }).then(async (res)=>{
        const data = await res.json();
        if (res.ok) {
          setLoginMessage({ text: data.message, type: "success" });
        } else {
          setLoginMessage({ text: data.message || data.error, type: "error" });
        }
        setTimeout(() => {
          setLoginMessage({ text: "", type: "" });
        }, 3000);
      })

    } catch (error) {
      console.log(`ERROR: ${error}`)
    }
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm border border-green-200">
        <h1 className="text-2xl font-bold text-green-700 text-center mb-6">Login</h1>
        {loginMessage.text && (
          <div
            className={`${
              loginMessage.type === "success"
                ? "text-green-700 bg-green-100 border border-green-400"
                : "text-red-700 bg-red-100 border border-red-400"
            } px-4 py-2 rounded mb-4 text-center`}
          >
            {loginMessage.text}
          </div>
        )}
        <form method="GET" action="/login" className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-green-600 font-bold hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
import { Link } from 'react-router-dom';

function Login() {
  function handleSubmit(e) {
    e.preventDefault();
    const formData = {
      username : `${e.target[0].value}`,
      password: `${e.target[1].value}`
    }

    
  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-green-50">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm border border-green-200">
        <h1 className="text-2xl font-bold text-green-700 text-center mb-6">Login</h1>
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
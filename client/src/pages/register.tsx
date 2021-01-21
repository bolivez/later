import Head from "next/head"
import Link from "next/link"

export default function Register() {
  return (
    <div className="flex">
      <Head>
        <title>Register</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="h-screen bg-cover bg-start w-80"
        style={{ backgroundImage: "url('/images/35.jpg')" }}
      ></div>
      <div className="flex flex-col justify-center pl-6">
        <div className="w-70">
          <h1 className="mb-2 text-lg text-bold">Sign Up</h1>
          <p className="mb-10 text-xs">
            By continuing, you agree to our User Agreement and Privacy Policy
          </p>
          <form>
            <div className="mb-2">
              <input
                type="email"
                className="w-full p-3 px-3 py-2 bg-gray-100 border-gray-400 rounded"
                placeholder="Email"
              />
            </div>
            <div className="mb-2">
              <input
                type="text"
                className="w-full p-3 px-3 py-2 bg-gray-100 border-gray-400 rounded"
                placeholder="Username"
              />
            </div>
            <div className="mb-2">
              <input
                type="password"
                className="w-full p-3 px-3 py-2 bg-gray-100 border-gray-400 rounded"
                placeholder="Password"
              />
            </div>
            <div className="mb-6">
              <input
                type="checkbox"
                className="mr-1 cursor-pointer"
                id="agreement"
              />
              <label htmlFor="agreement" className="text-xs cursor-pointer">
                I agree to get emails about cool stuff on Later
              </label>
            </div>
            <button className="w-full py-2 mb-4 text-xs font-bold text-white uppercase bg-blue-500 border border-blue-500 rounded hover:bg-blue-400">
              Sign Up
            </button>
          </form>
          <small>
            Already have an account?
            <Link href="login">
              <a className="ml-1 text-blue-500 uppercase">Login</a>
            </Link>
          </small>
        </div>
      </div>
    </div>
  )
}

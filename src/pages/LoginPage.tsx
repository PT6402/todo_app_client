import { Link } from "react-router-dom";
import IconGoogle from "../components/IconGoogle";
import IconQrCode from "../components/IconQRcode";

export default function LoginPage() {
  return (
    <div className="min-h-screen  text-gray-900 flex justify-center">
      <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
          <div className="mt-12 flex flex-col items-center">
            <h1 className="text-2xl xl:text-3xl font-extrabold">Login</h1>
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                  type="email"
                  placeholder="Email"
                />
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
                <button className="mt-5 tracking-wide font-semibold bg-gray-500 text-gray-100 w-full py-4 rounded-lg hover:bg-gray-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <span className="ml-3">Sign In</span>
                </button>
                <p className="text-center text-sm text-gray-500 mt-2">
                  Don&#x27;t have an account yet?
                  <Link
                    to="#"
                    className="font-semibold text-gray-600 hover:underline focus:text-gray-800 focus:outline-none ml-2"
                  >
                    Sign up
                  </Link>
                  .
                </p>
              </div>
              <div className="mb-10 mt-5 border-b text-center">
                <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                  <p className="relative top-1">Or</p>
                </div>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-gray-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <IconGoogle />
                  </div>
                  <span className="ml-4">Sign In with Google</span>
                </button>
              </div>
              <div className="flex flex-col items-center mt-3">
                <button className="w-full max-w-xs font-bold shadow-sm rounded-lg py-3 bg-gray-100 text-gray-800 flex items-center justify-center transition-all duration-300 ease-in-out focus:outline-none hover:shadow focus:shadow-sm focus:shadow-outline">
                  <div className="bg-white p-2 rounded-full">
                    <IconQrCode />
                  </div>
                  <span className="ml-4">Sign In with QR Code</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

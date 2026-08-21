import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import MyLogo from "../assets/MyLogo.svg"


export default function LoginPage() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();

const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log({ email, password });
  navigate("/home");
};

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#daa520]/60">
      <div className="flex flex-col max-w-md w-full mx-auto mb-4 rounded-2xl bg-[#f5f0e6] p-6">
       <img
       src={MyLogo}
       alt="Logo"
       className="w-2=35 h-35 mx-auto mb-4"
       />
        <div className="text-center">
          <svg viewBox="0 0 400 100" className="w-full max-w-100 mx-auto">
            <defs>
              <path
                id="welcomecurve"
                d="M 50,90 Q 200,20 350,90"
                fill="transparent"
              />
            </defs>
            <text className="text-2xl font-brand font-semibold" textAnchor="middle">
              <textPath href="#welcomecurve" startOffset="50%">
                WELCOME
              </textPath>
            </text>
          </svg>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 mx-auto w-full">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-black">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 block w-full rounded-md border border-black/40 px-3 py-2 text-black placeholder-[#add8e6]"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-black">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 block w-full rounded-md border border-black/40 px-3 py-2 text-black placeholder-[#add8e6]"
              placeholder="••••••••"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="rounded-full" />
              Remember me
            </label>
              <a href="#" className="text-sm underline">
              Forgot password
            </a>
            <a href="#" className="text-sm underline">
              create new account
            </a>
          </div>

          <button
            type="submit"
            className="flex justify-center w-full border rounded-md bg-black text-white py-2"
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
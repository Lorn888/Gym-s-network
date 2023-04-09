import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          {" "}
          Login form
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px] ">
          Login browsky
        </p>
      </div>

      <div className="mt-16">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            disabled={isLoading}
            type="submit"
            value="Submit"
            className="font-inter font-medium bg-[#45718C] text-white px-4 py-2 rounded-md ml-4"
          />
          {error && <div>{error}</div>}
        </form>
      </div>
    </section>
  );
};

export default Login;

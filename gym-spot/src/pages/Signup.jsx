import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(email, password);
  };

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#222328] text-[32px]">
          {" "}
          Sign up form
        </h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w[500px] ">
          Please sign up browsky
        </p>
      </div>

      <div className="mt-16">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Name"
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

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

export default Signup;

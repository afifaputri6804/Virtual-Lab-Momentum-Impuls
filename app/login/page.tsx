"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("siswa");
  const [error, setError] = useState("");

  function handleLogin() {
    setError("");

    // LOGIN SISWA
    if (
      role === "siswa" &&
      username === "siswa" &&
      password === "12345"
    ) {
      localStorage.setItem("role", "siswa");
      localStorage.setItem("nama", "Siswa Fisika");

      router.push("/");
      return;
    }

    // LOGIN GURU
    if (
      role === "guru" &&
      username === "guru" &&
      password === "12345"
    ) {
      localStorage.setItem("role", "guru");
      localStorage.setItem("nama", "Guru Fisika");

      router.push("/");
      return;
    }

    setError("Username atau password tidak sesuai");
  }

  return (
    <main className="flex min-h-screen items-center justify-center overflow-x-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-4 sm:p-6 lg:p-10">

      <section className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-8 lg:p-10">

        {/* LOGO */}
        <div className="flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 text-3xl font-bold text-white shadow-lg sm:h-24 sm:w-24 sm:text-4xl">
            MT
          </div>
        </div>

        {/* JUDUL */}
        <h1 className="mt-6 text-center text-3xl font-bold text-blue-700 sm:text-4xl">
          MOMENTRACK
        </h1>

        <p className="mt-2 text-center text-sm text-gray-600 sm:text-base">
          Virtual Laboratory
          <br />
          Momentum dan Impuls
        </p>

        {/* PILIH ROLE */}
        <div className="mt-8">
          <label className="font-semibold">
            Masuk Sebagai
          </label>

          <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">

            <button
              type="button"
              onClick={() => setRole("siswa")}
              className={
                role === "siswa"
                  ? "rounded-xl bg-blue-600 p-3 font-semibold text-white shadow"
                  : "rounded-xl bg-gray-100 p-3 font-semibold text-gray-700 hover:bg-gray-200"
              }
            >
              👨‍🎓 Siswa
            </button>

            <button
              type="button"
              onClick={() => setRole("guru")}
              className={
                role === "guru"
                  ? "rounded-xl bg-blue-600 p-3 font-semibold text-white shadow"
                  : "rounded-xl bg-gray-100 p-3 font-semibold text-gray-700 hover:bg-gray-200"
              }
            >
              👨‍🏫 Guru
            </button>

          </div>
        </div>

        {/* USERNAME */}
        <div className="mt-6">
          <label className="font-semibold">
            Username
          </label>

          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-2 w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="Masukkan username"
          />
        </div>

        {/* PASSWORD */}
        <div className="mt-5">
          <label className="font-semibold">
            Password
          </label>

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
            className="mt-2 w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            placeholder="Masukkan password"
          />
        </div>

        {/* ERROR */}
        {error && (
          <div className="mt-5 rounded-xl bg-red-100 p-3 text-center text-sm font-medium text-red-600">
            {error}
          </div>
        )}

        {/* TOMBOL LOGIN */}
        <button
          onClick={handleLogin}
          className="mt-8 w-full rounded-xl bg-blue-700 py-3 font-bold text-white shadow transition hover:bg-blue-800"
        >
          LOGIN
        </button>

        {/* AKUN DEMO */}
        <div className="mt-6 rounded-2xl bg-slate-50 p-4 text-center text-xs text-gray-600 sm:text-sm">

          <p className="font-bold text-gray-700">
            Akun Demo
          </p>

          <p className="mt-2">
            Siswa: <b>siswa / 12345</b>
          </p>

          <p className="mt-1">
            Guru: <b>guru / 12345</b>
          </p>

        </div>

      </section>

    </main>
  );
}
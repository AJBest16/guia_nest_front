import Image from "next/image";
import React from "react";

export default function Aside() {
  return (
    <aside
      className="flex flex-col w-1/4 px-4 py-5 my-20 rounded-lg bg-cover bg-center"
      style={{ backgroundImage: "url('/images/foto_apuntes.jpg')" }}
    >
      <div className="flex flex-col gap-5 items-center justify-center h-full bg-black bg-opacity-70 rounded-lg p-4">
        <div className="bg-neutral-700 p-3 rounded-md">
          <Image src="" alt="logo" />
        </div>
        <h1 className="text-white font-bold text-2xl text-center">
          Intercambio de apuntes para estudiantes
        </h1>
      </div>
    </aside>
  );
}

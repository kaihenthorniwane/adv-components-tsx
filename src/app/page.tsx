"use client";

import AddTimer from "@/components/AddTimer";
import Header from "@/components/Header";
import Timers from "@/components/Timers";
import Form, { FormAPI } from "@/components/UI/Form";
import { useRef } from "react";

export default function Home() {
  const customFormElement = useRef<FormAPI>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
    customFormElement.current?.clear();
  }

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col w-full max-w-screen-sm p-5  gap-5">
        <Header />
        <AddTimer />
        <Timers />
      </div>
    </main>
  );
}

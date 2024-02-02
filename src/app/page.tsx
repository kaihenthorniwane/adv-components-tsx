"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Form from "@/components/Form";
import Input from "@/components/Input";
import { useRef } from "react";

export default function Home() {
  const nameInputRef = useRef<HTMLInputElement>(null);

  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col w-full max-w-screen-sm p-5">
        {/* <Button mode="anchor" href="https://www.google.com">
          Link
        </Button>
        <Button
          mode="button"
          className="bg-gray-800 rounded-2xl p-5 text-white"
        >
          This is button
        </Button>
        <Container as={Button}>Text</Container> */}
        <Form>
          <Input
            label={"nme"}
            id={"Your Name"}
            placeholder={"Firstname Lastname"}
            ref={nameInputRef}
          />
          <Input
            label={"name"}
            id={"Your Name"}
            placeholder={"Firstname Lastname"}
          />
          <Button mode="button">Save</Button>
        </Form>
      </div>
    </main>
  );
}

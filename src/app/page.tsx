"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";
import Form from "@/components/Form";
import Input from "@/components/Input";
import { useRef } from "react";

export default function Home() {
  function handleSave(data: unknown) {
    const extractedData = data as { name: string; age: string };
    console.log(extractedData);
  }

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
        <Form onSave={handleSave}>
          <Input
            label={"nme"}
            id={"Your Name"}
            placeholder={"Firstname Lastname"}
          />
          <Input label={"age"} id={"Your Age"} type={"number"} />
          <Button mode="button">Save</Button>
        </Form>
      </div>
    </main>
  );
}

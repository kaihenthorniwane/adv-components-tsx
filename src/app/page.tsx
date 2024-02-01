import Input from "@/components/Input";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div className="flex flex-col w-full max-w-screen-sm p-5">
        <Input
          label={"name"}
          id={"Your Name"}
          placeholder={"Firstname Lastname"}
        />
        <Input
          label={"name"}
          id={"Your Name"}
          placeholder={"Firstname Lastname"}
        />
      </div>
    </main>
  );
}

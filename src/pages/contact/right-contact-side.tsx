import { useState } from "react";

const RightContactSide = () => {
  const [isFormComplete, setIsFormComplete] = useState(false);

  const handleIsFormComplete = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const name = formData.get("name");
    const phone = formData.get("phone");
    const desc = formData.get("desc");
    const isValid =
      Boolean(email) && Boolean(name) && Boolean(phone) && Boolean(desc);
    setIsFormComplete(isValid);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const email = formData.get("email");
    const name = formData.get("name");
    const phone = formData.get("phone");
    const desc = formData.get("desc");
    console.log(email, name, phone, desc);
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      onInput={handleIsFormComplete}
      className="w-full grid  h-full gap-y-8 rounded-lg bg-white shadow-lg p-10"
    >
      <div className="grid  md:grid-flow-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your name*"
          required
          className="p-2 text-black/70 bg-[#F5F5F5] border-none outline-none rounded-sm"
        />
        <input
          type="email"
          required
          name="email"
          placeholder="Your email*"
          className="p-2 text-black/70 bg-[#F5F5F5] border-none outline-none rounded-sm"
        />
        <input
          type="number"
          required
          name="phone"
          placeholder="Your phone*"
          className="p-2 text-black/70 bg-[#F5F5F5] border-none outline-none rounded-sm"
        />
      </div>
      <textarea
        name="desc"
        required
        className="bg-[#F5F5F5] border-none outline-none p-2 resize-none"
        rows={6}
        id=""
        placeholder="Your message"
      />
      <div className="w-full flex justify-end">
        <button
          disabled={!isFormComplete}
          type="submit"
          className="bg-red-600 w-full disabled:bg-red-100 disabled:cursor-not-allowed border-none md:w-[200px] justify-end self-end items-end  text-white p-2 rounded-sm"
        >
          Send message
        </button>
      </div>
    </form>
  );
};

export default RightContactSide;

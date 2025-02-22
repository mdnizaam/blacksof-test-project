"use client";
import { Iinput } from "@/types/InputType";
import React, { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const ContactForm = () => {
  const [inputs, setInputs] = useState<Iinput>({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleInputChange = (name: string, value: string) => {
    setInputs((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //send input data to api here

    // reset form inputs
    setInputs({
      name: "",
      email: "",
      company: "",
      message: "",
    });
  };
  return (
    <div className="bg-[#0067B1] h-[100vh] w-full gap-x- text-white p-8 flex flex-col md:flex-row justify-center items-center  mx-auto">
      <div className="w-full md:w-1/2 flex  justify-end">
        <div>
          <h1 className="text-5xl font-bold mb-4">Get in touch</h1>
          <p className="my-6 text-2xl  font-normal">For general enquiries</p>
          <div className="my-6 text-[20px]">
            <span>Address:</span> <br />
            <span> 110, 16th Road, Chembur, Mumbai - 400071</span>
            <br />
            <br />
            <span>Phone:</span>
            <br />
            <span> +91 22 25208822</span>
            <br />
            <br />
            <span>Email:</span>
            <br />
            <span> info@supremegroup.co.in</span>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-2/3  justify-evenly">
        <form onSubmit={handleSubmit} className="w-full md:w-2/3">
          <div className="mb-6">
            <Input
              value={inputs.name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("name", event.target.value)
              }
              type="text"
              id="fullName"
              placeholder="Full Name"
            />
          </div>
          <div className="mb-6">
            <Input
              value={inputs.email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("email", event.target.value)
              }
              type="email"
              id="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-6">
            <Input
              value={inputs.company}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                handleInputChange("company", event.target.value)
              }
              type="text"
              id="company"
              placeholder="Company"
            />
          </div>

          <div className="mb-6">
            <textarea
              value={inputs.message}
              onChange={(event) =>
                handleInputChange("message", event.target.value)
              }
              className=" text-[20px] w-full p-2 outline-none border-b-2 bg-inherit border-[#FFFFFF66] placeholder:text-[#FFFFFF] focus:border-white"
              id="message"
              placeholder="Message"
            ></textarea>
          </div>
          <Button label={"Send"} border={true} bg={false} />
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

import React from "react";
import Dropdown from "./Dropdown";
import { Button } from "../ui/button";
import PaymentMethodLogos from "./PaymentMethods";

const GetQuoteForm = () => {
  return (
    <form className=" rounded-xl bg-muted mt-4">
      <div className="w-full bg-secondary-foreground rounded-t-xl px-2 items-center flex justify-center">
        <h2 className="text-xl font-bold text-white font-instruction col-span-4 py-2">
          Get Custom Quote
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-4 px-4 pt-4">
        <div className="relative col-span-4">
          <input
            type="text"
            id="floating_outlined1"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-white appearance-none dark:text-white dark:border-white   focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined1"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] dark:bg-gray-900 bg-muted px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Name
          </label>
        </div>
        <div className="relative col-span-4">
          <input
            type="text"
            id="floating_outlined2"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-white appearance-none dark:text-white dark:border-gray-600   focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined2"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   dark:bg-gray-900 bg-muted px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Phone
          </label>
        </div>
        <div className="relative col-span-4">
          <input
            type="email"
            id="floating_outlined3"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-white appearance-none dark:text-white dark:border-gray-600   focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
          />
          <label
            htmlFor="floating_outlined3"
            className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   dark:bg-gray-900 bg-muted px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Email
          </label>
        </div>
        <div className="col-span-4 grid md:grid-cols-4 grid-cols-2 gap-4">
          <div className="relative">
            <input
              type="number"
              id="floating_outlined4"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-white appearance-none dark:text-white dark:border-gray-600   focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined4"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   dark:bg-gray-900 bg-muted px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              L
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              id="floating_outlined5"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-white appearance-none dark:text-white dark:border-gray-600   focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined5"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   dark:bg-gray-900 bg-muted px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              W
            </label>
          </div>
          <div className="relative">
            <input
              type="number"
              id="floating_outlined6"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-white appearance-none dark:text-white dark:border-gray-600   focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined6"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   dark:bg-gray-900 px-2 bg-muted peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              D
            </label>
          </div>
          <Dropdown label="Size Unit" items={["Inch", "CM", "MM"]} id={43} />
        </div>
        <div className="col-span-4 gap-4 grid sm:grid-cols-3 grid-cols-2">
          <div className="relative w-full">
            <input
              type="text"
              id="floating_outlined7"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 
               bg-transparent rounded-lg border border-white appearance-none 
               dark:text-white dark:border-gray-600   
               focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined7"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 
               transform -translate-y-4 scale-75 top-2 z-10 origin-[0] 
                 dark:bg-gray-900 px-2  bg-muted
               peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-blue-500 
               peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 
               peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 
               peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 
               rtl:peer-focus:left-auto start-1 pointer-events-none"
            >
              Product Name
            </label>
          </div>

          <div className="relative">
            <input
              type="number"
              id="floating_outlined8"
              className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-white appearance-none dark:text-white dark:border-gray-600   focus:outline-none focus:ring-0 focus:border-white peer"
              placeholder=" "
            />
            <label
              htmlFor="floating_outlined8"
              className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   dark:bg-gray-900 bg-muted px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              Quantity
            </label>
          </div>
          <Dropdown
            label="Color"
            items={[
              "1 Color",
              "2 Color",
              "3 Color",
              "4 Color",
              "4/1 Color",
              "4/2 Color",
              "4/3 Color",
              "4/4 Color",
            ]}
            id={23}
          />
        </div>
        <div className="relative col-span-4">
          <textarea
            id="floating_outlined_textarea"
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-white appearance-none dark:text-white dark:border-gray-600   focus:outline-none focus:ring-0 focus:border-white peer"
            placeholder=" "
          ></textarea>
          <label
            htmlFor="floating_outlined_textarea"
            className="absolute text-sm bg-muted text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]   dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Describe Here...
          </label>
        </div>
      </div>

      <div className="flex w-full flex-row items-center justify-between pt-4 px-4 pb-4">
        <PaymentMethodLogos
          paymentLogos={[
            "/payment/paypal.svg",
            "/payment/mastercard.svg",
            "/payment/visa.svg",
            "/payment/discover.svg",
            "/payment/amex.svg",
          ]}
        />
        <Button className="self-end bg-secondary hover:bg-secondary-foreground">
          Get a Quote
        </Button>
      </div>
    </form>
  );
};

export default GetQuoteForm;

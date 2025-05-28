import clsx from "clsx";

export const SelectWithValidation = (error?: boolean) =>
  clsx("w-full px-4 py-3 rounded-md border mt-1 outline-none", {
    "border-red-500 focus:border-red-500": error,
    "border-gray-300 focus:border-blue-400": !error,
  });

export const SelectStyle =
  "w-fit h-fit px-4 py-3 rounded-md border mt-1 outline-none border-gray-300 focus:border-blue-400";

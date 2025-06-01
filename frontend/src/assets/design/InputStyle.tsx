import clsx from "clsx";

export const Input = (error?: boolean) =>
  clsx("w-full px-4 py-3 rounded-md border mt-1 outline-none", {
    "border-red-500 focus:border-red-500": error,
    "border-gray-300 focus:border-blue-400": !error,
  });

export const SearchInput = {
  default:
    "peer w-full h-fit pl-10 pr-4 py-3 border rounded-md focus:outline-none focus:border-blue-400",
  icon: "absolute top-3 left-3 text-gray-400 peer-focus:text-blue-500",
};

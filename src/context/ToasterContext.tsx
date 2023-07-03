"use client";

import { Toaster } from "react-hot-toast";

export const ToasterContext = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Define default options
        className: "",
        duration: 5000,
        style: {
          background: "rgb(10, 10, 10)",
          color: "#fff",
        },
      }}
    />
  );
};

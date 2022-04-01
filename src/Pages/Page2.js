import React from "react";
import PDFhandler from "../Components/PDFhandler";
const Page2 = () => {
  return (
    <div>
      <PDFhandler pdf="/manual.pdf" height={860} />
    </div>
  );
};

export default Page2;

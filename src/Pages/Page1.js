import React from "react";
import PDFhandler from "../Components/PDFhandler";
const Page1 = () => {
  return (
    <div>
      <PDFhandler pdf="/test.pdf" height={800} />
    </div>
  );
};

export default Page1;

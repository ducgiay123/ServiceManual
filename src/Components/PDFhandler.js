import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import "./pdfhandler.css";
function PDFhandler(props) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet) {
    setPageNumber((prevPageNumber) => prevPageNumber + offSet);
  }

  function changePageBack() {
    changePage(-1);
  }

  function changePageNext() {
    changePage(+1);
  }

  return (
    <div className="App-header">
      <Document file={props.pdf} onLoadSuccess={onDocumentLoadSuccess}>
        <Page height={props.height} pageNumber={pageNumber} />
      </Document>
      <h4>
        Page {pageNumber} of {numPages}
      </h4>
      <div className="buttonContainer">
        {pageNumber > 1 && (
          <button onClick={changePageBack} className="buttonPDF">
            Previous Page
          </button>
        )}
        {pageNumber < numPages && (
          <button onClick={changePageNext} className="buttonPDF">
            Next Page
          </button>
        )}
      </div>
    </div>
  );
}

export default PDFhandler;

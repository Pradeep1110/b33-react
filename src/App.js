import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllRecords from "./AllRecords";
import FormAction from "./FormAction";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<AllRecords />} />
          <Route exact path="/actionItems" element={<FormAction />} />
          <Route exact path="/actionItems/:id/:name" element={<FormAction />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

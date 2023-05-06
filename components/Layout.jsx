import React, { useState } from "react";
import Copyright from "./common/Copyright";
export default function Layout({ children }) {
  return <div style={{ overflow: "hidden" }}>{children}</div>;
}

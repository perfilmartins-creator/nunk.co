"use client";

import Cursor from "./Cursor";
import Loader from "./Loader";
import { ReactNode } from "react";

export default function ClientRoot({ children }: { children: ReactNode }) {
  return (
    <>
      <Loader />
      <Cursor />
      {children}
    </>
  );
}

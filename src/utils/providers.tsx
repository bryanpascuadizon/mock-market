"use client";
import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface ProviderProps {
  children?: React.ReactNode;
  session?: string;
}

const Providers = ({ session, children }: ProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;

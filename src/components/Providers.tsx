import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import { ReactNode } from "react";
import { usePresenceChannel } from "@/hooks/usePresenceChannel";

export default function Providers({ children }: { children: ReactNode }) {
  return <NextUIProvider>{children}</NextUIProvider>;
}

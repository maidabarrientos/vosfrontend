"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className="dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
        <script async src="https://static.wdgtsrc.com/assets/loader.js" data-chats-widget-id="89da8102-f021-4a1c-9871-958fcf62716f"></script>
        <script src="https://cdn.pulse.is/livechat/loader.js" data-live-chat-id="6513e83875799ade0305c32d" async></script>

      </body>
    </html>
  );
}

import { Providers } from "./providers";

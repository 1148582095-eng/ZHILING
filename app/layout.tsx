import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "指令流转中心 1.2 高保真原型",
  description: "指令流转 1.2 完整业务原型",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

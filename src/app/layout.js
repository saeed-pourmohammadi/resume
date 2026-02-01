import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./page.scss";
import LocaleProvider from "@/components/LocaleProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "saeed pourmohammadi resume",
  description: "saeed pourmohammadi resume",
};

export default async function RootLayout({ children }) {


  return (
    <html>
      <body>
        <LocaleProvider>
          {children}
        </LocaleProvider>
      </body>
    </html>
  );
}

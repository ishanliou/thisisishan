import Image from "next/image";
import Head from "next/head";
import { Inter } from "next/font/google";
import Main from "@/components/Main";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>This is Ishan</title>
        <meta name="descrtiption" content="" />
      </Head>
      <Main />
    </div>
  );
}

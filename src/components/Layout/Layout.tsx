import scss from "./Layout.module.scss";
import Head from "next/head";
import { exo } from "@/theme/fonts";

const Layout = (props: any) => {
  return (
    <>
      <Head>
        <title>PokéSquad - Build Your Pokemon Squad!</title>
        <meta name="description" content="Data Dashboard" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${scss.layout} ${exo.className}`}>
        {props.children}
      </main>
    </>
  );
};

export default Layout;

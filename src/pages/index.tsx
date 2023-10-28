import Layout from "@/components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pedro Novo</title>
      </Head>
      <Layout />
    </>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        "common",
        "profile",
        "about-me",
        "skills",
        "books",
        "referrals",
        "socials",
        "hero",
        "footer",
      ])),
      // Will be passed to the page component as props
    },
  };
}

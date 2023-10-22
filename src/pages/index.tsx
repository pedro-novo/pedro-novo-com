import Layout from "@/components/layout/layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return <Layout />;
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
      ])),
      // Will be passed to the page component as props
    },
  };
}

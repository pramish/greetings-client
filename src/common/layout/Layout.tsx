import React, { Fragment, ReactNode } from "react";
import Head from "next/head";

export type LayoutProps = {
  title: string;
  children: ReactNode;
};

// This Layout needs to be worked on. For now it's simple.
export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <Fragment>
      <Head>
        <title>{title}</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        {/* Add all of your main pages here */}
        <link rel="canonical" href="https://pramishluitel.com/" />
        <link rel="canonical" href="https://pramishluitel.com/about" />
        <link rel="canonical" href="https://pramishluitel.com/blogs" />
        <link rel="canonical" href="https://pramishluitel.com/contact" />
        <link rel="canonical" href="https://pramishluitel.com/services" />
        <meta
          name="description"
          content="Welcome to the NextJS with Apollo Client Boilerplate. Please use this boilerplate for your next web applications. It's scalable and production ready."
        />
        <meta
          name="description"
          content="Welcome to the NextJS with Apollo Client Boilerplate. Please use this boilerplate for your next web applications. It's scalable and production ready."
        />
        <meta
          name="description"
          content="Welcome to the NextJS boilerplate. We aspire to develop complex web applications for clients ranging from
          industry leaders to the scrappiest startups."
        />
        <meta
          property="og:type"
          content="Welcome to the NextJS boilerplate. We aspire to develop complex web applications for clients ranging from
          industry leaders to the scrappiest startups."
        />
        <meta property="og:title" content="NextJS boilerplate" />
        <meta
          property="og:description"
          content="Welcome to the NextJS boilerplate. We aspire to develop complex web applications for clients ranging from
          industry leaders to the scrappiest startups."
        />
        <meta
          property="og:description"
          content="Welcome to the NextJS boilerplate. We aspire to develop complex web applications for clients ranging from
          industry leaders to the scrappiest startups."
        />
        <meta property="og:url" content="https://pramishluitel.com" />
        <meta property="og:site_name" content="NextJS boilerplate" />
      </Head>

      {/* ToDo */}
      {/* Navbar */}
      {children}
      {/* Footer */}
    </Fragment>
  );
};

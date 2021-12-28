import type { NextPage } from "next";
import { Layout } from "../src/common/layout";

import { HomePage } from "../src/components/homepage";

const Home: NextPage = () => {
  return (
    <Layout title="Greetings | Home">
      <HomePage />
    </Layout>
  );
};

export default Home;

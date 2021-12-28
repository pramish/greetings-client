import { NextPage } from "next";

import { Layout } from "../src/common/layout";
import { DashboardComponent } from "../src/components/dashboard";

const Dashboard: NextPage = () => {
  return (
    <Layout title="Greetings | Dashboard">
      <DashboardComponent />
    </Layout>
  );
};

export default Dashboard;

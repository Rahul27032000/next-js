import Link from "next/link";
import Layout from "../src/components/layout";

const About = () => {
  return (
    <Layout>
      <h1>
        about page is here{" "}
        <Link href="/">
          <a>home</a>
        </Link>
      </h1>
    </Layout>
  );
};

export default About;

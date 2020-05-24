import Layout from "../components/layout";
import BannerTitle from "../components/banner-title";
import Navbar from "../components/navbar";
import Content from "../components/content";
import Footer from "../components/footer";

function About() {
  return (
    <Layout title="Home | DizEarth-com Paulivy" description="A food website">
      <BannerTitle />
      <Navbar />
      <Content />

      <Footer />
    </Layout>
  );
}

export default About;

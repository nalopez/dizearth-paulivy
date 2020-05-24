import Head from "next/head";
import bgImage from "../../public/images/background.jpg";

function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <meta name="description" value={props.description} />
        <link
          href="https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Sanchez&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="main">
        {props.children}
        <style jsx global>
          {`
            body {
              margin: 0;
              padding: 0;
            }

            .main {
                width:100%;
                height:100vh;
                position:absolute;
                background: url('${bgImage}') no-repeat;
                background-size: cover;
                overflow: auto;
            }
          `}
        </style>
      </div>
    </div>
  );
}

export default Layout;

import { useState, useEffect } from "react";
import * as API from "./services/launches";
import logo from "./assets/spacex-logo.jpg";
import { Heading, Image } from "@chakra-ui/react";
import LaunchItem from "./components/LaunchItem";

const App = () => {
  const [launches, setLaunches] = useState([]);

  useEffect(() => {
    API.getAllLaunches().then(setLaunches);
  }, []);

  return (
    // React Fragment: <></>
    <>
      <Image m={4} src={logo} width={300} />
      <Heading as="h1" size="2xl" m={4}>
        SpaceX Launches
      </Heading>
      <section>
        {launches.map((launch) => (
          <LaunchItem key={launch.flight_number} {...launch} />
        ))}
      </section>
    </>
  );
};

export default App;

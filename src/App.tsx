import type { Component } from "solid-js";

import { Container, Heading, Divider } from "@hope-ui/solid";

import ReloadPrompt from "./ReloadPrompt";
import QRReader from "./components/QRReader";

const App: Component = () => {
  return (
    <Container py="$4" px="$2">
      <Heading
        level="1"
        size="5xl"
        class=" text-blue-400"
        textAlign="center"
        mb="$2"
      >
        QRPay India
      </Heading>
      <h5 class="text-gray-600 mb-4 text-center">Offline UPI Payment App</h5>
      <h5 class="text-gray-500 mb-4 text-center text-sm">
        Developed By{" "}
        <a href="https://sajithlal.dev" class="text-blue-500 font-bold ">
          Sajithlal
        </a>
      </h5>
      <Divider />
      <QRReader />
      <ReloadPrompt />
    </Container>
  );
};

export default App;

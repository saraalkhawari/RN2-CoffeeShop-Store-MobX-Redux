import React from "react";
import { View } from "react-native";
import AppContainer from "../../Navigation";

import Login from "../Login";

// NativeBase Components
import { Container, Header } from "native-base";

// Style
import styles from "./styles";

const HomePage = () => {
  return (
    <Container style={styles.transparent}>
      <View style={styles.overlay} />
      <AppContainer />
    </Container>
  );
};

export default HomePage;

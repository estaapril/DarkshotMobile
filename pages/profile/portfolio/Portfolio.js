import React from "react";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import { styles } from "./styles";

const isDark = true;
const fs = global.customFonts;
const { theme } = useTheme(isDark);

export const Portfolio = () => {
  return (
    <MainContainer isDark={isDark}>
      <View style={styles.container}></View>
    </MainContainer>
  );
};

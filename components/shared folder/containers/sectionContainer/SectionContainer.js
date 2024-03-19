import React from "react";
import { Text, View } from "react-native";
import { global } from "../../../../styles/global";
import { styles } from "./styles";
import useTheme from "../../../../hook/useTheme";

const SectionContainer = ({ header, subHeader, isDark, children }) => {
  const { theme } = useTheme(isDark);
  const fs = global.customFonts;
  return (
    <View style={styles.container}>
      {/* HEADER /} */}
      {header && (
        <>
          <View style={[theme.borderBottomColor, fs.bar]} />
          <Text style={[theme.txtColor, fs.header]}>{header}</Text>
        </>
      )}
      {/* {/ SUB-HEADER */}
      {subHeader && (
        <Text style={[theme.txtColor, fs.subHeader]}>{subHeader}</Text>
      )}
      <View style={[styles.content, fs.poppins]}>{children}</View>
    </View>
  );
};
export default SectionContainer;

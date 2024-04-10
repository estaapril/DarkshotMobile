import React from "react";
import { Text, TouchableOpacity } from "react-native";
import useTheme from "../../../hook/useTheme";
import { global } from "../../../styles/global";

export const CustomButton = ({
  isDark,
  isPrimary,
  isSecondary,
  isTertiaryLight,
  isTertiaryDark,
  label,
  onPress,

  children,
}) => {
  const { theme } = useTheme(isDark);
  const fs = global.customFonts;
  const btnPrimary = [
    {
      backgroundColor: "#373737",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 15,
      paddingHorizontal: 20,
      flex: 0,
      textWrap: "wrap",
      borderRadius: 5,
    },
  ];
  const btnSecondary = [
    // apply now
    {
      backgroundColor: "#121212",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
      flex: 0,
      textWrap: "wrap",
      borderRadius: 5,
    },
  ];
  const btnTertiaryLight = [
    // round button
    {
      backgroundColor: "#fff",
      borderWidth: 1,
      borderColor: "#000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
      flex: 0,
      textWrap: "wrap",
      borderRadius: 30,
    },
  ];
  const btnTertiaryDark = [
    {
      backgroundColor: "#000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
      flex: 0,
      textWrap: "wrap",
      borderRadius: 30,
    },
  ];
  return (
    <TouchableOpacity
      style={[
        isPrimary && btnPrimary,
        isSecondary && btnSecondary,
        isTertiaryLight && btnTertiaryLight,
        isTertiaryDark && btnTertiaryDark,
      ]}
    >
      <Text
        style={[
          (isPrimary || isTertiaryDark) && theme.secondaryTxtColor,
          (isSecondary || isTertiaryLight) && theme.secondaryTxtColor,
          isTertiaryLight && theme.txtColor,
          fs.buttonText,
        ]}
      >
        {label ? label : "empty"}
      </Text>
    </TouchableOpacity>
  );
};
export default CustomButton;

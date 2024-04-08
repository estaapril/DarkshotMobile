import { StyleSheet } from "react-native";

export const global = StyleSheet.create({
  customFonts: {
    bar: {
      marginBottom: -1,
      width: 30,
      borderBottomWidth: 5,
    },
    header: {
      fontFamily: "Agdasima-Bold",
      textTransform: "uppercase",
      paddingTop: 0,
      fontSize: 22,
    },
    subHeader: {
      fontFamily: "Agdasima-Regular",
      marginTop: -1,
      textTransform: "uppercase",
      paddingTop: 0,
      fontSize: 14,
    },
    content: {
      fontFamily: "Poppins-Regular",
      fontSize: 14,
    },
    buttonText: {
      fontFamily: "Montserrat-Regular",
      fontSize: 15,
    },
    poppins: {
      fontFamily: "Poppins-Regular",
    },
    poppinsBold: {
      fontFamily: "Poppins-Bold",
    },
    poppinsMedium: {
      fontFamily: "Poppins-Medium",
    },
    poppinsSemiBold: {
      fontFamily: "Poppins-SemiBold",
    },
    montserrat: {
      fontFamily: "Montserrat-Regular",
    },
    montserratMedium: {
      fontFamily: "Montserrat-Medium",
    },
    montserratBold: {
      fontFamily: "Montserrat-Bold",
    },
    agdasima: {
      fontFamily: "Agdasima-Regular",
    },
    agdasimaBold: {
      fontFamily: "Agdasima-Bold",
    },
    inter: {
      fontFamily: "Inter-Regular",
    },
    interBold: {
      fontFamily: "Inter-Bold",
    },
  },
});
export const lightMode = StyleSheet.create({
  borderColor: {
    borderWidth: 1,
    borderColor: "#ADADAD",
  },
  borderBottomColor: {
    borderBottomColor: "#1C1C1C",
  },
  txtColor: {
    color: "#000",
  },
  txtColorSecondary: {
    color: "#fff",
  },
  txtColorTertiary: {
    color: "#848484",
  },
  secondaryBgColor: {
    backgroundColor: "#1C1C1C",
  },
  secondaryTxtColor: {
    color: "#FAFAFA",
  },
  bgColor: {
    backgroundColor: "#FAFAFA",
  },
});
export const darkMode = StyleSheet.create({
  borderColor: {
    borderWidth: 1,
    borderColor: "#FAFAFA",
  },
  borderBottomColor: {
    borderBottomColor: "#FAFAFA",
  },
  txtColor: {
    color: "#fff",
  },
  txtColorSecondary: {
    color: "#000",
  },
  txtColorTertiary: {
    color: "#ADADAD",
  },
  secondaryBgColor: {
    backgroundColor: "#FAFAFA",
  },
  secondaryTxtColor: {
    color: "#1C1C1C",
  },
  bgColor: {
    backgroundColor: "#1C1C1C",
  },
});

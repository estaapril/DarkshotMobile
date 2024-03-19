import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fwBold: {
    fontFamily: "Montserrat-Bold",
  },
  label: {
    paddingBottom: 12,
    fontSize: 17,
    color: "white",
    textTransform: "capitalize",
  },
  headerContainer: {
    height: 200,
    marginRight: 50,
    marginLeft: 25,
    marginTop: 5,
  },
  topTitle: {
    fontSize: 35,
    color: "white",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderWidth: 1,
    // borderColor: "yellow",
    // width: "100%",
  },
  inputContainer: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  inputStyle: {
    width: "100%",
    height: 45,
    backgroundColor: "white",
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
  },
  actionContainer: {
    width: "100%",
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  activeLink: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    color: "white",
    textTransform: "capitalize",
  },
  normalText: {
    fontSize: 16,
    fontWeight: "100",
    textAlign: "right",
    color: "white",
  },
  logoContainer: {
    marginTop: 20,
  },
  mainBrand: {
    resizeMode: "contain",
    alignSelf: "center",
    tintColor: "white",
    height: 70,
  },
});

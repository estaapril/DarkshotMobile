import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  label: {
    fontSize: 15,
  },
  headerContainer: {
    height: "auto",
    display: "flex",
    paddingHorizontal: 10,
    marginBottom: 35,
  },
  topTitle: {
    fontSize: 25,
  },
  container: {
    display: "flex",
    paddingBottom: 18,
  },
  inputContainer: {
    paddingHorizontal: 10,
    marginTop: 8,
  },
  inputStyle: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
    paddingLeft: 37,
  },
  actionContainer: {
    paddingHorizontal: 10,
    marginTop: 45,
    marginBottom: 18,
  },
  activeLink: {
    fontSize: 13,
    textAlign: "right",
    textTransform: "capitalize",
  },
  normalText: {
    fontSize: 13,
    textAlign: "right",
  },
  icon: {
    position: "absolute",
    left: 20,
    top: 10,
    width: 22,
    height: 22,
  },
  eyeIcon: {
    position: "absolute",
    right: 40,
    width: 22,
    height: 22,
  },
});

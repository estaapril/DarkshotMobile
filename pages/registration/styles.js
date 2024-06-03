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
    marginTop: 8,
  },
  inputStyle: {
    color: "white",
    width: "100%",
    height: 40,
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderBottomColor: "#DDDDDD",
    paddingRight: 45,
    marginBottom: 8,
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
    top: 10,
    width: 22,
    height: 22,
    tintColor: "#DDDDDD",
  },
  eyeIcon: {
    position: "absolute",
    width: 22,
    height: 22,
    right: 15,
  },
});

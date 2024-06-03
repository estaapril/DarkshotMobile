import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainlogoContainer: {
    paddingTop: 20,
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: 25,
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
  },
  brand: {
    height: 70,
    width: 150,
    resizeMode: "contain",
  },
  brand2: {
    height: 95,
    width: 199.07,
    resizeMode: "contain",
  },
  label: {
    paddingBottom: 12,
    fontSize: 15,
  },
  container: {
    display: "flex",
    paddingBottom: 18,
  },
  inputContainer: {
    display: "flex",
  },
  actionContainer: {
    paddingHorizontal: 10,
    marginTop: 45,
    marginBottom: 18,
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
  normalText: {
    fontSize: 13,
    textAlign: "right",
  },
  activeLink: {
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

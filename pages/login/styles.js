import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainlogoContainer: {
    paddingTop: 20,
    alignItems: "center",
    alignSelf: "center",
    paddingBottom: 25,
  },
  contentContainer: {
    borderWidth: 1,
    // borderColor: "red",
    display: "flex",
    alignItems: "center",
  },
  brand: {
    height: 70,
    width: 150,
    resizeMode: "contain",
    tintColor: "white",
  },
  brand2: {
    height: 95,
    width: 199.07,
    resizeMode: "contain",
    tintColor: "white",
  },
  label: {
    //login label (username and password)
    paddingBottom: 12,
    fontSize: 17,
    color: "white",
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 10,
    borderWidth: 1,
    // borderColor: "yellow",
    width: "100%",
  },
  inputContainer: {
    paddingHorizontal: 10,
    paddingBottom: 15,
  },
  actionContainer: {
    // borderWidth: 1,
    // borderColor: "yellow",
    width: "100%",
    paddingBottom: 20,
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  inputStyle: {
    width: "100%",
    height: 45,
    backgroundColor: "white",
    padding: 10,
    fontSize: 18,
    borderRadius: 5,
  },
  normalText: {
    fontSize: 16,
    fontWeight: "100",
    textAlign: "right",
    color: "white",
  },
  activeLink: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "right",
    color: "white",
  },
});

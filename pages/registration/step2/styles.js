import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fileText: {
    marginBottom: 20,
    color: "white",
  },
  placeholder: {
    fontSize: 15,
    paddingHorizontal: 10,
    padding: 10,
    color: "#DDDDDD",
  },
  choosefileContainer: {
    borderColor: "#DDDDDD",
    flexDirection: "row",
    borderWidth: 2,
    display: "flex",
    width: "100%",
    backgroundColor: "#EAEAEA",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    backgroundColor: "transparent",
  },
  btnStyle: {
    color: "#343536",
    paddingHorizontal: 5,
    fontSize: 15,
  },
  fileNamePlaceholder: {
    display: "flex",
    flex: 1,
    width: 30,
  },
  designContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 3,
    display: "flex",
    justifyContent: "center",
  },
  inputContainer: {
    marginTop: -15,
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
  uploadBtn: {
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#DDDDDD",
  },
  uploadIcon: {
    tintColor: "#343536",
    height: 20,
    width: 18,
  },
});

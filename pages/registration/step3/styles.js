import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fileText: {
    color: "white",
    textTransform: "capitalize",
  },
  subText: {
    color: "white",
    textTransform: "capitalize",
    fontSize: 12,
    marginTop: 30,
  },
  uploadContainer: {
    borderWidth: 1,
    borderColor: "white",
    height: 100,
    flex: 2,
    borderStyle: "dashed",
    flexDirection: "row",
    columnGap: 8,
    justifyContent: "center",
  },
  uploadText: {
    fontFamily: "Poppins-Regular",
    color: "white",
    fontSize: 15,
    alignSelf: "center",
  },
  icon: {
    tintColor: "#DDDDDD",
    height: 20,
    width: 20,
    alignSelf: "center",
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
});

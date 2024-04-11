import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    display: "flex",
    marginTop: 40,
    flexWrap: "wrap",
    width: "100%",
  },
  header: {
    fontSize: 14,
  },
  btnContainer: {
    flexDirection: "row",
    columnGap: 10,
    marginVertical: 20,
    display: "flex",
    justifyContent: "center",
  },
  btnSubmitContainer: {
    display: "flex",
    position: "absolute",
    bottom: -90,
    right: 30,
  },
  btnSubmit: {
    fontSize: 15,
    color: "#4B77E8",
  },
  buttonStyles: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
  },
  buttonText: {
    fontSize: 14,
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    display: "flex",
    marginTop: 40,
    flexWrap: "wrap",
    width: "100%",
    flex: 1,
  },
  header: {
    fontSize: 14,
  },
  btnContainer: {
    flexDirection: "row",
    columnGap: 10,
    marginVertical: 20,
    display: "flex",
    justifyContent: "flex-end",
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
  inlineTextContainer: {
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
});

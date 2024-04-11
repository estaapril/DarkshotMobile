import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderWidth: 1.5,
    borderColor: "gray",
    display: "flex",
    marginTop: 10,
    height: 100,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
  },
  btnContainer: {
    flexDirection: "row",
    columnGap: 20,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonStyles: {
    borderWidth: 1.5,
    borderColor: "black",
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 14,
  },
});

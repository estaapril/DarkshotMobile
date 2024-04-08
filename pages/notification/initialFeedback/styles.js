import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    borderColor: "red",
    borderWidth: 2,
    marginTop: 10,
    width: 300,
  },
  container: {
    borderWidth: 1.5,
    borderColor: "gray",
    display: "flex",
    marginTop: 10,
    height: 100,
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  text: {
    display: "flex",
  },
});

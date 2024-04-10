import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  categoryContainer: {
    display: "flex",
    height: 8,
    marginBottom: 20,
    marginLeft: -15,
  },
  categoryButton: {
    display: "flex",
    textTransform: "capitalize",
    alignItems: "center",
    borderColor: "black",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginHorizontal: 5,
    borderRadius: 4,
    color: "black",
  },
  titleContainer: {
    display: "flex",
    marginVertical: 20,
  },
  title: {
    fontSize: 23,
    textTransform: "uppercase",
  },
  moreButton: {
    borderWidth: 1,
    paddingHorizontal: 15,
    paddingVertical: 7,
    marginVertical: 10,
    borderRadius: 40,
    borderColor: "white",
    backgroundColor: "#E9EBF1",
  },
  primaryColumn: {
    flexDirection: "row",
    alignItems: "center",
  },
  secondaryColumn: {
    flex: 1,
    textTransform: "capitalize",
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  categoryContainer: {
    display: "flex",
    width: "auto",
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
    marginVertical: 18,
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
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 40,
    borderColor: "white",
    backgroundColor: "#F3F5FB",
  },
  primaryColumn: {
    flexDirection: "row",
    // marginBottom: 10,
    alignItems: "center",
  },
  secondaryColumn: {
    flex: 1,
    textTransform: "capitalize",
  },
});

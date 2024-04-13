import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  description: {
    fontSize: 14,
  },
  header: {
    fontSize: 20,
    color: "#000",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  title: {
    fontSize: 15,
  },
  contentContainer: {
    marginHorizontal: 1,
    marginTop: 20,
    rowGap: 20,
    marginBottom: 20,
  },
  actionContainer: {
    paddingHorizontal: 10,
    marginBottom: 18,
  },
  dropdownIcon: {
    fontSize: 20,
    marginLeft: 5,
  },
  dropdownHeader: {
    flexDirection: "row",
    columnGap: 20,
  },
});

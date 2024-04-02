import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
  },
  primaryContainer: {
    display: "flex",
    marginHorizontal: 15,
    marginVertical: 15,
  },
  secondaryContainer: {
    display: "flex",
    marginHorizontal: 15,
    flexDirection: "row",
    columnGap: 2,
  },
  messageContainer: {
    display: "flex",
    marginHorizontal: 2,
    marginVertical: 15,
  },
  text: {
    fontSize: 15,
  },
  subText: {
    fontSize: 15,
    textTransform: "capitalize",
  },
  link: {
    fontSize: 15,
    color: "#4B77E8",
    textDecorationLine: "underline",
  },
});

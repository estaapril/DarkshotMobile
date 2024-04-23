import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  skillsHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 3,
    top: -29,
    left: 48,
  },
  mainContainer: {
    display: "flex",
    marginBottom: 20,
    marginTop: 18,
    width: 300,
  },
  inputContainer: {
    marginVertical: 5,
  },
  title: {
    fontSize: 12,
    textTransform: "uppercase",
  },
  inputField: {
    height: 30,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  subHeader: {
    fontSize: 10,
    color: "gray",
  },
  skillsHeader: {
    display: "flex",
    flexDirection: "row",
    columnGap: 10,
    marginBottom: 10,
    justifyContent: "center",
  },
  text: {
    textTransform: "uppercase",
    display: "flex",
    color: "white",
  },
  skillsMainContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
  },
  skillContainer: {
    backgroundColor: "#B3B3B3",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 20,
    margin: 5,
  },
  skillsList: {
    backgroundColor: "white",
    borderRadius: 4,
    marginHorizontal: 6,
    paddingVertical: 5,
    paddingHorizontal: 6,
    justifyContent: "center",
  },
});

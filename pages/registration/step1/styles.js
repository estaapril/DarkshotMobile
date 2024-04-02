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
    borderWidth: 1,
    backgroundColor: "black",
  },
  subHeader: {
    fontSize: 10,
    color: "gray",
  },
  skillsHeader: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    columnGap: 8,
    justifyContent: "center",
    top: -30,
  },
  text: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 13,
  },
  skillsMainContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    marginTop: -15,
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

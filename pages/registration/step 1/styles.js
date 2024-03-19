import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
  },
  button: {
    backgroundColor: "#6B6B6B",
    paddingVertical: 10,
    borderRadius: 20,
  },
  btnText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Agdasima-Bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  skillsHeaderContainer: {
    display: "flex",
    flexDirection: "row",
    columnGap: 3,
    top: -29,
    left: 48,
  },
  mainContainer: {
    flexDirection: "column",
    display: "flex",
    flex: 1,
    marginBottom: 20,
  },
  inputContainer: {
    marginVertical: 5,
  },
  title: {
    fontSize: 12,
    color: "white",
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
    fontWeight: "bold",
  },
  skillsHeader: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    columnGap: 8,
    marginHorizontal: 10,
    justifyContent: "center",
  },
  text: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 13,
  },
  buttons: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 15,
    borderRadius: 50,
  },
  skillsMainContainer: {
    marginHorizontal: 22,
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 15,
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
  proceedButton: {
    backgroundColor: "#444",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  proceedButtonText: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 15,
  },
});

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

  container: {
    flex: 1,
    padding: 22,
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  jobContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  jobTitle: {
    fontSize: 15,
    paddingLeft: 10,
  },
  noJobs: {
    textAlign: "center",
  },

  searchbar: {
    elevation: 0, // Remove shadow on Android
    height: 40,
  },
});

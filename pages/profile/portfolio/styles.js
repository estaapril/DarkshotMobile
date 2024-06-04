import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 50,
  },
  image: {
    width: 154,
    height: 120,
    marginBottom: 10,
    borderRadius: 5,
  },
  topContainer: {
    height: 50,
    marginTop: 50,
    marginBottom: 30,
    flexDirection: "row",
    alignItems: "center",
  },
  backContainer: {
    flex: 1,
    width: 50,
  },
  backIcon: {
    height: 25,
    width: 25,
  },
});

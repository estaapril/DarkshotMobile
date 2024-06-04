import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    marginHorizontal: -20,
    height: 600,
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  image: {
    height: 250,
    marginBottom: 10,
    width: "100%",
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
    tintColor: "white",
  },
});

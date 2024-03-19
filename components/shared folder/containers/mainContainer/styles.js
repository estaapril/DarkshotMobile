import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
    paddingTop: 60,
  },
  logo: {
    width: 250,
    height: 45,
    objectFit: "contain",
  },
});

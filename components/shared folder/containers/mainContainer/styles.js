import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
  },
  centered: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 30,
  },
  logoContainerFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    height: 45,
    objectFit: "contain",
  },
});

import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    padding: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  body: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingStart: 55,
    paddingEnd: 15,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  image: {
    height: 45,
    width: 45,
    borderRadius: 20,
  },
  button: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 25,
  },
  btnText: {
    fontSize: 12,
    textAlignVertical: "center",
  },
  name: {
    fontFamily: "Inter-Bold",
    fontSize: 15,
    marginBottom: -2,
  },
  position: {
    fontFamily: "Inter-Regular",
    fontSize: 14,
    textTransform: "capitalize",
  },
  message: {
    fontFamily: "Inter-Regular",
    fontSize: 13.5,
  },
  duration: {
    color: "#212599",
    alignSelf: "center",
    fontSize: 9,
    marginLeft: 8,
    marginBottom: -2,
  },
});

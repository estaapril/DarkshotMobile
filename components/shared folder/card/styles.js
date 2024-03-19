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
    paddingStart: 50,
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
    fontSize: 10,
    textAlignVertical: "center",
  },
  name: {
    marginBottom: -5,
  },
  position: {},
  duration: {
    color: "#212599",
    alignSelf: "center",
    fontSize: 9,
    marginLeft: 8,
  },
});

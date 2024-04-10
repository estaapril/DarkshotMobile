import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    display: "flex",
    marginTop: 40,
  },
  logoContainer: {
    alignSelf: "center",
    marginRight: 5,
    left: -10,
    justifyContent: "flex-start",
  },
  logo: {
    height: 70,
    width: 70,
    resizeMode: "contain",
  },
  container: {
    display: "flex",
    marginLeft: 35,
  },
  messageContainer: {
    display: "flex",
    marginVertical: 10,
  },
  headerContainer: {
    display: "flex",
    marginVertical: 10,
  },
  header: {
    fontSize: 14,
  },
  text: {
    fontSize: 13,
  },
  inviteContainer: {
    marginVertical: 10,
  },
  noteContainer: {
    display: "flex",
    marginVertical: 10,
    marginBottom: 20,
  },
  clickContainer: {
    display: "flex",
    marginVertical: 10,
    paddingLeft: 10,
  },
  btnContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginVertical: 5,
  },
  btncolumn: {
    flexDirection: "row",
    columnGap: 10,
  },
  buttonStyles: {
    paddingVertical: 6,
    paddingHorizontal: 10,
    fontSize: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    color: "black",
  },
  btnSubmitContainer: {
    display: "flex",
    position: "absolute",
    bottom: -90,
    right: 30,
  },
  btnSubmit: {
    fontSize: 15,
    color: "#4B77E8",
  },
  actionContainer: {
    flexDirection: "row",
    columnGap: 10,
    display: "flex",
  },
});

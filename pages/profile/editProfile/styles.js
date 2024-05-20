import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  placeholder: {
    fontSize: 13,
  },
  applicantMain: {
    width: "auto",
    height: 120,
    display: "flex",
    marginBottom: 40,
    borderWidth: 1,
    flex: 1,
    borderColor: "blue",
  },
  imageProfile: {
    resizeMode: "cover",
    borderRadius: 50,
    width: 100,
    height: 100,
    alignSelf: "center",
    display: "flex",
    marginBottom: 6,
  },
  applicantdetails: {
    display: "flex",
  },
  applicantName: {
    fontSize: 19,
    textTransform: "capitalize",
    top: 3,
  },
  applicantRole: {
    fontSize: 14,
    textTransform: "uppercase",
  },
  applicantContacts: {
    fontSize: 14,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
  },
  skillsList: {
    backgroundColor: "#EDEDED",
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  // text: {
  //   textTransform: "uppercase",
  //   color: "#606060",
  //   fontSize: 15,
  // },
  filesContainer: {
    display: "flex",
    paddingBottom: 150,
  },
  fileText: {
    fontSize: 17,
    textTransform: "uppercase",
  },
  choosefileContainer: {
    borderBottomWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    columnGap: 12,
    borderRightWidth: 0,
    borderTopWidth: 0,
    marginVertical: 5,
    marginBottom: 15,
    display: "flex",
  },
  downloadBtn: {
    paddingHorizontal: 15,
    height: 32,
    backgroundColor: "black",
    justifyContent: "center",
  },
  viewPortfolio: {
    position: "absolute",
    top: 30,
    paddingHorizontal: 35,
    height: 45,
    backgroundColor: "black",
    justifyContent: "center",
  },
  btnStyle: {
    fontSize: 15,
    color: "white",
  },
  fileNamePlaceholder: {
    marginTop: 6,
  },
  imageStyle: {
    resizeMode: "contain",
    borderRadius: 5,
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    display: "flex",
    marginTop: 100,
  },
  buttonContainer: {
    top: 40,
    height: 90,
  },
  buttonStyle: {
    color: "white",
    fontSize: 18,
    textTransform: "uppercase",
    marginBottom: 30,
    paddingTop: 10,
    paddingLeft: 20,
    paddingBottom: 10,
    alignSelf: "center",
    backgroundColor: "black",
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
    position: "relative",
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingTop: 20,
    backgroundColor: "white",
  },
  overlayText: {
    position: "absolute",
    top: -10,
    left: 10,
    paddingHorizontal: 5,
    fontSize: 12,
  },
  textContainer: {
    backgroundColor: "lightblue", //temporary
    padding: 5,
    borderWidth: 1,
  },
});

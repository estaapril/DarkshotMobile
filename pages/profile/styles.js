import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  placeholder: {
    fontSize: 13,
  },
  applicantMain: {
    width: "auto",
    flexDirection: "row",
    columnGap: 15,
    display: "flex",
    marginBottom: 30,
  },
  imageProfile: {
    resizeMode: "cover",
    borderRadius: 5,
    width: 100,
    height: 105,
    flex: 1,
    display: "flex",
  },
  applicantdetails: {
    flex: 2,
    display: "flex",
  },
  applicantName: {
    fontSize: 17,
    textTransform: "capitalize",
    top: 4,
  },
  applicantRole: {
    fontSize: 14,
    textTransform: "capitalize",
  },
  applicantContacts: {
    fontSize: 14,
    top: 15,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    display: "flex",
    marginBottom: 30,
  },
  skillsList: {
    backgroundColor: "#F8F9FA",
    borderRadius: 20,
    marginHorizontal: 5,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  text: {
    textTransform: "uppercase",
    color: "#606060",
    fontSize: 15,
  },
  filesContainer: {
    display: "flex",
  },
  fileText: {
    fontSize: 13,
    textTransform: "uppercase",
  },
  choosefileContainer: {
    borderWidth: 1,
    borderColor: "black",
    flexDirection: "row",
    columnGap: 12,
    borderRightWidth: 0,
    borderTopWidth: 0,
    marginVertical: 5,
    marginBottom: 15,
    flex: 1,
    display: "flex",
  },
  fileInputButton: {
    paddingHorizontal: 10,
    height: 30,
    backgroundColor: "black",
    alignItems: "center",
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
    width: 350,
    height: 180,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    display: "flex",
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
    marginLeft: 220,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    alignSelf: "center",
    backgroundColor: "black",
  },
});

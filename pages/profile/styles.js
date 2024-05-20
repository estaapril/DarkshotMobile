import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  placeholder: {
    fontSize: 13,
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
  text: {
    textTransform: "uppercase",
    color: "#606060",
    fontSize: 15,
  },
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
  btnStyle: {
    fontSize: 15,
    color: "white",
  },
  fileNamePlaceholder: {
    marginTop: 6,
  },
  container: {
    flex: 2,
    justifyContent: "center",
    marginBottom: 50,
    top: -100,
    width: 110,
    flexDirection: "column",
    rowGap: 20,
  },
  logoutContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderWidth: 2,
  },
  image: {
    flex: 1,
    width: 20,
    height: 20,
    position: "absolute",
    // alignContent: "flex-start",
    // alignItems: "flex-start",
    // alignSelf: "flex-start",
    // top: -20,
    // left: 10,
    tintColor: "white",
  },
});

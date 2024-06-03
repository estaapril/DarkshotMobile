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
    fontSize: 15,
    color: "#18191A",
  },
  choosefileContainer: {
    // borderBottomWidth: 2,
    borderColor: "black",
    flexDirection: "row",
    columnGap: 12,
    borderWidth: 1,
    // borderRightWidth: 0,
    // borderTopWidth: 0,
    display: "flex",
    flex: 3,
    width: 320,
  },
  downloadBtn: {
    flex: 1,
    height: 32,
    flexDirection: "row",
    backgroundColor: "black",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#DDDDDD",
  },
  btnStyle: {
    fontSize: 15,
    color: "#343536",
    flexDirection: "row",
    columnGap: 10,
    paddingHorizontal: 10,
  },
  fileNamePlaceholder: {
    marginTop: 6,
    flex: 2,
    display: "flex",
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
    tintColor: "white",
  },

  imageContainer: {
    display: "flex",
  },
  imageStyle: {
    borderRadius: 50,
    height: 80,
    width: 80,
  },
  mainContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    rowGap: 20,
    marginBottom: 30,
  },
  inputContainer: {
    marginVertical: 5,
  },
  title: {
    fontSize: 12,
    textTransform: "capitalize",
  },
  inputField: {
    height: 30,
    borderBottomColor: "white",
    borderBottomWidth: 1,
  },
  container: {
    display: "flex",
    flex: 1,
    borderWidth: 1,
    borderColor: "black",
    height: 53,
    backgroundColor: "#EAEAEA",
    borderTopWidth: 0,
    borderLeftWidth: 0,
    borderRightWidth: 0,
  },
  form: {
    fontFamily: "Montserrat-Regular",
    fontSize: 12,
    color: " #18191A",
  },
  details: {
    fontFamily: "Montserrat-Regular",
    fontSize: 15,
    color: "#343536",
    padding: 10,
  },
  downloadIcon: {
    tintColor: "#343536",
    height: 20,
    width: 20,
  },
  designContainer: {
    flexDirection: "row",
    columnGap: 30,
    alignItems: "center",
    flex: 3,
    display: "flex",
    marginVertical: 18,
    justifyContent: "center",
  },
  uploadContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#18191A",
    height: 100,
    flex: 2,
    borderStyle: "dashed",
    flexDirection: "row",
    columnGap: 8,
    justifyContent: "center",
  },
  uploadText: {
    fontFamily: "Poppins-Regular",
    color: "#18191A",
    fontSize: 15,
    alignSelf: "center",
  },
  icon: {
    tintColor: "#DDDDDD",
    height: 20,
    width: 20,
    alignSelf: "center",
  },
});

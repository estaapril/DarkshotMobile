import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  placeholder: {
    fontSize: 15,
    paddingHorizontal: 10,
    padding: 10,
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
  fileText: {
    fontSize: 15,
    color: "#18191A",
    marginBottom: 20,
  },
  choosefileContainer: {
    borderColor: "black",
    flexDirection: "row",
    borderWidth: 2,
    display: "flex",
    width: "100%",
    backgroundColor: "#EAEAEA",
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    marginBottom: 30,
  },
  downloadBtn: {
    flexDirection: "row",
    backgroundColor: "black",
    borderRadius: 10,
    padding: 10,
    backgroundColor: "#18191A",
  },
  btnStyle: {
    color: "#DDDDDD",
    paddingHorizontal: 5,
    fontSize: 15,
  },
  fileNamePlaceholder: {
    display: "flex",
    flex: 1,
    width: 30,
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
    position: "absolute",
    tintColor: "white",
  },
  imageContainer: {
    display: "flex",
    marginTop: 15,
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
    tintColor: "#DDDDDD",
    height: 20,
    width: 18,
  },
  uploadContainer: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#18191A",
    height: 100,
    borderStyle: "dashed",
    columnGap: 8,
    justifyContent: "center",
    marginBottom: 50,
  },
  uploadText: {
    fontFamily: "Poppins-Regular",
    color: "#18191A",
    fontSize: 15,
    alignSelf: "center",
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
  },
  editContainer: {
    backgroundColor: "#E2E2E2",
    height: 50,
    width: 50,
    borderRadius: 25,
    padding: 10,
  },
  editIcon: {
    height: 25,
    width: 25,
    alignSelf: "flex-end",
  },
});

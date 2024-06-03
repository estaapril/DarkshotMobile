import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  filesContainer: {
    display: "flex",
  },
  fileText: {
    // fontSize: 13,
    // textTransform: "uppercase",
    color: "white",
  },
  placeholder: {
    fontSize: 13,
    color: "#333333",
  },
  choosefileContainer: {
    flex: 2,
    flexDirection: "row",
    borderBottomWidth: 2,
    // borderColor: "#DDDDDD",
    // columnGap: 12,
    borderRightWidth: 0,
    borderTopWidth: 0,
    marginVertical: 5,
    // marginBottom: 15,
    display: "flex",
    borderLeftWidth: 0,
  },
  // inputField: {
  //   height: 30,
  //   borderBottomColor: "white",
  //   borderBottomWidth: 1,
  // },
  fileInputButton: {
    // flex: 2,
    flexDirection: "row",
    columnGap: 10,
    paddingHorizontal: 10,
    // paddingVertical: 20,
    // paddingHorizontal: 50,
    // height: 50,

    backgroundColor: "#333333",
    alignItems: "center",
    // justifyContent: "center",
  },
  btnStyle: {
    fontSize: 15,
    color: "white",
  },
  fileNamePlaceholder: {
    // marginTop: 6,
    // flex: 1,
  },
  previewText: {
    fontSize: 15,
    color: "white",
    textTransform: "uppercase",
    fontSize: 17,
  },
  imageContainer: {
    top: 20,
    flexDirection: "row",
    columnGap: 15,
    marginBottom: 30,
  },
  image: {
    objectFit: "cover",
    height: 80,
    width: 120,
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
  design: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    display: "flex",
  },
  uploadIcon: {
    tintColor: "white",
    height: 20,
    width: 20,
  },
  inputContainer: {
    marginTop: 8,
  },
  inputStyle: {
    color: "white",
    width: "100%",
    height: 40,
    padding: 10,
    fontSize: 18,
    borderWidth: 1,
    borderBottomColor: "#DDDDDD",
    paddingRight: 45,
    marginBottom: 8,
  },
});

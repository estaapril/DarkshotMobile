import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  filesContainer: {
    display: "flex",
  },
  fileText: {
    fontSize: 13,
    textTransform: "uppercase",
    color: "white",
  },
  placeholder: {
    fontSize: 13,
    color: "#333333",
  },
  choosefileContainer: {
    borderWidth: 1,
    borderColor: "#333333",
    flexDirection: "row",
    columnGap: 12,
    borderRightWidth: 0,
    borderTopWidth: 0,
    marginVertical: 5,
    marginBottom: 15,
    display: "flex",
    borderLeftWidth: 0,
  },
  fileInputButton: {
    paddingHorizontal: 10,
    height: 30,
    backgroundColor: "#333333",
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
    marginBottom: 50,
  },
  image: {
    objectFit: "cover",
    height: 100,
    width: 140,
  },
});

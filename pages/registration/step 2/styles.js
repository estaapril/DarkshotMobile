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
    flex: 1,
    display: "flex",
    borderLeftWidth: 0,
  },
  fileInputButton: {
    paddingHorizontal: 10,
    height: 30,
    backgroundColor: "#333333",
    alignItems: "center",
    justifyContent: "center",
    Bottom: 20,
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
    height: 100,
    width: 140,
  },
  submitButton: {
    position: "absolute",
    right: 40,
    marginBottom: 50,
    top: 800,
    backgroundColor: "#fff",
  },
  proceedButton: {
    flex: 1,
    backgroundColor: "#444",
    paddingHorizontal: "1rem",
    paddingVertical: ".5rem",
  },
  proceedButtonText: {
    textTransform: "uppercase",
    color: "white",
    fontSize: 15,
  },
  backButton: {
    fontSize: 12,
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  backContainer: {
    position: "absolute",
    bottom: -227,
    alignSelf: "center",
    left: 125,
    backgroundColor: "black",
  },
});

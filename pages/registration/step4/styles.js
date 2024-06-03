import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  fileText: {
    color: "white",
    textTransform: "capitalize",
  },
  uploadContainer: {
    borderWidth: 1,
    borderColor: "white",
    height: 100,
    flex: 2,
    borderStyle: "dashed",
    flexDirection: "row",
    columnGap: 8,
    justifyContent: "center",
    marginBottom: 35,
  },
  uploadText: {
    fontFamily: "Poppins-Regular",
    color: "white",
    fontSize: 15,
    alignSelf: "center",
  },
  uploadIcon: {
    tintColor: "#DDDDDD",
    height: 20,
    width: 20,
    alignSelf: "center",
  },
  uploadedFile: {
    flexDirection: "row",
    height: 80,
    borderRadius: 15,
    backgroundColor: "#2E2E2F",
    paddingHorizontal: 30,
    marginBottom: 20,
  },
  imageContainer: {
    flexDirection: "row",
    columnGap: 20,
    width: 180,

    alignSelf: "center",
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 10,
  },
  text: {
    color: "white",
    alignSelf: "center",
  },
  trashContainer: {
    backgroundColor: "#A5A5A5",
    height: 40,
    width: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    marginLeft: 40,
  },
  trashIcon: {
    tintColor: "#343536",
    height: 20,
    width: 20,
    alignSelf: "center",
  },
});

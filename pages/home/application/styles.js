import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  description: {
    fontSize: 14,
  },
  header: {
    fontSize: 20,
    color: "#000",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
  title: {
    fontSize: 15,
  },

  dropdownIcon: {
    fontSize: 20,
    marginLeft: 5,
  },
  dropdownHeader: {
    flexDirection: "row",
    columnGap: 20,
  },

  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBackdrop: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    fontSize: 16,
    marginBottom: 5,
  },
  dropdownHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  centeredView: {
    flex: 1,
  },
  modalView: {
    paddingVertical: 50,
    paddingHorizontal: 25,
    backgroundColor: "white",
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginTop: 200,
  },
  button: {
    marginTop: 50,
    paddingVertical: 8,
    elevation: 2,
    alignSelf: "flex-end",
  },
  buttonOpen: {
    alignSelf: "flex-start",
  },
  buttonApply: {
    backgroundColor: "black",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
});

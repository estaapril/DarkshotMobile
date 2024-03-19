import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Buttons = ({ children, onPress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <Text style={styles.btnText}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Buttons;

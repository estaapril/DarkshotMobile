import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import useTheme from "../../../hook/useTheme";
import { global } from "../../../styles/global";

const NotificationCard = ({
  isDark,
  name,
  nameStyle,
  position,
  positionStyle,
  message,
  link,
}) => {
  const { theme } = useTheme(isDark);
  const fs = global.customFonts;

  return (
    <View style={[styles.card, theme.borderColor]}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../../../assets/icon.png")}
        />
        <View>
          <Text style={[theme.txtColor, styles.name, fs.poppins]}>{name}</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={[theme.txtColor, styles.position, fs.poppins]}>
              {position}
            </Text>
            <Text style={[styles.duration, theme.txtColorTertiary, fs.poppins]}>
              1hr ago
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <Text style={[theme.txtColor, fs.poppins]} numberOfLines={3}>
          {message}
        </Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={[styles.button, theme.secondaryBgColor]}>
          <Text style={[theme.secondaryTxtColor, styles.btnText]}>
            View message
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotificationCard;

import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import { global } from "../../../styles/global";
import { useTheme } from "@react-navigation/native";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import { mainNotif } from "../../../constants/Constants";
import MainTabNavigator from "../../home/mainTab/MainTabNavigator";

const Message = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  return (
    <MainContainer isDark={isDark} scrollable={false}>
      <SectionContainer header={"notifications"}>
        <View style={styles.mainContainer}>
          <Text style={[styles.header, fs.poppinsBold]}>
            {mainNotif.greetings} {"\n"}
          </Text>
          <Text style={fs.poppins}>
            {mainNotif.message}
            {"\n"}
          </Text>

          <View style={styles.inlineTextContainer}>
            <Text style={fs.poppinsBold}>
              {mainNotif.id}
              {"\n"}
            </Text>
            <Text style={fs.poppins}>
              {mainNotif.idDetail}
              {"\n"}
            </Text>
          </View>

          <View style={styles.inlineTextContainer}>
            <Text style={fs.poppinsBold}>
              {mainNotif.pin} {"\n"}
            </Text>
            <Text style={fs.poppins}>
              {mainNotif.pinDetail} {"\n"}
            </Text>
          </View>

          <View style={styles.inlineTextContainer}>
            <Text style={fs.poppinsBold}>
              {mainNotif.link} {"\n"}
            </Text>
            <Text style={fs.poppins}>
              {mainNotif.linkDetail} {"\n"}
            </Text>
          </View>
        </View>

        <Text style={fs.poppinsBold}>Note: </Text>
        <Text style={fs.poppins}>
          Please be ready 10 minutes before {"\n"}the scheduled time.
        </Text>

        <View style={styles.btnContainer}>
          <TouchableOpacity style={styles.buttonStyles}>
            <Text style={fs.inter}>Not available</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.buttonStyles, { backgroundColor: "black" }]}
          >
            <Text style={[styles.buttonText, fs.inter, { color: "white" }]}>
              Available
            </Text>
          </TouchableOpacity>
        </View>
      </SectionContainer>
    </MainContainer>
  );
};

export default Message;

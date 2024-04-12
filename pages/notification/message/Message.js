import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import { global } from "../../../styles/global";
import { useTheme } from "@react-navigation/native";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import { mainNotif } from "../../../data/Data";
import MainTabNavigator from "../../home/mainTab/MainTabNavigator";

const Message = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  return (
    <MainContainer isDark={isDark} scrollable={false}>
      <SectionContainer header={"invitation"}>
        <View style={styles.mainContainer}>
          <Text style={[styles.header, fs.poppinsBold]}>
            {mainNotif.greetings} {"\n"}
          </Text>
          <Text style={fs.poppins}>
            {mainNotif.message}
            {"\n"}
          </Text>
          <View>
            <Text style={fs.poppins}>{mainNotif.id}</Text>
            <Text style={fs.poppins}>{mainNotif.pin}</Text>

            <Text style={fs.poppins}>
              {mainNotif.link} {"\n"}
            </Text>
          </View>

          <Text style={fs.poppins}>
            Note: Please be ready 10 minutes before the scheduled time. {"\n"}
          </Text>

          <Text style={[styles.buttonText, fs.inter]}>
            {"\n"}
            Click on your response to this email
          </Text>
        </View>

        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={[styles.buttonStyles, { backgroundColor: "black" }]}
          >
            <Text style={[styles.buttonText, fs.inter, { color: "white" }]}>
              Yes, I'm available
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonStyles}>
            <Text style={fs.inter}>No, I'm not available</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.btnSubmitContainer}>
          <TouchableOpacity>
            <Text style={[styles.btnSubmit, fs.interBold]}>
              {"Submit response"}
            </Text>
          </TouchableOpacity>
        </View>
      </SectionContainer>
    </MainContainer>
  );
};

export default Message;

import { View, Image, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import logo from "../../../assets/images/darkshotLogo.png";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import { global } from "../../../styles/global";
import { useTheme } from "@react-navigation/native";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";

const Message = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const header = "message";
  const greetings = "Good Day! This is Trizzia from Darkshot.";
  const message =
    "Your application has been shortlisted for this position. Here are the details of your interview. September 30, 2023, between 3:00 p.m and 6:00 p.m. MNL time.";
  const id = "Zoom id: 23mxcknx";
  const pin = "Zoom pin: 124232";
  const link = "Zoom link: https://zoom.us";
  const note = "Note: Please be ready 10 minutes before the scheduled time.";
  const click = "Click on your response to this email";
  const buttonYes = "Yes, I am available";
  const buttonNo = "No, I am not available";
  const buttonSubmit = "submit response";

  return (
    <MainContainer isDark={isDark}>
      <SectionContainer header={header}>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo}></Image>
          </View>

          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={[styles.header, fs.poppinsBold]}>{greetings}</Text>
            </View>
            <View style={styles.messageContainer}>
              <Text style={[styles.text, fs.poppins]}>{message}</Text>
            </View>
            <View style={styles.inviteContainer}>
              <Text style={[styles.text, fs.poppins]}>{id}</Text>
              <Text style={[styles.text, fs.poppins]}>{pin}</Text>
              <Text style={[styles.text, fs.poppins]}>{link}</Text>
            </View>

            <View style={styles.noteContainer}>
              <Text style={[styles.text, fs.poppins]}>{note}</Text>
            </View>
          </View>
        </View>

        <View style={styles.clickContainer}>
          <Text style={[styles.text, fs.poppins]}>{click}</Text>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btncolumn}>
            <TouchableOpacity style={styles.buttonStyles}>
              <Text>{buttonYes}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyles}>
              <Text>{buttonNo}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.btnSubmitContainer}>
          <TouchableOpacity>
            <Text style={styles.btnSubmit}>{buttonSubmit}</Text>
          </TouchableOpacity>
        </View>
      </SectionContainer>
    </MainContainer>
  );
};

export default Message;

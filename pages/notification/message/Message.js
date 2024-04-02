import { View, Image, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import logo from "../../../assets/images/darkshotLogo.png";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import { global } from "../../../styles/global";
import { useTheme } from "@react-navigation/native";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import { mainNotif } from "../../../data/Data";

const Message = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  return (
    <MainContainer isDark={isDark} scrollable={false}>
      <SectionContainer header={"notification"}>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image source={logo} style={styles.logo}></Image>
          </View>

          <View style={styles.container}>
            <View style={styles.headerContainer}>
              <Text style={[styles.header, fs.poppinsBold]}>
                {mainNotif.greetings}
              </Text>
            </View>
            <View style={styles.messageContainer}>
              <Text style={[styles.text, fs.poppins]}>{mainNotif.message}</Text>
            </View>
            <View style={styles.inviteContainer}>
              <Text style={[styles.text, fs.poppins]}>{mainNotif.id}</Text>
              <Text style={[styles.text, fs.poppins]}>{mainNotif.pin}</Text>
              <Text style={[styles.text, fs.poppins]}>{mainNotif.link}</Text>
            </View>

            <View style={styles.noteContainer}>
              <Text style={[styles.text, fs.poppins]}>{mainNotif.note}</Text>
            </View>
          </View>
        </View>

        <View style={styles.clickContainer}>
          <Text style={[styles.text, fs.inter]}>{mainNotif.click}</Text>
        </View>

        <View style={styles.btnContainer}>
          <View style={styles.btncolumn}>
            <TouchableOpacity style={styles.buttonStyles}>
              <Text style={fs.inter}>{mainNotif.buttonYes}</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.buttonStyles}>
              <Text style={fs.inter}>{mainNotif.buttonNo}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.btnSubmitContainer}>
          <TouchableOpacity>
            <Text style={[styles.btnSubmit, fs.interBold]}>
              {"submit response"}
            </Text>
          </TouchableOpacity>
        </View>
      </SectionContainer>
    </MainContainer>
  );
};

export default Message;

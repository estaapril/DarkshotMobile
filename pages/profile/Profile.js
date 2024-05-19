import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import { styles } from "../profile/styles";
import emptyImage from "../../assets/images/emptyImage.png";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import useTheme from "../../hook/useTheme";
import { global } from "../../styles/global";
import SectionContainer from "../../components/shared folder/containers/sectionContainer/SectionContainer";
import { skills } from "../../data/Data";

import useAuthToken from "../../hook/useAuthToken"; // Import the useAuthToken hook
import useFetchCurrentUser from "../../hook/useFetchCurrentUser";

const Profile = ({ navigation, route }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFile2, setSelectedFile2] = useState(null);
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);
  const { removeToken } = useAuthToken();
  const { user, isLoading } = useFetchCurrentUser();
  const handleLogout = () => {
    removeToken("token");
    navigation.navigate("Login");
  };
  const loadingState = isLoading ? "Loading ..." : user;
  return (
    <MainContainer isDark={isDark}>
      <SectionContainer header={"profile"}></SectionContainer>
      <View style={styles.applicantMain}>
        <Image source={emptyImage} style={styles.imageProfile}></Image>
        <View
          style={[
            styles.applicantdetails,
            isLoading && {
              justifyContent: "center",
              alignItems: "center",
            },
          ]}>
          {isLoading ? (
            <Text>Loading ...</Text>
          ) : (
            <>
              <Text style={[styles.applicantName, fs.poppinsBold]}>
                {user ? user?.fullName : "No user"}
              </Text>
              <Text style={[styles.applicantRole, fs.poppins]}>
                {user?.position == 1
                  ? "Admin"
                  : user?.position == 2
                  ? "Client"
                  : user?.position == 3
                  ? "Applicant"
                  : "No user"}
              </Text>
              <Text style={[styles.applicantContacts, fs.poppins]}>
                {user ? user?.email : "No user"}
              </Text>
              <Text style={[styles.applicantContacts, fs.poppins]}>
                {user ? user?.contact : "No user"}
              </Text>
            </>
          )}
        </View>
      </View>

      <SectionContainer header={"skills"}>
        <View style={styles.skillsContainer}>
          {skills
            .filter((category) => category.id === 1)
            .flatMap((category) => category.list)
            .map((skill, index) => (
              <TouchableOpacity key={index} style={styles.skillsList}>
                <Text style={[styles.text, fs.agdasimaBold]}>{skill.name}</Text>
              </TouchableOpacity>
            ))}
        </View>
      </SectionContainer>

      <SectionContainer header={"uploaded files"}></SectionContainer>

      <View style={styles.filesContainer}>
        <Text style={[styles.fileText, fs.poppins]}>{"resume"}</Text>
        <View style={styles.choosefileContainer}>
          <TouchableOpacity style={styles.fileInputButton}>
            <Text style={[styles.btnStyle, fs.poppins]}>{"choose file"}</Text>
          </TouchableOpacity>
          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile ? selectedFile.name : "my_resume_lastname.docx"}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.filesContainer}>
        <Text style={[styles.fileText, fs.poppins]}>
          {"upload your previous works here"}
        </Text>
        <View style={styles.choosefileContainer}>
          <TouchableOpacity style={styles.fileInputButton}>
            <Text style={[styles.btnStyle, fs.poppins]}>{"choose file"}</Text>
          </TouchableOpacity>
          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile ? selectedFile.name : "portfolio_1.jpg"}
            </Text>
          </View>
        </View>
        <View style={styles.imageContainer}>
          <Image source={emptyImage} style={styles.imageStyle}></Image>
        </View>
      </View>
      <TouchableOpacity onPress={handleLogout}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </MainContainer>
  );
};

export default Profile;

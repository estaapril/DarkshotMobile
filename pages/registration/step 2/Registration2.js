import React, { useState } from "react";
import { View, Image, Button, Text, TouchableOpacity } from "react-native";
import { styles } from "../step 2/styles";
import brand3 from "../../../assets/images/emptyImage.png";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import { darkMode, global, lightMode } from "../../../styles/global";
import useTheme from "../../../hook/useTheme";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import {
  files,
  portfolio,
  regResume,
  regUpload,
  preview,
  insert,
  submit,
  regButtons,
  back,
} from "../../../data/Data";

const Registration2 = ({ navigation }) => {
  const [link, setLink] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFilePick = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
      setSelectedFile(res);
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("");
      } else {
        console.log(err);
      }
    }
  };
  const handleFilePick2 = async () => {
    try {
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
      });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
        console.log("");
      } else {
        console.log("");
      }
    }
  };

  const handleStep1 = () => navigation.navigate("Registration1");
  const handleStep2 = () => navigation.navigate("Registration2");
  const handleSubmit = () => navigation.navigate("");
  const backButton = () => navigation.navigate("");

  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const onChangeLink = (newLink) => {
    setLink(newLink);
  };
  return (
    <MainContainer isDark={isDark}>
      <SectionContainer isDark={isDark} header={files}></SectionContainer>
      <View style={styles.filesContainer}>
        <Text style={[styles.fileText, fs.poppins]}>{regResume}</Text>
        <View style={styles.choosefileContainer}>
          <TouchableOpacity
            style={styles.fileInputButton}
            onPress={handleFilePick}
          >
            <Text style={[styles.btnStyle, fs.poppins]}>{regButtons}</Text>
          </TouchableOpacity>
          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile ? selectedFile.name : "my_resume_lastname.pdf"}
            </Text>
          </View>
        </View>
      </View>

      <SectionContainer isDark={isDark} header={portfolio}></SectionContainer>

      <View style={styles.filesContainer}>
        <Text style={[styles.fileText, fs.poppins]}>{regUpload}</Text>
        <View style={styles.choosefileContainer}>
          <TouchableOpacity
            style={styles.fileInputButton}
            onPress={handleFilePick}
          >
            <Text style={[styles.btnStyle, fs.poppins]}>{regButtons}</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={[styles.previewText, fs.poppins]}>{preview}</Text>
      <View style={styles.imageContainer}>
        <Image source={brand3} style={styles.image} />
        <Image source={brand3} style={styles.image} />
      </View>

      <View style={styles.filesContainer}>
        <Text style={[styles.fileText, fs.poppins]}>{insert}</Text>
        <View style={styles.choosefileContainer}>
          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile
                ? selectedFile.name
                : "https://drive.google.com/drive/folders/11gD ..."}
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.submitButton}>
        <TouchableOpacity onPress={handleSubmit}>
          <View style={styles.proceedButton}>
            <Text style={styles.proceedButtonText}>{submit}</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.backButton}>
        <TouchableOpacity onPress={backButton}>
          <View style={styles.backContainer}>
            <Text style={styles.backButton}>{back}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </MainContainer>
  );
};

export default Registration2;

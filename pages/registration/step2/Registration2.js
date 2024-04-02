import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../step2/styles";
import brand from "../../../assets/images/emptyImage.png";
import { global } from "../../../styles/global";
import useTheme from "../../../hook/useTheme";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";

const Registration2 = ({}) => {
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

  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  const onChangeLink = (newLink) => {
    setLink(newLink);
  };
  return (
    <>
      <SectionContainer isDark={isDark} header={"files"}>
        <Text style={[styles.fileText, fs.poppins]}>{"resume"}</Text>
        <View style={styles.choosefileContainer}>
          <TouchableOpacity
            style={styles.fileInputButton}
            onPress={handleFilePick}
          >
            <Text style={[styles.btnStyle, fs.poppins]}>{"choose file"}</Text>
          </TouchableOpacity>
          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile ? selectedFile.name : "my_resume_lastname.pdf"}
            </Text>
          </View>
        </View>
      </SectionContainer>
      <SectionContainer isDark={isDark} header={"portfolio"}>
        <Text style={[styles.fileText, fs.poppins]}>
          {"upload any previous works here"}
        </Text>
        <View style={styles.choosefileContainer}>
          <TouchableOpacity
            style={styles.fileInputButton}
            onPress={handleFilePick}
          >
            <Text style={[styles.btnStyle, fs.poppins]}>{"choose file"}</Text>
          </TouchableOpacity>
        </View>
        <Text style={[styles.previewText, fs.poppins]}>{"preview"}</Text>
        <View style={styles.imageContainer}>
          <Image source={brand} style={styles.image} />
          <Image source={brand} style={styles.image} />
        </View>
        <View style={styles.filesContainer}>
          <Text style={[styles.fileText, fs.poppins]}>
            {"insert link of your portfolio"}
          </Text>
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
      </SectionContainer>
    </>
  );
};

export default Registration2;

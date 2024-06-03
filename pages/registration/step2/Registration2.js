import React, { useState } from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../step2/styles";
import brand from "../../../assets/images/emptyImage.png";
import { global } from "../../../styles/global";
import useTheme from "../../../hook/useTheme";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import CustomButton from "../../../components/shared folder/buttons/CustomButton";
import upload from "../../../assets/icons/upload.png";

const Registration2 = ({}) => {
  const [link, setLink] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [username, setUsername] = useState("");
  const handleUsername = (text) => {
    return setUsername(text);
  };
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
      <SectionContainer isDark={isDark} header={"upload your resume"}>
        <Text style={[styles.fileText, fs.poppinsBold]}>{"CV / Resume"}</Text>

        <View style={styles.choosefileContainer}>
          <TouchableOpacity
            style={styles.fileInputButton}
            onPress={handleFilePick}
          >
            <Text style={[styles.btnStyle, fs.poppins]}>{"Upload"}</Text>
            <Image source={upload} style={styles.uploadIcon} />
          </TouchableOpacity>

          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile ? selectedFile.name : "file.pdf"}
            </Text>
          </View>
        </View>
      </SectionContainer>
      <View style={styles.designContainer}>
        <Text style={styles.fileText}>or</Text>
      </View>

      <Text style={[styles.fileText, fs.poppins]}>{"Shareable Link"}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputStyle}
          onChangeText={handleUsername}
          placeholder="my-email@gmail.com"
          placeholderTextColor="#DDDDDD"
        />
      </View>
      {/* <View style={styles.choosefileContainer}> */}
      {/* <TouchableOpacity
          style={styles.fileInputButton}
          onPress={handleFilePick}
        >
          <Text style={[styles.btnStyle, fs.poppins]}>{"choose file"}</Text>
        </TouchableOpacity> */}
      {/* </View> */}

      {/* <Text style={[styles.previewText, fs.poppins]}>{"preview"}</Text> */}

      {/* <View style={styles.imageContainer}>
        <Image source={brand} style={styles.image} />
        <Image source={brand} style={styles.image} />
      </View> */}

      {/* <View style={styles.designContainer}>
        <View style={styles.design}></View>
        <Text style={styles.fileText}>or</Text>
        <View style={styles.design}></View>
      </View> */}

      {/* <View style={styles.filesContainer}> */}
      {/* <Text style={[styles.fileText, fs.poppins]}>
          {"insert link of your portfolio"}
        </Text> */}

      {/* <View style={styles.choosefileContainer}>
          <View style={styles.fileNamePlaceholder}>
            <Text style={[styles.placeholder, fs.poppins]}>
              {selectedFile
                ? selectedFile.name
                : "https://drive.google.com/drive/folders/11gD ..."}
            </Text>
          </View>
        </View> */}
      {/* </View> */}
      <View
        style={{
          flex: 1,
          flexDirection: "row-reverse",
        }}
      >
        <View style={{ width: 198, marginTop: 50, flex: 1 }}>
          <CustomButton isPrimary label={"NEXT"} />
        </View>
      </View>
    </>
  );
};

export default Registration2;

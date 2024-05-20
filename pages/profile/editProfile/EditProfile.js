import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import useTheme from "../../../hook/useTheme";
import { global } from "../../../styles/global";
import SectionContainer from "../../../components/shared folder/containers/sectionContainer/SectionContainer";
import CustomButton from "../../../components/shared folder/buttons/CustomButton";
import emptyImage from "../../../assets/images/emptyImage.png";
import { TextInput } from "react-native-paper";

const Profile = () => {
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

  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  return (
    <MainContainer isDark={isDark}>
      <Image source={emptyImage} style={styles.imageProfile}></Image>

      <SectionContainer header={"edit profile"}></SectionContainer>

      <View
        style={{
          top: -10,
          flexDirection: "column",
          rowGap: 20,
          marginBottom: 30,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: -10,
            left: 15,
            zIndex: 1,
            paddingHorizontal: 10,
          }}
        >
          <Text
            style={{
              backgroundColor: "white",
              paddingHorizontal: 8,
              ...fs.poppinsSemiBold,
              fontSize: 15,
            }}
          >
            NAME
          </Text>
        </View>

        <TextInput
          style={{
            borderWidth: 2,
            backgroundColor: "white",
            borderStartStartRadius: 40,
            borderStartEndRadius: 40,
            borderRadius: 40,
          }}
          placeholder="Alfredo John Lera III"
          placeholderTextColor="gray"
        />

        <View>
          <View
            style={{
              position: "absolute",
              top: -10,
              left: 15,
              zIndex: 1,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                backgroundColor: "white",
                paddingHorizontal: 8,
                ...fs.poppinsSemiBold,
                fontSize: 15,
              }}
            >
              EMAIL ID
            </Text>
          </View>

          <TextInput
            style={{
              borderWidth: 2,
              backgroundColor: "white",
              borderStartStartRadius: 40,
              borderStartEndRadius: 40,
              borderRadius: 40,
            }}
            placeholder="leraajr@gmail.com"
            placeholderTextColor="gray"
          />
        </View>

        <View>
          <View
            style={{
              position: "absolute",
              top: -10,
              left: 15,
              zIndex: 1,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                backgroundColor: "white",
                paddingHorizontal: 8,
                ...fs.poppinsSemiBold,
                fontSize: 15,
              }}
            >
              PHONE
            </Text>
          </View>

          <TextInput
            style={{
              borderWidth: 2,
              backgroundColor: "white",
              borderStartStartRadius: 40,
              borderStartEndRadius: 40,
              borderRadius: 40,
            }}
            placeholder="09456853215"
            placeholderTextColor="gray"
          />
        </View>

        <View>
          <View
            style={{
              position: "absolute",
              top: -10,
              left: 15,
              zIndex: 1,
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                backgroundColor: "white",
                paddingHorizontal: 8,
                ...fs.poppinsSemiBold,
                fontSize: 15,
              }}
            >
              PASSWORD
            </Text>
          </View>

          <TextInput
            style={{
              borderWidth: 2,
              backgroundColor: "white",
              borderStartStartRadius: 40,
              borderStartEndRadius: 40,
              borderRadius: 40,
            }}
            placeholder="●●●●●●●●●"
            placeholderTextColor="gray"
          />
        </View>
      </View>

      <SectionContainer header={"skills"}></SectionContainer>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
        }}
      >
        <View style={{ width: 190, top: -20 }}>
          <CustomButton isSecondary label={"EDIT SKILLS"} />
        </View>
      </View>
      <SectionContainer header={"files"}></SectionContainer>
      <Text style={[styles.fileText, fs.poppins]}>{"resume"}</Text>
      <View style={styles.choosefileContainer}>
        <TouchableOpacity style={styles.downloadBtn} onPress={handleFilePick}>
          <Text style={[styles.btnStyle, fs.poppins]}>{"upload"}</Text>
        </TouchableOpacity>
        <View style={styles.fileNamePlaceholder}>
          <Text style={[styles.placeholder, fs.poppins]}>
            {selectedFile ? selectedFile.name : "my_resume.docx"}
          </Text>
        </View>
      </View>
      <View style={styles.filesContainer}>
        <Text style={[styles.fileText, fs.poppins]}>{"portfolio"}</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View style={{ width: 190, top: 8 }}>
            <CustomButton isSecondary label={"EDIT PORTFOLIO"} />
          </View>
        </View>
      </View>
    </MainContainer>
  );
};

export default Profile;

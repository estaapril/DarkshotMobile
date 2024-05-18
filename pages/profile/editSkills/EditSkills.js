import React from "react";
import { View } from "react-native";
import MainContainer from "../../../components/shared folder/containers/mainContainer/MainContainer";
import { styles } from "./styles";
import CustomButton from "../../../components/shared folder/buttons/CustomButton";
import useTheme from "../../../hook/useTheme";
import { global } from "../../../styles/global";

const EditSkills = () => {
  const isDark = true;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  return (
    <MainContainer isDark={true} hasLogo={false}>
      {/* <View style={styles.container}></View> */}
      <View
        style={{
          flex: 1,
          flexDirection: "row-reverse",
        }}
      >
        <View style={{ width: 170, top: 700, marginBottom: 50 }}>
          <CustomButton isPrimary label={"SAVE CHANGES"} />
        </View>
      </View>
    </MainContainer>
  );
};
export default EditSkills;

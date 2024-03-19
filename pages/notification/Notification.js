import React from "react";
import { styles } from "./styles";
import { header, name, position, notifmessages } from "../../data/Data";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";
import { global } from "../../styles/global";
import { useTheme } from "@react-navigation/native";
import NotificationCard from "../../components/shared folder/card/NotificationCard";
import SectionContainer from "../../components/shared folder/containers/sectionContainer/SectionContainer";

const Notification = () => {
  const isDark = false;
  const fs = global.customFonts;
  const { theme } = useTheme(isDark);

  return (
    <MainContainer isDark={isDark}>
      <SectionContainer header={header}>
        {Object.keys(notifmessages).map((key) => (
          <NotificationCard
            key={key}
            name={name}
            nameStyle={[styles.title, fs.poppinsBold]} // not working
            position={position}
            positionStyle={[styles.title, fs.poppins]} // not working
            message={notifmessages[key]}
          />
        ))}
      </SectionContainer>
    </MainContainer>
  );
};
export default Notification;

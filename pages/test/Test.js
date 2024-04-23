import React, { useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import MainContainer from "../../components/shared folder/containers/mainContainer/MainContainer";

const Test = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <MainContainer>
      <TouchableOpacity onPress={() => setToggle(!toggle)}>
        <Text>Title</Text>
      </TouchableOpacity>
      {toggle && (
        <View>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            molestias inventore soluta modi, commodi quibusdam? Enim maxime
            iusto labore, laudantium quibusdam eaque similique explicabo, dicta
            itaque tenetur magnam? Perferendis, nobis?{" "}
          </Text>
        </View>
      )}
    </MainContainer>
  );
};

export default Test;

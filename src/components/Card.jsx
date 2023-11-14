import { Text, Pressable, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
const StudentText = ({ data, navigation }) => {
  const StudentTexts = [];
  for (const name of data.values()) {
    StudentTexts.push(
      <Pressable
        key={name}
        className="w-4/5 mx-3 my-4 h-14 px-2 bg-slate-100 flex rounded-md align-middle justify-center"
        onPress={() =>
          navigation.navigate("Details", {
            name: name,
            data: data,
          })
        }
      >
        <View className="flex flex-row justify-around">
          <Text className="text-base font-base px-3">{name}</Text>
          <AntDesign name="rightcircleo" size={24} color="black" />
        </View>
      </Pressable>
    );
  }

  return StudentTexts;
};
export default StudentText;

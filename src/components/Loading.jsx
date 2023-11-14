import LottieView from "lottie-react-native";
import { useRef } from "react";
import { View } from "react-native";
export function Loading() {
  const animation = useRef(null);
  return (
    <View className="justify-items-center align-middle h-full w-full">
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: 140,
          height: 140,
          alignSelf: "center",
          justifyContent: "center",
        }}
        source={require("../../assets/loading.json")}
      />
    </View>
  );
}

import { Text, ScrollView } from "react-native";
import { Detail } from "../components/Detail";

export function DetailsScreen({ route, navigate }) {
  const { name } = route.params;
  return (
    <ScrollView className="mx-3">
      <Detail name={name} />
    </ScrollView>
  );
}

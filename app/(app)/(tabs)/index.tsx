import { useSession } from "@/context";
import { View, Text } from "react-native";

export default function HomeScreen() {
    const { session } = useSession();
    console.log(session);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home</Text>
    </View>
  );
}
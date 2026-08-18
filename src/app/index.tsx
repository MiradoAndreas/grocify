import { StyleSheet, Text, View } from "react-native";
import "../../global.css";
export default function Index() {
  return (
    <View style={styles.container}>
      <Text className="text-3xl font-bold text-black">Hello Native Wind !</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

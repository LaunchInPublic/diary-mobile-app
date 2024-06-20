import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenName } from "ScreenName";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={ScreenName.NOTE} component={NoteSceen} />
    </Navigator>
  );
}
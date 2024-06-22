import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ScreenName } from "./types/navigation.type";
import { NoteScreen } from "./screens/NoteScreen";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  // TODO Fix Navigator/Screen @react-navigation
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={ScreenName.NOTE} component={NoteScreen} />
    </Navigator>
  );
}

import { NavigationContainer } from "@react-navigation/native";
import Screens from "./Screens";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});

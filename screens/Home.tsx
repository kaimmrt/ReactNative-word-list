import React, { useState } from "react";
import { Icon, Divider } from "react-native-elements";
import {
  Text,
  FlatList,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { AppState } from "../store";
import { Word } from "../store/word/models";
import { bindActionCreators, Dispatch } from "redux";
import { connect } from "react-redux";
import { sendWord, deleteWord } from "../store/word/action";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/RootStackParamsList";

const mapStateToProps = (state: AppState) => ({
  word: state.word,
  // otherReducer: state.otherReducer,
});

// const mapDispatchToProps = (dispatch: Dispatch) =>
//   bindActionCreators({ sendWord, deleteWord }, dispatch);

type AppProps = ReturnType<typeof mapStateToProps>;
// ReturnType<typeof mapDispatchToProps>;

type homeScreenProp = StackNavigationProp<RootStackParamList, "Home">;

const Home: React.FC<AppProps> = (props: AppProps) => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Kelime Defterim</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Icon style={{ marginRight: 20 }} name="search" type="material" />
          <Icon name="menu" type="material" />
        </View>
      </View>
      <Divider style={{ marginBottom: 10 }} />
      <FlatList
        data={props.word.words}
        renderItem={({ item }) => (
          <View key={item.timestamp} style={styles.listItem}>
            <View
              style={{
                ...styles.listItemLeftDivider,
                backgroundColor: item.color,
              }}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                flex: 1,
                marginRight: 10,
              }}
            >
              <View>
                <Text style={styles.wordtTitle}>{item.word}</Text>
                <Text style={styles.subTitle}>{item.mean}</Text>
              </View>
              <Text>{item.type}</Text>
            </View>
          </View>
        )}
      />
      <TouchableOpacity
        style={{
          width: 50,
          height: 50,
          borderRadius: 25,
          backgroundColor: "blue",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "absolute",
          right: 20,
          bottom: 30,
        }}
        onPress={() => navigation.navigate("AddWord")}
      >
        <Text>Ekle</Text>
      </TouchableOpacity>
    </View>
  );
};
export default connect(mapStateToProps)(Home);

const styles = StyleSheet.create({
  listItem: {
    height: 70,
    width: "100%",
    marginBottom: 5,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  listItemLeftDivider: {
    width: "2%",
    marginRight: 20,
    height: "100%",
    backgroundColor: "#EFEFEF",
    borderRadius: 20,
  },
  wordtTitle: {
    fontWeight: "bold",
    fontSize: 18,
  },
  titleContainer: {
    width: "100%",
    marginTop: 20,
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
  },
  subTitle: {
    fontSize: 12,
  },
});

import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { Icon, Divider } from "react-native-elements";

const Home = () => {
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Kelime Defterim</Text>
        <View style={{ display: "flex", flexDirection: "row" }}>
          <Icon style={{ marginRight: 20 }} name="search" type="material" />
          <Icon name="menu" type="material" />
        </View>
      </View>
      <Divider style={{ marginBottom: 10 }} />
      <FlatList
        data={[
          { key: "Devin" },
          { key: "Dan" },
          { key: "Dominic" },
          { key: "Jackson" },
          { key: "James" },
          { key: "Joel" },
          { key: "John" },
          { key: "Jillian" },
          { key: "Jimmy" },
          { key: "Julie" },
          { key: "Mert" },
          { key: "Metin" },
          { key: "Miraç" },
          { key: "Ahmet" },
          { key: "Mehmet" },
          { key: "Yavuz" },
        ]}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <View style={styles.listItemLeftDivider} />
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
                <Text style={styles.wordtTitle}>{item.key}</Text>
                <Text style={styles.subTitle}>lorem ipsum</Text>
              </View>
              <Text>isim</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

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

export default Home;

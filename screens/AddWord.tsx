import React, { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Button, RadioButton } from "react-native-paper";
import { Picker } from "@react-native-picker/picker";
import { connect } from "react-redux";
import { AppState } from "../store";
import { bindActionCreators, Dispatch } from "redux";
import { sendWord, deleteWord } from "../store/word/action";

import { Word } from "../store/word/models";

const mapStateToProps = (state: AppState) => ({
  word: state.word,
});

const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators({ sendWord, deleteWord }, dispatch);

type AppProps = ReturnType<typeof mapStateToProps> &
  ReturnType<typeof mapDispatchToProps>;

const AddWord: React.FC<AppProps> = (props: AppProps) => {
  const initWord: Word = {
    word: "",
    mean: "",
    type: "isim",
    color: "1",
    timestamp: new Date().getTime(),
  };

  const [word, setWord] = useState<Word>(initWord);

  const submitWord = () => {
    props.sendWord(word);
    setWord(initWord);
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        style={styles.input}
        onChangeText={(e) => setWord({ ...word, word: e })}
        value={word.word}
        placeholder="Kelime"
      />
      <TextInput
        style={styles.input}
        onChangeText={(e) => setWord({ ...word, mean: e })}
        value={word.mean}
        placeholder="Anlamı"
      />
      <RadioButton.Group
        onValueChange={(e) => setWord({ ...word, color: e })}
        value={word.color}
      >
        <View style={styles.radio}>
          <RadioButton
            uncheckedColor="#D1D1D5"
            color="#D1D1D5"
            value="#D1D1D5"
          />
          <RadioButton
            uncheckedColor="#DBC970"
            color="#DBC970"
            value="#DBC970"
          />
          <RadioButton
            uncheckedColor="#E0787C"
            color="#E0787C"
            value="#E0787C"
          />
          <RadioButton
            uncheckedColor="#957DAD"
            color="#957DAD"
            value="#957DAD"
          />
          <RadioButton
            uncheckedColor="#9FD4A3"
            color="#9FD4A3"
            value="#9FD4A3"
          />
          <RadioButton
            uncheckedColor="#B1D3E3"
            color="#B1D3E3"
            value="#B1D3E3"
          />
        </View>
      </RadioButton.Group>

      <Picker
        selectedValue={word.type}
        onValueChange={(e) => setWord({ ...word, type: e })}
        style={styles.picker}
      >
        <Picker.Item label="İsim" value="isim" />
        <Picker.Item label="Fiil" value="fiil" />
        <Picker.Item label="Sıfat" value="sıfat" />
        <Picker.Item label="Zarf" value="zarf" />
        <Picker.Item label="Bağlaç" value="bağlaç" />
        <Picker.Item label="Edat" value="edat" />
      </Picker>
      <Button style={styles.button} onPress={() => submitWord()}>
        <Text style={styles.btnText}>Kaydet</Text>
      </Button>
    </View>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWord);

const styles = StyleSheet.create({
  input: {
    borderRadius: 20,
    width: "90%",
    height: 50,
    borderColor: "#80cee1",
    borderWidth: 2,
    marginLeft: "5%",
    marginTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "white",
  },
  radio: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginLeft: "5%",
    marginTop: 20,
  },
  picker: {
    borderRadius: 20,
    width: "90%",
    height: 50,
    borderColor: "#80cee1",
    borderWidth: 2,
    marginLeft: "5%",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    borderRadius: 20,
    width: "90%",
    height: 50,
    backgroundColor: "#80cee1",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "5%",
    marginTop: 30,
  },
  btnText: {
    color: "white",
    fontWeight: "bold",
  },
});

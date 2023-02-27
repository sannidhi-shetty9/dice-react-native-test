import { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Search = (props) => {
  const [input, setInput] = useState("");

  const changeInput = (val) => {
    setInput(val);
  };

  const submit = () => {
    if (input && props.onSubmit) {
      props.onSubmit(input);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5} onPress={submit}>
        <Ionicons name="search" size={25} color={"grey"} />
      </TouchableOpacity>
      <TextInput
        style={styles.input}
        cursorColor={"gray"}
        onChangeText={changeInput}
        value={input}
        placeholder={"search"}
        onSubmitEditing={submit}
      />
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => {
          changeInput("");
        }}
      >
        <Ionicons name="close" size={25} color={"grey"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "gray",
    flex: 1,
  },
  iconContainer: {
    borderWidth: 1,
    padding: 5,
  },
  input: {
    marginHorizontal: 5,
    flex: 1,
    fontSize: 18,
  },
});

export default Search;

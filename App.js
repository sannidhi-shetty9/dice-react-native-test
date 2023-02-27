import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import RepoCard from "./component/RepoCard";
import Search from "./component/Search";

export default function App() {
  const [data, setData] = useState([]);

  const getGit = async (value = "") => {
    let response = await fetch(
      `https://api.github.com/search/issues?q=${value}`
    );
    if (!response.ok) {
      return;
    }
    let res = await response.json();
    setData(res.items.slice(0, 50));
  };

  return (
    <View style={styles.container}>
      <View style={styles.dividerLine} />
      <View style={styles.searchContainer}>
        <Search onSubmit={getGit} />
      </View>
      {!data.length ? (
        <View style={[styles.container, styles.center]}>
          <Text>No Data available....</Text>
        </View>
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => {
            return <RepoCard item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
    alignItems: "center",
  },
  dividerLine: {
    width: "100%",
    borderColor: "lightgray",
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  searchContainer: {
    paddingHorizontal: 2,
    marginBottom: 10,
    width: "100%",
    maxWidth: 400,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  center: {
    justifyContent: "center",
  },
});

import { Image, StyleSheet, Text, View } from "react-native";

const RepoCard = (props) => {

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: props.item?.user?.avatar_url }}
        style={styles.image}
      />
      <Text style={styles.title}>{props.item.title}</Text>
      <View style={styles.container2}>
        <Text>Description :{props.item.description}</Text>
        <Text>Language    :{props.item.language}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    margin: 2,
    paddingHorizontal: 4,
    paddingVertical: 5,
    elevation: 1,
    borderRadius: 1,
    width: "100%",
  },
  image: {
    width: "100%",
    aspectRatio: 2.5,
    borderRadius: 5,
  },
  title: {
    fontWeight: 700,
    textDecorationLine: "underline",
  },
  container2: {
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
  },
});

export default RepoCard;

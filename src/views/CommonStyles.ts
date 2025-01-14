import { StyleSheet } from "react-native";

const commonStyles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  name: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  reviewContainer: { marginTop: 10, paddingLeft: 10 },
  reviewText: { fontSize: 14, fontStyle: "italic" },
  photoContainer: { marginTop: 5, alignItems: "center", marginRight: 5 },
  photo: { width: 200, height: 150, borderRadius: 10, marginVertical: 5 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  error: { color: "red", fontSize: 16 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
  horizontalScroll: { marginTop: 10},
  photoLikes: { marginTop: 5, fontSize: 12, textAlign: "center" },
});

export default commonStyles;

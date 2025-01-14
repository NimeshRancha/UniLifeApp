import React from "react";
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { useUserViewModel } from "../viewmodels/UserViewModel";

export default function UserScreen() {
  const { users, isLoading, error } = useUserViewModel();

  if (isLoading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{item.email}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  error: { color: "red", fontSize: 16 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
  name: { fontSize: 18, fontWeight: "bold" },
  sectionTitle: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  reviewContainer: { marginTop: 10, paddingLeft: 10 },
  reviewText: { fontSize: 14, fontStyle: "italic" },
  photoContainer: { marginTop: 5, alignItems: "center" },
  photo: { width: 200, height: 150, borderRadius: 10, marginVertical: 5 },
});

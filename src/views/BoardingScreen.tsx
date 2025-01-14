import React from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Image,
  TouchableOpacity,
} from "react-native";
import { useBoardingViewModel } from "../viewmodels/BoardingViewModel";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { StackParamList } from "../../navigationTypes";
import commonStyles from "./CommonStyles";
import { ScrollView } from "react-native-gesture-handler";

export default function BoardingScreen() {
  const { boardings, isLoading, error } = useBoardingViewModel();
  const navigation = useNavigation<NavigationProp<StackParamList>>();

  if (isLoading) {
    return (
      <View style={commonStyles.center}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={commonStyles.center}>
        <Text style={commonStyles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={boardings}
      keyExtractor={(item) => item.boarding_id.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("BoardingDetailsScreen", { boarding: item })
          }
        >
          <View style={commonStyles.item}>
            <Text style={commonStyles.name}>{item.boarding_name}</Text>
            <Text>{item.address}</Text>
            <Text>{item.location}</Text>
            <Text>{item.contact_number}</Text>
            {item.BoardingReviews.map((review) => {
              // Sort photos by likes in descending order
              const sortedPhotos = [...review.BoardingPhotos].sort(
                (a, b) => b.likes - a.likes
              );

              return (
                <View key={review.review_id} style={commonStyles.reviewContainer}>
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={commonStyles.horizontalScroll}
                  >
                  {sortedPhotos.map((photo) => (
                    <View key={photo.photo_id} style={commonStyles.photoContainer}>
                      <Image
                        source={{ uri: photo.photo_url }}
                        style={commonStyles.photo}
                      />
                      <Text>Likes: {photo.likes}</Text>
                    </View>
                  ))}
                </ScrollView>
                </View>

              );
            })}
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

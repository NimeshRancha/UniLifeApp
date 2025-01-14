import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import commonStyles from "./CommonStyles";
import { Boarding } from "../models/Boarding";

interface BoardingDetailsScreenProps {
  route: {
    params: {
      boarding: Boarding;
    };
  };
}

export default function BoardingDetailsScreen({
  route,
}: BoardingDetailsScreenProps) {
  const { boarding } = route.params;

  return (
    <View style={commonStyles.container}>
      <Text style={commonStyles.name}>{boarding.boarding_name}</Text>
      <Text>{boarding.address}</Text>
      <Text>{boarding.location}</Text>
      <Text>{boarding.contact_number}</Text>

      <Text style={commonStyles.sectionTitle}>Reviews:</Text>
      {boarding.BoardingReviews.map((review) => (
        <View key={review.review_id} style={commonStyles.reviewContainer}>
          <Text style={commonStyles.reviewText}>{review.review}</Text>
          <Text>Likes: {review.likes}</Text>

          {review.BoardingPhotos.length > 0 && (
            <>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={commonStyles.horizontalScroll}
              >
                {review.BoardingPhotos.map((photo) => (
                  <View key={photo.photo_id} style={commonStyles.photoContainer}>
                    <Image
                      source={{ uri: photo.photo_url }}
                      style={commonStyles.photo}
                    />
                    <Text style={commonStyles.photoLikes}>Likes: {photo.likes}</Text>
                  </View>
                ))}
              </ScrollView>
            </>
          )}
        </View>
      ))}
    </View>
  );
}

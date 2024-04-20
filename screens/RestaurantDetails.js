import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import About from '../components/restaurantDetail/About';
import MenuItem from '../components/restaurantDetail/MenuItem';
import {useRoute} from '@react-navigation/native';
import ViewCart from '../components/restaurantDetail/ViewCart';

const RestaurantDetails = () => {
  const route = useRoute();
  const restaurantInfo = route.params?.data;
  const data = {
    name: restaurantInfo.name,
    image: restaurantInfo.image_url,
    price: restaurantInfo.price,
    rating: restaurantInfo.rating,
    reviews: restaurantInfo.review_count,
    categories: restaurantInfo.categories,
  };
  return (
    <View>
      <ScrollView>
        <About restaurantInfo={data} />
        <MenuItem restaurantName={data.name} />
      </ScrollView>
      <ViewCart />
    </View>
  );
};

export default RestaurantDetails;

const styles = StyleSheet.create({});

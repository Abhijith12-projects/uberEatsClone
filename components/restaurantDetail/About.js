import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MenuItem from './MenuItem';

const yelpRestaurantInfo = {
  name: 'Grand Asian Restro Cafe',
  image:
    'https://www.designnominees.com/application/upload/Websites/2024/02/dina-restaurant-theme-182.jpg',
  price: '$500',
  reviews: '1500',
  rating: 5,
  categories: [{title: 'Thai'}, {title: 'Chinese'}, {title: 'Indian'}],
};

const RestaurantImage = ({image}) => {
  return (
    <Image
      style={{width: '100%', height: 240, resizeMode: 'contain'}}
      source={{uri: image}}
    />
  );
};

const RestaurantTitle = ({title}) => {
  return (
    <Text
      style={{fontSize: 28, fontWeight: '900', color: 'black', marginLeft: 10}}>
      {title}
    </Text>
  );
};

const RestaurantDescription = ({description}) => {
  return (
    <Text
      style={{color: 'black', marginLeft: 10, fontSize: 16, fontWeight: '800'}}>
      {description}
    </Text>
  );
};

const About = ({restaurantInfo}) => {
  const {name, image, price, reviews, rating, categories} = restaurantInfo;

  const formattedCategories = categories.map(item => item.title).join('  😋  ');

  const description = `Comfort food  🍜  ${formattedCategories} ${
    price ? ' 💲 ' + price : ''
  } 💳 (${reviews}+) reviews 🌟 ${rating} rating`;

  console.log(restaurantInfo);
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDescription description={description} />
      <View
        style={{
          borderBottomWidth: 0.8,
          borderBottomColor: 'gray',
          marginVertical: 10,
        }}
      />
    </View>
  );
};

export default About;

const styles = StyleSheet.create({});

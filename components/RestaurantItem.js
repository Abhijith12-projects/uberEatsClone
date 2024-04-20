import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

export const localRestaurants = [
  {
    name: 'Paradise Restaurant',
    image_url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/75/68/8f/caption.jpg?w=1100&h=-1&s=1',
    categories: ['Restaurant', 'Bar'],
    price: 'Rs 999',
    reviews: 1999,
    rating: 4.8,
    type: ['restaurant', 'food', 'point_of_interest', 'establishment'],
  },
  {
    name: 'Aaryas Pure veg',
    image_url:
      'https://b.zmtcdn.com/data/pictures/2/901122/c0a316761fcb734b18814d1f9c315dce.jpg',
    categories: ['Restaurant', 'South Indian'],
    price: 'Rs 399',
    reviews: 1558,
    rating: 4.5,
    type: ['restaurant', 'food', 'point_of_interest', 'establishment'],
  },
  {
    name: 'Bong China',
    image_url:
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/29/52/54/hong-teh-chinese-restaurant.jpg?w=1200&h=-1&s=1',
    categories: ['Restaurant', 'Chinese'],
    price: 'Rs 599',
    reviews: 1200,
    rating: 4.2,
    type: ['restaurant', 'food', 'point_of_interest', 'establishment'],
  },
];

const RestaurantImage = ({image}) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{
          uri: `${image}`,
        }}
        style={styles.image}
      />
      <TouchableOpacity style={{position: 'absolute', right: 20, top: 15}}>
        <Icon name="heart-outline" size={24} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

const RestaurantDescription = ({description, rating}) => {
  return (
    <View style={{marginTop: 5}}>
      <Text style={{fontSize: 18, fontWeight: '700', color: 'black'}}>
        {description}
      </Text>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '600',
          }}>
          Delivery in 30 - 40 min
        </Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: '600',
            marginRight: 20,
          }}>
          {rating}
        </Text>
      </View>
    </View>
  );
};

const RestaurantItem = ({localRestaurant}) => {
  const navigation = useNavigation();
  return (
    <View>
      {localRestaurant.map((item, index) => (
        <Pressable
          key={index.toString()}
          style={styles.container}
          onPress={() =>
            navigation.navigate('RestaurantDetails', {data: item})
          }>
          <RestaurantImage image={item.image_url} />
          <RestaurantDescription description={item.name} rating={item.rating} />
        </Pressable>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 10,
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 200,
  },
  ratingText: {
    fontsize: 13,
  },
});

export default RestaurantItem;

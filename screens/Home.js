import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItem from '../components/RestaurantItem';
import {localRestaurants} from '../components/RestaurantItem';

const YELP_API_KEY =
  'AGFMwp3VKKMvEAzy78cTO8kT8lpNGPF1QJaUPY1XbNrlDsEdJEzcqEeje2btid5baiOxzS2PsL5UNxlxcUtE0RcwST5IMUTEkE6-0153KNZqp1NanPKBTnQMkW75ZXYx';
// const YOUR_GOOGLE_PLACES_API_KEY = 'AIzaSyALtcmZ3gWKuisSLCG-EZX0V0fWL8hfED0';
const Home = () => {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState('Chicago');
  const [activeTab, setActiveTab] = useState('Delivery');

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };
    const res = await fetch(yelpUrl, apiOptions);
    const data = await res.json();
    // console.log(data.businesses);
    // console.log(
    //   '+++++',
    //   data.businesses.map(item => console.log(item.transactions)),
    // );
    const result = data.businesses.filter(business =>
      business.transactions.includes(activeTab.toLowerCase()),
    );
    return setRestaurantData(result);
    // const placesUrl = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+in+${city}&key=${YOUR_GOOGLE_PLACES_API_KEY}`;
    // const res = await fetch(placesUrl);
    // const data = await res.json();
    // const restaurants = data.results
    //   .filter(
    //     restaurant =>
    //       restaurant.name && restaurant.photos && restaurant.photos.length > 0,
    //   )
    //   .map(restaurant => ({
    //     name: restaurant.name,
    //     image_url: getPhotoUrl(restaurant.photos[0].photo_reference),
    //     categories: restaurant.types,
    //     price: restaurant.price_level,
    //     reviews: restaurant.user_ratings_total,
    //     rating: restaurant.rating,
    //     type: restaurant.types,
    //   }));
    // function getPhotoUrl(photoReference) {
    //   const apiKey = YOUR_GOOGLE_PLACES_API_KEY;
    //   return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${photoReference}&key=${apiKey}`;
    // }
    // const updatedRestaurants = restaurants.filter(restaurant =>
    //   restaurant.type.some(type => activeTab.includes(type)),
    // );
    // console.log(updatedRestaurants);
    // restaurants.map(item => console.log(item.type));
    // setRestaurantData(updatedRestaurants);
  };

  useEffect(() => {
    console.log('home', city);
    console.log('activeTab', activeTab);
    getRestaurantsFromYelp();
  }, [city, setCity, activeTab, setActiveTab]);

  return (
    <SafeAreaView style={{backgroundColor: '#eee', flex: 1}}>
      <View style={{backgroundColor: 'white', padding: 15}}>
        <HeaderTabs activeTabHandler={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem localRestaurant={restaurantData} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});

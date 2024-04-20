import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch} from 'react-redux';

const foods = [
  {
    title: 'Margherita Pizza',
    description:
      'A classic Italian pizza topped with fresh tomato sauce, mozzarella cheese, and basil leaves.',
    price: 16,
    image:
      'https://static.toiimg.com/thumb/56868564.cms?imgsize=1948751&width=800&height=800',
    rating: 4.5,
    numOfRatings: 499,
  },
  {
    title: 'Chicken Caesar Salad',
    description:
      'Crisp romaine lettuce tossed with grilled chicken strips, Parmesan cheese, croutons, and Caesar dressing.',
    price: 12,
    image:
      'https://s23209.pcdn.co/wp-content/uploads/2023/01/220905_DD_Chx-Caesar-Salad_051.jpg',
    rating: 4.8,
    numOfRatings: 1120,
  },
  {
    title: 'Spaghetti Carbonara',
    description:
      'Spaghetti pasta served with a creamy sauce made from eggs, Parmesan cheese, pancetta, and black pepper.',
    price: 28,
    image:
      'https://media.istockphoto.com/id/1142391463/photo/pasta-carbonara.jpg?s=612x612&w=0&k=20&c=7gO9mReNFzY10qsmu_X4_LZ45-UcVPtzpHF-DOFp6Cc=',
    rating: 4.7,
    numOfRatings: 845,
  },
  {
    title: 'Sushi Platter',
    description:
      'Assorted sushi rolls including California rolls, tuna rolls, and salmon rolls, served with soy sauce and wasabi.',
    price: 89,
    image: 'https://cdn.britannica.com/52/128652-050-14AD19CA/Maki-zushi.jpg',
    rating: 4.9,
    numOfRatings: 2047,
  },
  {
    title: 'Chocolate Lava Cake',
    description:
      'Warm chocolate cake with a gooey, molten chocolate center, served with vanilla ice cream and chocolate sauce.',
    price: 12,
    image:
      'https://media.istockphoto.com/id/544716244/photo/warm-chocolate-lava-cake-with-molten-center-and-red-currants.jpg?s=612x612&w=0&k=20&c=i1rRa1x7D1pu-INKabmC21BaU9MC8ZRQdcC7dBLdzUo=',
    rating: 4.6,
    numOfRatings: 702,
  },
  {
    title: 'Paneer Tikka Masala',
    description:
      'Chunks of paneer marinated in spices, grilled, and served in a creamy tomato-based sauce.',
    price: 24,
    image:
      'https://t4.ftcdn.net/jpg/06/50/67/49/360_F_650674921_zSKBnxMSCAg4eT40PG22ogu5tV9tuLUf.jpg',
    rating: 4.4,
    numOfRatings: 624,
  },
  {
    title: 'Biryani',
    description:
      'Fragrant basmati rice cooked with spices, tender pieces of chicken, and garnished with fried onions and mint leaves.',
    price: 19,
    image:
      'https://media.istockphoto.com/id/1345624336/photo/chicken-biriyani.jpg?s=612x612&w=0&k=20&c=adU_N0P-1SKMQLZu5yu7aPknfLLgbViI8XILqLP92A4=',
    rating: 4.7,
    numOfRatings: 1239,
  },
  {
    title: 'Fish and Chips',
    description:
      'Crispy battered fish fillets served with golden fries, tartar sauce, and mushy peas.',
    price: 10,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEEBhozoDyr2udvXeOwhgsagXNyVKRMRX7TDk8FJKZ3A&s',
    rating: 4.5,
    numOfRatings: 572,
  },
  {
    title: 'Paneer Butter Masala',
    description:
      'Soft cubes of paneer cooked in a rich and creamy tomato-based gravy with butter and Indian spices.',
    price: 7.5,
    image:
      'https://t4.ftcdn.net/jpg/05/82/28/65/360_F_582286506_Kji3X5NrZBHMTFSqwG9gADXWMsjrtEjL.jpg',
    rating: 4.3,
    numOfRatings: 432,
  },
  {
    title: 'Mango Lassi',
    description:
      'A refreshing yogurt-based drink blended with ripe mangoes, sugar, and a hint of cardamom.',
    price: 6,
    image:
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2022/04/mango-lassi-recipe.jpg',
    rating: 4.8,
    numOfRatings: 1876,
  },
];

const FoodCard = ({food, restaurantName}) => {
  // console.log(food);
  const renderStars = () => {
    const stars = [];
    const rating = Math.round(food.rating);
    for (let i = 0; i < rating; i++) {
      stars.push('⭐️');
    }
    return stars.join(' ');
  };

  const formatNumOfRatings = num => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + ' k';
    } else {
      return num.toString();
    }
  };

  const dispatch = useDispatch();

  const selectItem = (item, checkboxValue) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });
  };

  return (
    <View
      style={{
        width: '100%',
        height: 180,
        marginLeft: 15,
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      }}>
      <BouncyCheckbox
        iconStyle={{borderColor: 'lightgray', borderRadius: 0}}
        fillColor="green"
        onPress={isChecked => {
          selectItem(food, isChecked);
        }}
      />
      <View style={{width: '60%'}}>
        <Text
          style={{
            color: 'black',
            fontSize: 20,
            fontWeight: '900',
            marginBottom: 10,
          }}>
          {food.title}
        </Text>
        <Text style={{color: 'black', fontSize: 15, fontWeight: '600'}}>
          {food.description}
        </Text>
        <Text style={{color: 'black', fontSize: 15, marginTop: 10}}>
          {renderStars()} ({formatNumOfRatings(food.numOfRatings)} ratings)
        </Text>
        <Text
          style={{
            color: 'black',
            fontSize: 15,
            fontWeight: '900',
            marginTop: 10,
          }}>
          ${food.price}
        </Text>
      </View>
      <Image
        source={{uri: food.image}}
        style={{
          height: 140,
          width: 140,
          resizeMode: 'contain',
          borderRadius: 20,
        }}
      />
    </View>
  );
};

const MenuItem = ({restaurantName}) => {
  return (
    <ScrollView>
      {foods.map((food, index) => {
        return (
          <View key={index.toString()}>
            <FoodCard food={food} restaurantName={restaurantName} />
            <View
              style={{
                borderBottomWidth: 0.8,
                borderBottomColor: 'gray',
                marginVertical: 10,
              }}
            />
          </View>
        );
      })}
    </ScrollView>
  );
};

export default MenuItem;

const styles = StyleSheet.create({});

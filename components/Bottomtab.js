import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Home from 'react-native-vector-icons/FontAwesome';
import Search from 'react-native-vector-icons/Entypo';
import Cart from 'react-native-vector-icons/Ionicons';
import Account from 'react-native-vector-icons/MaterialCommunityIcons';

const Bottomtab = () => {
  return (
    <View
      style={{
        paddingVertical: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}>
      <TouchableOpacity style={styles.imagecontainer}>
        <Home name="home" size={36} color="black" />
        <Text style={{color: 'black', fontWeight: '900', fontSize: 16}}>
          Home
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imagecontainer}>
        <Search name="magnifying-glass" size={36} color="black" />
        <Text style={{color: 'black', fontWeight: '900', fontSize: 16}}>
          Search
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imagecontainer}>
        <Cart name="cart" size={36} color="black" />
        <Text style={{color: 'black', fontWeight: '900', fontSize: 16}}>
          Cart
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imagecontainer}>
        <Cart name="bag-sharp" size={36} color="black" />
        <Text style={{color: 'black', fontWeight: '900', fontSize: 16}}>
          Orders
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.imagecontainer}>
        <Account name="account" size={36} color="black" />
        <Text style={{color: 'black', fontWeight: '900', fontSize: 16}}>
          Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Bottomtab;

const styles = StyleSheet.create({
  imagecontainer: {
    alignItems: 'center',
  },
});

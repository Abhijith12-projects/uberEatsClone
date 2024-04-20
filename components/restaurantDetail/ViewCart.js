import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';

const ViewCart = () => {
  const cartItems = useSelector(state => state.cartReducer.selectedItems) || [];
  const cartValue = cartItems.items.reduce((acc, cur) => acc + cur.price, 0);

  const handleViewCart = () => {};

  return (
    <>
      {cartValue ? (
        <View style={styles.container}>
          <TouchableOpacity onPress={handleViewCart} style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>View Cart</Text>
              <Text style={styles.cartValue}>${cartValue.toFixed(2)}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ) : (
        <></>
      )}
    </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 20,
    zIndex: 999,
    width: '100%',
  },
  button: {
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center',
    backgroundColor: 'black',
    width: 300,
    paddingVertical: 13,
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  cartValue: {
    color: 'white',
    marginLeft: 30,
  },
});

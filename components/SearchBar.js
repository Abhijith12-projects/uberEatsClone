import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons';
import CancelIcon from 'react-native-vector-icons/MaterialIcons';
import Clock from 'react-native-vector-icons/AntDesign';

const SearchBar = ({cityHandler}) => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        query={{key: 'AIzaSyALtcmZ3gWKuisSLCG-EZX0V0fWL8hfED0'}}
        onPress={(data, detail = null) => {
          const city = data.description.split(',')[0];
          cityHandler(city);
          setSearch(city);
        }}
        value={search}
        styles={inputStyles}
        renderLeftButton={() => (
          <View style={styles.iconContainer}>
            <Icon name="location-sharp" size={24} color="black" />
          </View>
        )}
        // Inside renderRightButton function of your SearchBar component
        renderRightButton={() => (
          <View style={styles.rightContainer}>
            <TouchableOpacity onPress={() => setSearch('')}>
              <CancelIcon name="cancel" size={24} color="black" />
            </TouchableOpacity>
            <View style={styles.buttonContainer}>
              <Clock name="clockcircle" size={20} color="black" />
              <Text style={styles.buttonText}>Search</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const inputStyles = StyleSheet.create({
  textInput: {
    backgroundColor: '#eee',
    fontWeight: '700',
    borderRadius: 20,
    marginTop: 7,
    marginLeft: 10,
  },
  textInputContainer: {
    backgroundColor: '#eee',
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
});

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flexDirection: 'row',
  },
  iconContainer: {
    marginLeft: 10,
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 14,
    marginLeft: 4,
    color: 'black',
  },
});

export default SearchBar;

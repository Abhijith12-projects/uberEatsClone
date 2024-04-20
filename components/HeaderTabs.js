import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const HeaderButton = ({title, active, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 30,
        backgroundColor: title === active ? 'black' : 'white',
        paddingVertical: 7,
        paddingHorizontal: 18,
      }}
      onPress={() => onPress(title)}>
      <Text
        style={{
          fontSize: 15,
          fontWeight: '900',
          textAlign: 'center',
          color: title === active ? 'white' : 'black',
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const HeaderTabs = ({activeTabHandler}) => {
  const [activeTab, setActiveTab] = useState('Delivery');
  console.log(activeTab);

  function onPress(title) {
    setActiveTab(title);
    const types = title === 'Pick up' ? 'Pickup' : 'Delivery';
    activeTabHandler(types);
  }
  return (
    <View style={{flexDirection: 'row', alignSelf: 'center'}}>
      <HeaderButton
        title="Delivery"
        active={activeTab}
        setActive={setActiveTab}
        onPress={onPress}
      />
      <HeaderButton
        title="Pick up"
        active={activeTab}
        setActive={setActiveTab}
        onPress={onPress}
      />
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({});

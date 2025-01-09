import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CustomPicker = ({ selectedValue, onValueChange, items }) => {
  return (
    <View style={styles.pickerContainer}>
      <Picker
        selectedValue={selectedValue}
        onValueChange={onValueChange}
        style={styles.picker}
      >
        {items.map((item, index) => (
          <Picker.Item
            key={index}
            label={item.label}
            value={item.value}
            style={styles.pickerItem}
          />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  pickerContainer: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: '#F4F4F4',
    borderRadius: 30,
    width: 342,
    height: 56,
  },
  picker: {
    marginLeft: 10,
    height: 50,
    width: '100%',
  },
  pickerItem: {
    color: 'black', 
    fontSize: 16,
  },
});

export default CustomPicker;
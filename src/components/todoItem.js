import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function TodoItem({item, pressHandler}) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
      <View style={styles.item}>
        {/* <MaterialIcons name="delete" size={18} color="#ddd" /> */}
        <Text style={styles.text}>{item.text}</Text>
        <Text style={styles.itemIcon}>🗑</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fdd',
  },
  itemIcon:{
    fontSize: 20,
    margin: 10,
    backgroundColor: '#ffd',
    padding: 7,
    borderRadius: 15,
  

  },
  text:{
    flex: 1,
    marginLeft: 10,
    marginTop: 15,
    fontFamily: 'times',
    fontSize: 20,

  }
});

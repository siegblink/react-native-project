import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export default function TodoItem({ item, pressHandler }) {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <View style={styles.item}>
          <MaterialIcons name='delete' size={18} color='#c2c2c2' />
          <Text style={styles.itemText}>{item.text}</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: '#fff0e6',
  },
  itemText: {
    marginLeft: 10,
    color: '#595959',
    fontWeight: 'bold',
    fontSize: 16,
  },
  itemContainer: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Todo list</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    paddingHorizontal: 16,
    backgroundColor: '#ffd1b5',
  },
  title: {
    color: '#ff6f00',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

import { View, Text } from 'react-native'
import React from 'react'

const Container = ({children}) => {
  return (
    <View className="p-0 px-5 m-0 relative">
        {children}
    </View>
  )
}

export default Container
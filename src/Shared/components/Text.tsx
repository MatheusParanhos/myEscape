import React from 'react'
import { Text } from 'react-native'

// TODO: ADD MEDIA QUERIES

const Text = ({
  color,
  fontSize,
  children,
  textAlign,
  ...props
}) => {
  return (
    <Text
      style={{
        // fontFamily: 'Proxima Nova',
        color,
        fontSize,
        textAlign
      }}
      {...props}
    >
      {children}
    </Text>
  )
}

export default Text

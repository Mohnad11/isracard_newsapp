import {TextProps, Text} from 'react-native';
import React from 'react';

export default function AppText(props: TextProps) {
  return <Text numberOfLines={props.numberOfLines} style={props.style}>{props.children}</Text>;
}

import {StyleSheet, View, ViewProps} from 'react-native';
import React from 'react';

export default function ShadowBox(props: ViewProps) {
  return <View style={[props.style, styles.shadow]}>{props.children}</View>;
}
const styles = StyleSheet.create({
  shadow: {
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowColor: '#909090',
    shadowOffset: {width: 0, height: 4},
    elevation:10
  },
});

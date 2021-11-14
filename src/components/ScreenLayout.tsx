import React from 'react';
import {SafeAreaViewProps} from 'react-native-safe-area-context';
import {SafeAreaView, StyleSheet, View} from 'react-native';

export default function ScreenLayout(props: SafeAreaViewProps) {
  return (
    <SafeAreaView style={[props.style, styles.layout]}>
      {props.children}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  layout: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

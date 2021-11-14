import React from 'react';
import {View, ViewProps} from 'react-native';

interface IProps extends ViewProps {
  hide?: boolean;
}
export default function HideableView(props: IProps) {
  return (
    props.hide == false ? <View style={props.style}>{props.children}</View> : <></>
  );
}

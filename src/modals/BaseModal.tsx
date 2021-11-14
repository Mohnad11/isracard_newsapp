import React from 'react';
import {
  Dimensions,
  Modal,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewProps,
} from 'react-native';
interface IProps extends ViewProps {
  visible: boolean;
  onClose: Function;
}
export default function BaseModal(props: IProps) {
  return (
    <Modal animationType="slide" visible={props.visible} transparent={true}>
      <View>
        <View style={styles.modalContainer}>
          <View>
            <View style={[props.style, {borderRadius: 10}]}>
              {props.children}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
const styles = StyleSheet.create({
  modalContainer: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

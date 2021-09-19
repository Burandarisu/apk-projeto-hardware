// Imports
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';

// Styles
import {Body} from '../../components/ui';

export default function SettingsScreen() {
  useFocusEffect(React.useCallback(() => console.log('caquécoisa')));

  return (
    <Body>
      <Text>SETTINGS</Text>
    </Body>
  );
}

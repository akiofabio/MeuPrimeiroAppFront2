
import { styles  } from './styles';
import { theme } from '../../global/styles/theme';
import HomeIcon from "../../assets/HomeIcon.png";
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Image } from 'react-native';

  export function Menu() {
    return  (
        <View style={styles.container}>
            <Image
                source={HomeIcon}
                style={styles.menu}
                resizeMode="stretch"
            />
        </View>
    );
  }
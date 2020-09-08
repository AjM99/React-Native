import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { HeaderButton,Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const PlacesListScreen = props => {
  return (
    <View>
      <Text>PlacesListScreen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = navData =>
 {
    headerTitle: 'All Places'
    headerRight: <HeaderButton HeaderButtonComponent ={HeaderButton}>
                    <Item title ='Add Places'
                    iconName='md-add'
                    onPress={() =>
                      {
                        navData.navigation.navigate('NewPlace');
                      }
                    }
                    />
                    
                  </HeaderButton>
};

const styles = StyleSheet.create({});

export default PlacesListScreen;

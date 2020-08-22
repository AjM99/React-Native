// Source OF all navigation
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation'; 




// files to be navigated with thier location
import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import Colors from '../constants/Colors';

const PlacesNavigator = createStackNavigator
(
  {    // Screen : from wehre its taken 
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#F0DF87'          
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary    // === ? is conditional statement
    }
  }
);

export default createAppContainer(PlacesNavigator);

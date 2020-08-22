import React from 'react';
import {HeaderButtons} from  'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';


import Colors from  '../constants/Colors';


const CustomHeaderButton = props =>
{
    return <HeaderButton {...props} IconComponent={Iconicons} iconSize={23} color= "#E44236"/>
},


export default  CustomHeaderButton;
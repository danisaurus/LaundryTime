import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';

import styled from 'styled-components/native';
import delivery from "../../assets/svg-components/deliveryMan";
import tshirtTime from "../../assets/svg-components/tshirtTime";
import laundryBasket from "../../assets/svg-components/laundryBasket";
import {SvgXml} from "react-native-svg";

const BrandName = styled.Text`
  font-size: ${(props) => props.theme.fontSizes.h2};
  font-family: ${(props) => props.theme.fonts.heading};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const GetStartedScreen = ({navigation}) => {

  return (
    <>
      <View style={{flex:1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <SvgXml 
          xml={laundryBasket}
          height={100}
          width={100}
        />
        <SvgXml 
          xml={tshirtTime}
          height={100}
          width={100}
        />
        <SvgXml 
          xml={delivery}
          height={100}
          width={100}
        />
      </View>
      <BrandName variant="heading">Laundry Time</BrandName>
      <View style={{flex:2}}>
       <Button style={{}} mode="contained" onPress={() => navigation.navigate('CreateOrder')}>Get Started</Button>
      </View>
      
    </>
  );
}
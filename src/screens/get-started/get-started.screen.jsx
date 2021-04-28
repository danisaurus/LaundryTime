import React from "react";
import { Button } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import delivery from '../../assets/020-delivery.svg';
import deliveryMap from '../../assets/017-map.svg';
import tshirtTime from '../../assets/028-time.svg';

export const GetStartedScreen = () => {

  return (
    <>
      <View>
        <SvgXml 
          xml={tshirtTime}
          width={40}
          height={40}/>

        
      </View>
    </>

  );

}
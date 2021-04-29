import React from "react";
import { View, Text } from "react-native";
import { Button } from 'react-native-paper';

import styled from 'styled-components/native';
import {CheckoutItem, ImageContainer, ProductImage, ProductQuantity, ProductText, Arrow, Value, RemoveButton} from './create-order.styles';


const ClothingItem = {
  name: 't-shirt',
  image: 'https://www.flaticon.com/svg/vstatic/svg/4446/4446191.svg?token=exp=1619664561~hmac=b748df30fe263e5149cbf63f6a367a85',
  price: 1000,
  quantity: 0
}

export const CreateOrderScreen = (ClothingItem) => {
  return (
      <CheckoutItem>
        <ImageContainer>
            <ProductImage alt='item' src={ClothingItem.image}/>
        </ImageContainer>
        <ProductText>{ClothingItem.name}</ProductText>
        <ProductQuantity>
            <Arrow>&#10094;</Arrow>
            <Value>{ClothingItem.quantity}</Value>
            <Arrow>&#10095;</Arrow>
        </ProductQuantity>
        <ProductText>{ClothingItem.price}</ProductText>
        <RemoveButton>&#10005;</RemoveButton>
      </CheckoutItem>
  )
}
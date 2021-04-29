import styled from "styled-components/native";
import { Card } from "react-native-paper";


export const CheckoutItem = styled.View`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
`;

export const ImageContainer = styled.View`
  width: 23%;
  padding-right: 15px;
`;

export const ProductImage = styled.Image`
  width: 100%;
  height: 100%;
`
export const ProductText = styled.Text`
  width: 23%;
`;

export const ProductQuantity = styled.View`
   display: flex;
`;
  
export const Arrow = styled.Text`
  cursor: pointer;
`;
  
export const Value = styled.Text`
  margin: 0 10px;
`;


export const RemoveButton = styled.Button`
  padding-left: 12px;
  cursor: pointer;
`;
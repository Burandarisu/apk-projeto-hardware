// Imports
import React from 'react';
import styled from 'styled-components/native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ActivityIndicator, Modal} from 'react-native';

const primaryColor = '#005003';
const secondaryColor = '#183153';
const iconSize = 60;

export const Body = styled.View`
  flex: 1;
  background-color: ${primaryColor};
  justify-content: ${props =>
    props.justifyToCenter ? 'center' : 'flex-start'};
  align-items: ${props =>
    props.justifyToCenter || props.alignToCenter ? 'center' : 'flex-start'};
`;

export const ScrollBody = styled.ScrollView``;

export const TextHeader = styled.Text`
  font-size: 36px;
  font-weight: 700;
  color: ${secondaryColor};
  text-align: center;
`;

export const HeaderCard = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: ${secondaryColor};
  text-align: left;
`;

export const PageName = ({name}) => (
  <Card style={{marginVertical: 15}}>
    <TextHeader>{name}</TextHeader>
  </Card>
);

export const Card = styled.View`
  width: 70%;
  padding: 10px;
  border-radius: 10px;
  background-color: white;
`;

export const Row = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 25px;
  justify-content: space-around;
`;

export const ValueText = styled.Text`
  font-size: 45px;
  font-weight: 700;
  color: ${secondaryColor};
`;

export const LoaderArea = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ContainerCalendar = styled.View`
  margin-top: 15px;
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  background-color: white;
  border-radius: 7px;
`;

export const Loader = ({isPage, loading}) => (
  <Modal transparent={!isPage} animationType="none" visible={loading}>
    <LoaderArea>
      <ActivityIndicator size="large" animating={loading} color="white" />
    </LoaderArea>
  </Modal>
);

export const InformationCard = ({title, value, iconName}) => (
  <Card style={{marginTop: 50}}>
    <HeaderCard>{title}</HeaderCard>
    <Row>
      <FontAwesome5 name={iconName} size={iconSize} color={secondaryColor} />
      <ValueText>{value}</ValueText>
    </Row>
  </Card>
);

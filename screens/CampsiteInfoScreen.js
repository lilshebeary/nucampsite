import React from 'react'
import { StyleSheet } from 'react-native'
import RenderCampsite from '../features/campsites/RenderCampsite';

const CampsiteInfoScreen = ({ route }) => {
  const { campsite } = route.params;

  return (
   <RenderCampsite campsite={campsite} />
  )
}

export default CampsiteInfoScreen;

const styles = StyleSheet.create({})
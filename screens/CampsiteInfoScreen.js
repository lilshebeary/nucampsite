import React from 'react'
import { StyleSheet } from 'react-native'
import RenderCampsite from '../features/campsites/RenderCampsite';

const CampsiteInfoScreen = (props) => {
  return (
   <RenderCampsite campsite={props.campsite} />
  )
}

export default CampsiteInfoScreen;

const styles = StyleSheet.create({})
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { CAMPSITES } from '../shared/campsites';
import DirectoryScreen from './DirectoryScreen';


const Main = () => {
    const [campsites, setCampsites] = useState(CAMPSITES)
  return (
      <DirectoryScreen campsites={campsites} />
  )
}

export default Main;

const styles = StyleSheet.create({})
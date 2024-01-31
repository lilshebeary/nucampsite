import { useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';
import { CAMPSITES } from '../shared/campsites';

const DirectoryScreen = ({ navigation }) => {
    const [campsites, setCampsites] = useState(CAMPSITES);

    const renderDirectoryItem = ({ item: campsite}) => {
        return (
            <ListItem onPress={() => navigation.navigate('CampsiteInfo', { campsite })}>
                <Avatar source={campsite.image} rounded />
                <ListItem.Content>
                    <ListItem.Title>{campsite.name}</ListItem.Title>
                    <ListItem.Subtitle>{campsite.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        )
    }

  return (
    <FlatList 
        data={campsites}
        renderItem={renderDirectoryItem}
        keyExtractor={(itme) => itme.id.toString()}
    />    
  )
}

export default DirectoryScreen;

const styles = StyleSheet.create({})
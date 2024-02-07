import { useState} from 'react'
import { StyleSheet, FlatList, Text, View } from 'react-native'
import RenderCampsite from '../features/campsites/RenderCampsite';
import { useSelector } from 'react-redux'; 

const CampsiteInfoScreen = ({ route }) => {
  const { campsite } = route.params;
  const comments = useSelector(state => state.comments);

  const [favorite, setFavorite] = useState(false);

  const renderCommentItem = ({ item }) => {
    return (
      <View style={styles.commentItem}>
        <Text style={styles.commentStyle}>{item.text}</Text>
        <Text style={styles.ratingStyle}>{item.rating}</Text>
        <Text style={styles.authorStyle}>
          {` -- ${item.author}, ${item.date} `}
        </Text>    
      </View>
    )
  }

  return (
    <FlatList
      data={comments.commentsArray.filter(
        (comment) => comment.campsiteId === campsite.id
      )}
      renderItem={renderCommentItem}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={{
        marginHorizontal: 20,
        paddingVertical: 20
      }}
      ListHeaderComponent={
        <>
          <RenderCampsite 
            campsite={campsite} 
            isFavorite={favorite}
            markFavorite={() => setFavorite(true)}
          /> 
          <Text style={styles.commentsTitle}>Comments</Text>
        </>
      }
    />
   
  )
}

export default CampsiteInfoScreen;

const styles = StyleSheet.create({
  commentsTitle: {
    textAlign: 'center',
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#43484d',
    padding: 10,
    paddingTop: 30
  },
  commentItem: {
    paddingVertical: 10,
    paddingHorizontal: 20, 
    backgroundColor: '#fff'
  },
  commentStyle: {
    fontSize: 14
  },
  ratingStyle: {
    fontSize: 12
  },
  authorStyle: {
    fontSize: 12
  }
})
import { useState } from "react";
import { StyleSheet, FlatList, Text, View, Button, Modal } from "react-native";
import RenderCampsite from "../features/campsites/RenderCampsite";
import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../features/favorites/favoritesSlice";
import { Rating, Input } from 'react-native-elements';
import { postComment } from "../features/comments/commentsSlice"; 
import * as Animatable from 'react-native-animatable';

const CampsiteInfoScreen = ({ route }) => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(5);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const { campsite } = route.params;
  const comments = useSelector((state) => state.comments);
  const favorites = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newComment = {
      author,
      rating,
      text,
      campsiteId: campsite.id
  };
  dispatch(postComment(newComment));
  setShowModal(!showModal);
  }
 
  const resetForm = () => {
    setAuthor('');
    setRating(5);
    setText('');
};

  const renderCommentItem = ({ item }) => {
    return (
      <View style={styles.commentItem}>
         <Rating
          readonly
          type="star"
          startingValue={item.rating}
          imageSize={10}
          style={{ paddingVertical: '5%', alignItems: 'flex-start' }}
        />
         <Text style={styles.commentStyle}>{item.text}</Text> 
        <Text style={styles.authorStyle}> 
          {` -- ${item.author}, ${item.date} `}
        </Text>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={comments.commentsArray.filter(
          (comment) => comment.campsiteId === campsite.id
        )}
        renderItem={renderCommentItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={{
          marginHorizontal: 20,
          paddingVertical: 20,
        }}
        ListHeaderComponent={
          <>
            <RenderCampsite
              campsite={campsite}
              isFavorite={favorites.includes(campsite.id)}
              markFavorite={() => dispatch(toggleFavorite(campsite.id))}
              onShowModal={() => setShowModal(!showModal)}
            />
            <Text style={styles.commentsTitle}>Comments</Text>
          </>
        }
      />
      <Modal
        animationType="slide"
        transparent={false}
        visible={showModal}
        onRequestClose={() => setShowModal(!showModal)}
      >
        <View style={styles.modal}>
        <Rating
          type="star"
          startingValue={rating}
          imageSize={40}
          onFinishRating={(rating) => setRating(rating)}
          style={{ paddingVertical: 10 }}
        />
        <Input 
          placeholder="author"
          leftIcon={{ type: 'font-awesome', name: 'user-o'}}
          leftIconContainerStyle
          onChangeText={(author) => setAuthor(author)}
          value={author}
        />
        <Input 
          placeholder="text"
          leftIcon={{ type: 'font-awesome', name: 'comment'}}
          leftIconContainerStyle
          onChangeText={(text) => setText(text)}
          value={text}
        />
        <View style={{margin: 10}}>
        <Button 
          title='Submit' 
          color='#5637dd'
          onPress={() => {
            handleSubmit();
            resetForm();
          }}
        />
        </View>
        
          <View style={{margin: 10}}>
            <Button 
              onPress={() => {
                setShowModal(!showModal)
                resetForm()
              }}
              color='#808080'
              title="Cancel"
            ></Button>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default CampsiteInfoScreen;

const styles = StyleSheet.create({
  commentsTitle: {
    textAlign: "center",
    backgroundColor: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    color: "#43484d",
    padding: 10,
    paddingTop: 30,
  },
  commentItem: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  commentStyle: {
    fontSize: 14,
  },
  ratingStyle: {
    fontSize: 12,
  },
  authorStyle: {
    fontSize: 12,
  },
  modal: {
    justifyContent: 'center',
    margin: 20
  },

});

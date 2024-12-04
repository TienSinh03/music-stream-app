import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  Modal,
  TextInput,
  ScrollView,
  Dimensions,SafeAreaView,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import IconFe from 'react-native-vector-icons/Feather';
import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons';
import Footer from "../component/footer";
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height } = Dimensions.get('window');
const feedData = [
  {
    id: '1',
    username: 'Jessica Gonzalez',
    verified: true,
    title: 'FLOWER',
    image_user: require('../assets/image/Feed - Audio Listing/Avatar 4.png'),
    image: require('../assets/image/Feed - Audio Listing/Image 93.png'),
    plays: 125,
    duration: '05:15',
    likes: 20,
    comments: 3,
    shares: 1,
    time: '3d',
    commentsData: [
      {
        id: '1',
        username: 'Sally Rooney',
        image_user: require('../assets/image/Feed - Comment on an Audio/Avatar 8.png'),
        text: 'Do duis cul 😍',
        time: '17h',
        likes: 20,
      },
      {
        id: '2',
        username: 'Jason',
        image_user: require('../assets/image/Feed - Comment on an Audio/Avatar 9.png'),
        text: 'Minim magna exc 😍',
        time: '48m',
        likes: 2,
      },
      {
        id: '3',
        username: 'Michael Key',
        image_user: require('../assets/image/Feed - Comment on an Audio/Avatar 11.png'),
        text: 'Commodo 🔥',
        time: '48m',
        likes: 15,
      },
    ],
  },
  {
    id: '2',
    username: 'William King',
    verified: true,
    title: 'Me',
    image_user: require('../assets/image/Feed - Audio Listing/Avatar 5.png'),
    image: require('../assets/image/Feed - Audio Listing/Image 94.png'),
    plays: 245,
    duration: '05:15',
    likes: 45,
    comments: 9,
    shares: 2,
    time: '5d',
    commentsData: [
      {
        id: '1',
        username: 'Sally Rooney',
        image_user: require('../assets/image/Feed - Comment on an Audio/Avatar 8.png'),
        text: 'Do duis cul 😍',
        time: '17h',
        likes: 20,
      },
      {
        id: '2',
        username: 'Jason',
        image_user: require('../assets/image/Feed - Comment on an Audio/Avatar 9.png'),
        text: 'Minim magna exc 😍',
        time: '48m',
        likes: 12,
      },
      {
        id: '3',
        username: 'Michael Key',
        image_user: require('../assets/image/Feed - Comment on an Audio/Avatar 11.png'),
        text: 'Commodo 🔥',
        time: '48m',
        likes: 22,
      },
    ],
  },
];
const Feed = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedComments, setSelectedComments] = useState([]);
  const [feedDatas, setFeedDatas] = useState(feedData);
  const [isLiked, setIsLiked] = useState({});
  const [isLikedComment, setIsLikedComment] = useState({});
  const [textComment, setTextComment] = useState('');
  const [idFeed, setIdFeed] = useState('');

  const openComments = (id,comments) => {
    setSelectedComments(comments);
    setIdFeed(id);
    setModalVisible(true);
  };

  const toggleLikePost = (idPost) => {
    setIsLiked((prev) => {
      const isCurrentlyLike = prev[idPost];
      const newState={
      ...prev, 
      [idPost]: !prev[idPost],
      };

      // increment or decrement the number of likes
      const index = feedDatas.findIndex((feed) => feed.id === idPost);
      const feedData = feedDatas[index];
      feedData.likes = isCurrentlyLike ? feedData.likes - 1 : feedData.likes + 1;
      setFeedDatas((prev) => {
        const newState = [...prev];
        newState[index] = feedData;
        return newState;
      });

      return newState;
    });
  }

  // likes comments
  const toggleCommentLike = (idComment) => {
    setIsLikedComment((pre) =>{
      const isCurrentLike = pre[idComment];
      const newStateComment = {...pre, [idComment]: !pre[idComment]};
      
      const index = selectedComments.findIndex((comment) => comment.id === idComment);
      const comments = selectedComments[index];
      comments.likes = isCurrentLike ? comments.likes - 1 : comments.likes + 1;
      setSelectedComments((pre) => {
        const newState = [...pre];
        newState[index] = comments;
        return newState;
      })
      return newStateComment;
    })
  }

  // add comments to the feed
  const addComment = async (idPost, textComment) => {
    const index = feedDatas.findIndex((feed) => feed.id === idPost);
    const avatar = AsyncStorage.getItem('avatar');
    const name = await AsyncStorage.getItem('name');
    const comment = {
      id: selectedComments.length + 1,
      username: name,
      image_user: require('../assets/image/Feed - Comment on an Audio/Avatar 8.png'),
      text: textComment,
      time: 'now',
      likes:0
    };

    console.log(comment);
    const feedData = feedDatas[index];
    feedData.commentsData = [...feedData.commentsData, comment];
    feedData.comments = feedData.comments + 1;
    setSelectedComments((pre) => [...pre, comment]);
  }

  {/* Header */ }
  const renderHeader = () => (
    <View style={[styles.headerContainer,{padding:20}]}>
      <Text style={styles.feedTitle}>Feed</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.header}>
        <Image source={item.image_user} />
        <View style={styles.userInfo}>  
            <View style={{flexDirection:'row',alignItems: 'center'}}>
                 <Text style={styles.username}>{item.username}</Text>
                <AntDesign name="checkcircleo" size={14} color="#21c5db" style={styles.verifiedIcon} />
            </View>

           {/** views and duration */}
           <View style={{display:'flex', flexDirection:'row', alignItems:'center', gap:6}}>
                <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF', marginRight:8}}>Posted a track</Text>
                    
                {/**duration */}
                <FontAwesome name="circle" size={10} color="#9095A0FF"/>
                <Text style={{fontSize: 14, lineHeight:24,fontWeight:'400', color:'#565E6CFF'}}>{item.time}</Text>
            </View>
        </View>
        
      </View>
      <View>
        <Image source={item.image} style={styles.postImage} />
        
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Text style={styles.artist}>{item.username}</Text>
            <View style={[styles.stats, {gap:8}]}>
              <IconFe name="play" size={16} color="#fff"/>
              <Text style={styles.statText}>{item.plays}</Text>
              <FontAwesome name="circle" size={8} color="#fff"/>
              <Text style={styles.duration}> {item.duration}</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.actions}>
        <View style={{flexDirection:'row',alignItems: 'center', gap:20}}>

          <TouchableOpacity style={styles.actionButton}
            onPress={() => toggleLikePost(item.id)}
          >
            <Icon name="heart-outline" size={20} color={isLiked[item.id]?"#21c5db":"#9095A0FF"} />
            <Text style={styles.actionText}>{item.likes}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => openComments(item.id,item.commentsData)}>
            <Icon name="chatbubble-outline" size={20} color="#9095A0FF" />
            <Text style={styles.actionText}>{item.commentsData.length}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="repeat-outline" size={20} color="#9095A0FF" />
            <Text style={styles.actionText}>{item.shares}</Text>
          </TouchableOpacity>
        </View>
        <Icon name="ellipsis-horizontal" size={25} color="#888" />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={feedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={[styles.listContainer,{paddingHorizontal:20}]}
        showsVerticalScrollIndicator = {false}
      />

      <Modal visible={isModalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalOverlay}>
          <TouchableOpacity
            style={styles.modalBackground}
            onPress={() => setModalVisible(false)}
          />
          <View style={styles.modalContent}>
            
            <View style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginBottom:10}}>
              <Text style={styles.commentTitle}>{selectedComments.length} comments</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <AntDesign name="down" size={30} color="#000" />
              </TouchableOpacity>
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
              {selectedComments.map((comment) => (
                <View key={comment.id} style={styles.commentContainer}>
                  <Image
                    source={comment.image_user}
                    style={styles.commentAvatar}
                  />
                  <View style={{ flex: 1 }}>
                    <View
                      style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={{ fontWeight: 'bold' }}>
                        {comment.username}
                      </Text>
                      <Text style={{ paddingLeft: 5 }}>{comment.text}</Text>
                    </View>

                    <View style={styles.commentInfo}>
                      <Text style={styles.commentTime}>{comment.time}</Text>
                      <Text style={styles.commentActions}>{comment.likes}</Text>
                      <Text style={styles.commentActions}>Reply</Text>
                    </View>
                  </View>
                  <TouchableOpacity onPress={() => toggleCommentLike(comment.id)}>
                    <Icon name="heart-outline" size={18} color={isLikedComment[comment.id] ? "#21c5db":"#9095A0FF"} />
                  </TouchableOpacity>
                </View>
              ))}
            </ScrollView>
            <View style={styles.inputContainer}>
              <Image source={require('../assets/image/Feed - Comment on an Audio/Avatar 13.png')} />
              <TextInput
                placeholder="Write a comment..."
                style={styles.input}
                value={textComment}
                onChangeText={setTextComment}
              />
              <TouchableOpacity onPress={() => addComment(idFeed,textComment)}>
                <Icon name="send" size={20} color="#007AFF" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
         
        <Footer 
        
        navigateToScreen={(screen) => navigation.navigate(screen)}
        activeScreen={'Feed'}
        showMusicInfo={false}
      />
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:StatusBar.currentHeight
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
  },
  backButton: {
    marginRight: 8,
  },
  feedTitle: {
    fontSize: 24,
    fontWeight: '500'
  },
  listContainer: {
    paddingBottom: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth: 1,
    borderColor: 'rgb(175, 179, 182)',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 20,
  },
  footerItem: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 25,
    height: 25,
  },
  footerText: {
    fontSize: 10,
    textAlign: 'center',
    marginTop: 4,
  },
  postContainer: {
    borderRadius: 8,
    marginBottom: 16,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  userInfo: {
    flex: 1,
    marginLeft: 8,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 24,
    paddingRight:10
  },
  postTime: {
    color: '#888',
    fontSize: 12,
    padding: 5

  },
  postImage: {
    width: '100%',
    height: height*0.35,
  },
  titleContainer: {
    padding: 20,
    backgroundColor: '#00000080',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  artist: {
    color: 'white',
    paddingTop: 3,
    fontSize: 16,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  statText: {
    color: '#fff',
    fontSize: 16,
  },
  duration: {
    color: '#fff',
    fontSize: 16,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionText: {
    marginLeft: 4,
    color: '#000',
    fontSize: 16,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
  },
  modalBackground: {
    flex: 1,
  },
  modalContent: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    height: height * 0.65,
  },

  commentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 16,
  },
  commentContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-start',
  },
  commentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 8,
  },
  commentInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  commentTime: {
    color: '#888',
    fontSize: 12,
  },
  commentActions: {
    marginLeft: 16,
    color: '#007AFF',
    fontSize: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ddd',
    justifyContent: 'space-between',
    gap: 16
  },
  input: {
    flex: 1,
    padding: 8,
    paddingLeft: 16,
    borderWidth: 0.5,
    borderRadius: 32,
    borderColor: '#BCC1CAFF',
    height: 50,
    width:'85%',
    fontSize:18
  },
});

export default Feed;
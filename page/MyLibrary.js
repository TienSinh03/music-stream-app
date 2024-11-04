import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import IconFe from "react-native-vector-icons/Feather";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconIon from "react-native-vector-icons/Ionicons";
import IconFnA from "react-native-vector-icons/FontAwesome";
import { songs } from "../data/data_audio";

const screenWidth = Dimensions.get("window").width;

export default function MyLibrary() {
  const [isFollowing, setIsFollowing] = useState(false);

  const toggleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const renderSongItem = ({ item }) => (
    <TouchableOpacity style={styles.musicItem}>
      <View style={styles.musicInfo}>
        <Image source={item.image} style={styles.musicImage} />
        <View>
          <Text style={styles.musicTitle}>{item.title}</Text>
          <Text style={styles.musicArtist}>{item.artist}</Text>
          <View style={styles.musicDetails}>
            <IconFe name="play" size={16} color="#9095A0FF" />
            <Text style={styles.musicDetailText}>{item.plays}</Text>
            <IconFnA name="circle" size={10} color="#9095A0FF" />
            <Text style={styles.musicDetailText}>{item.duration}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity>
        <IconAnt name="heart" size={15} style={styles.userIcon} color="#01bdd6" />
      </TouchableOpacity>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <View style={{  flexDirection: "row",  alignItems: "center", justifyContent: "space-between"}}>
        <Text style={styles.artistName}>Your Library</Text>
        <View style={styles.inputSearch}>
            <TextInput
            placeholder="What you want to library"
            style={styles.textInputSearch}
            />
            <IconFe name="search" size={20} color="#BCC1CAFF" />
        </View>
      </View>


        <View style={styles.categoryContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryRow}
          >
            {["Playlists", "New tag", "Songs", "Albums", "Artists"].map(item => (
              <TouchableOpacity key={item} style={styles.category}>
                <Text style={styles.categoryText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <TouchableOpacity style={styles.artistRow}>
          <Image
            source={require("../assets/image/Audio Listing - Search Results/Image 85.png")}
            resizeMode="stretch"
            style={styles.artistImage}
          />
          <View style={styles.artistInfo}>
            <Text style={styles.artistName}>Mer Watson</Text>
            <View style={styles.followersRow}>
              <IconAnt name="user" size={15} style={styles.userIcon} />
              <Text style={styles.followersText}>1.234K Followers</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.followButton} onPress={toggleFollow}>
            <Text style={styles.followButtonText}>
              {isFollowing ? 'Unfollow' : 'Follow'}
            </Text>
          </TouchableOpacity>
        </TouchableOpacity>

        <FlatList
          data={songs}
          renderItem={renderSongItem}
          keyExtractor={(item) => item.id.toString()}
          scrollEnabled={false}
          style={{ marginBottom: 80 }} // Avoid content being hidden by footer
        />
      </ScrollView>

      <View style={styles.footer}>
          <TouchableOpacity style={styles.footerButton}>
            <IconAnt name="home" size={25} color="#565E6CFF" />
            <Text style={styles.footerText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <IconFe name="search" size={25} color="#565E6CFF" />
            <Text style={styles.footerText}>Search</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <IconAnt name="switcher" size={25} color="#565E6CFF" />
            <Text style={styles.footerText}>Feed</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.footerButton}>
            <IconIon name="library-outline" size={25} color="#21c5db" />
            <Text style={styles.footerTextActive}>Library</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
}

// Styles remain unchanged

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  scrollView: {
    flex: 1,
    paddingTop: 13,
    paddingHorizontal: 20,
  },
  inputSearch: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BCC1CAFF",
    padding: 10,
    borderRadius: 22,
    marginVertical: 11,
  },
  textInputSearch: {
    marginLeft: 10,
    // flex: 1,
    color: "#171A1FFF",
  },
  categoryContainer: {
    marginBottom: 20,
  },
  categoryRow: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  category: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#f2f2f2",
    borderRadius: 15,
    marginHorizontal: 5,
  },
  categoryText: {
    color: "#171A1FFF",
    fontSize: 14,
    fontWeight: "500",
  },
  artistRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
  },
  artistImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  artistInfo: {
    flex: 1,
  },
  artistName: {
    fontSize: 16,
    fontWeight: "500",
    color: "#171A1FFF",
  },
  followersRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  userIcon: {
    marginRight: 5,
  },
  followersText: {
    color: "#565E6CFF",
  },
  followButton: {
    padding: 10,
    backgroundColor: "#171a1f",
    borderRadius: 15,
  },
  followButtonText: {
    color: "#FFFFFF",
    fontWeight: "500",
  },
  musicItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "#f0f0f0",
  },
  musicInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  musicImage: {
    width: 70,
    height: 70,
    borderRadius: 5,
    marginRight: 15,
  },
  musicTitle: {
    fontSize: 16,
    fontWeight: "500",
    color: "#171A1FFF",
  },
  musicArtist: {
    color: "#565E6CFF",
  },
  musicDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  musicDetailText: {
    marginLeft: 5,
    color: "#565E6CFF",
  },
  menuIcon: {
    width: 25,
    height: 25,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderColor: "#E0E0E0",
  },
  footerButton: {
    alignItems: "center",
  },
  footerText: {
    color: "#565E6CFF",
    fontSize: 12,
  },
  footerTextActive: {
    color: "#21c5db",
    fontSize: 12,
  },
});

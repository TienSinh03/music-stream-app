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
import React from "react";
import IconFe from "react-native-vector-icons/Feather";
import IconAnt from "react-native-vector-icons/AntDesign";
import IconIon from "react-native-vector-icons/Ionicons";
import IconFnA from "react-native-vector-icons/FontAwesome";

const screenWidth = Dimensions.get("window").width;

export default function MyLibrary() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Search Bar */}
        <View style={styles.inputSearch}>
          <IconFe name="search" size={20} color="#BCC1CAFF" />
          <TextInput
            placeholder="What you want to listen to"
            style={styles.textInputSearch}
          />
        </View>

        {/* Category Row */}
        <View style={styles.categoryContainer}>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoryRow}
          >
            {["Playlists", "New tag", "Songs", "Albums", "Artists", "Artists","Artists","Artists"].map(
              (item) => (
                <TouchableOpacity key={item} style={styles.category}>
                  <Text style={styles.categoryText}>{item}</Text>
                </TouchableOpacity>
              )
            )}
          </ScrollView>
        </View>

        {/* Artist Item */}
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
          <TouchableOpacity style={styles.followButton}>
            <Text style={styles.followButtonText}>Follow</Text>
          </TouchableOpacity>
        </TouchableOpacity>

        {/* Music Item */}
        {[...Array(6)].map((_, index) => (
          <MusicItem key={index} />
        ))}
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        {[
          { icon: <IconAnt name="home" />, label: "Home" },
          { icon: <IconFe name="search" color="#21c5db" />, label: "Search" },
          { icon: <IconAnt name="switcher" />, label: "Feed" },
          { icon: <IconIon name="library-outline" />, label: "Library" },
        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.footerButton}>
            {item.icon}
            <Text style={index === 1 ? styles.footerTextActive : styles.footerText}>{item.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

// Reusable MusicItem Component
const MusicItem = () => (
  <TouchableOpacity style={styles.musicItem}>
    <View style={styles.musicInfo}>
      <Image
        source={require("../assets/image/Audio Listing - Search Results/Image 84.png")}
        style={styles.musicImage}
      />
      <View>
        <Text style={styles.musicTitle}>Title</Text>
        <Text style={styles.musicArtist}>Artist</Text>
        <View style={styles.musicDetails}>
          <IconFe name="play" size={16} color="#9095A0FF" />
          <Text style={styles.musicDetailText}>playsM</Text>
          <IconFnA name="circle" size={10} color="#9095A0FF" />
          <Text style={styles.musicDetailText}>duration</Text>
        </View>
      </View>
    </View>
    <TouchableOpacity>
      <Image
        source={require("../assets/image/Playlist Details - Audio Listing/Menu 5 2.png")}
        style={styles.menuIcon}
      />
    </TouchableOpacity>
  </TouchableOpacity>
);

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
    flex: 1,
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
    backgroundColor: "#21c5db",
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

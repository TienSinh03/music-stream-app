import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView, StatusBar , ScrollView} from 'react-native';
import { FontAwesome, MaterialIcons, AntDesign } from '@expo/vector-icons'; // Icon library
import IconAnt from "react-native-vector-icons/AntDesign";
import IcontSimLC from "react-native-vector-icons/SimpleLineIcons";
const Feed = () => {
    return (
        <SafeAreaView style={styles.container}>
            
            <ScrollView style={{marginHorizontal: 20}} showsVerticalScrollIndicator={false}>

            <View style={styles.card}>
                {/* Header */}
                <View style={styles.header}>
                    <Image
                        source={require('../assets/image/Home - Audio Listing/Avatar 3.png')} // Adjust path as needed
                        style={styles.profileImage}
                    />
                    <View style={styles.userInfo}>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.username}>Jessica Gonzalez</Text>
                            <FontAwesome name="check-circle" size={14} color="#4CAF50" style={styles.verifiedIcon} />
                        </View>
                        <Text style={styles.postTime}>Posted a track • 3d</Text>
                    </View>
                </View>

                {/* Main Image */}
                <Image source={require('../assets/image/Feed - Audio Listing/Image 93.png')} resizeMode="stretch" style={{width:'100%', }}/>

        
                {/* Track Information Overlay */}
                <View style={styles.trackInfoOverlay}>
                    <Text style={styles.trackTitle}>FLOWER</Text>
                    <View style={styles.trackStats}>
                            <Text style={styles.trackArtist}>Jessica Gonzalez</Text>


                        <View style={styles.duoi}>
                             <MaterialIcons name="play-arrow" size={16} color="#fff" />
                            <Text style={styles.trackPlays}>125</Text>
                            <Text style={styles.trackDuration}>• 05:15</Text>
                        </View>
                       
                    </View>
                </View>

                {/* Footer with Like, Comment, and Share */}
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerIcon}>
                        <AntDesign name="hearto" size={20} color="#555" />
                        <Text style={styles.footerText}>20</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerIcon}>
                        <MaterialIcons name="comment" size={20} color="#555" />
                        <Text style={styles.footerText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerIcon}>
                        <IconAnt name="reload1" size={20} color="#9095A0FF" />
                        <Text style={styles.footerText}>1</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerIcon}>
                        <IcontSimLC name="options" size={20} color="#9095A0FF" />
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.card}>
                {/* Header */}
                <View style={styles.header}>
                    <Image
                        source={require('../assets/image/Home - Audio Listing/Avatar 3.png')} // Adjust path as needed
                        style={styles.profileImage}
                    />
                    <View style={styles.userInfo}>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.username}>Jessica Gonzalez</Text>
                            <FontAwesome name="check-circle" size={14} color="#4CAF50" style={styles.verifiedIcon} />
                        </View>
                        <Text style={styles.postTime}>Posted a track • 3d</Text>
                    </View>
                </View>

                {/* Main Image */}
                <Image source={require('../assets/image/Feed - Audio Listing/Image 93.png')} resizeMode="stretch" style={{width:'100%', }}/>

        
                {/* Track Information Overlay */}
                <View style={styles.trackInfoOverlay}>
                    <Text style={styles.trackTitle}>FLOWER</Text>
                    <View style={styles.trackStats}>
                            <Text style={styles.trackArtist}>Jessica Gonzalez</Text>


                        <View style={styles.duoi}>
                             <MaterialIcons name="play-arrow" size={16} color="#fff" />
                            <Text style={styles.trackPlays}>125</Text>
                            <Text style={styles.trackDuration}>• 05:15</Text>
                        </View>
                       
                    </View>
                </View>

                {/* Footer with Like, Comment, and Share */}
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerIcon}>
                        <AntDesign name="hearto" size={20} color="#555" />
                        <Text style={styles.footerText}>20</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerIcon}>
                        <MaterialIcons name="comment" size={20} color="#555" />
                        <Text style={styles.footerText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerIcon}>
                        <IconAnt name="reload1" size={20} color="#9095A0FF" />
                        <Text style={styles.footerText}>1</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerIcon}>
                        <IcontSimLC name="options" size={20} color="#9095A0FF" />
                    </TouchableOpacity>
                </View>
            </View>


            <View style={styles.card}>
                {/* Header */}
                <View style={styles.header}>
                    <Image
                        source={require('../assets/image/Home - Audio Listing/Avatar 3.png')} // Adjust path as needed
                        style={styles.profileImage}
                    />
                    <View style={styles.userInfo}>
                        <View style={styles.usernameContainer}>
                            <Text style={styles.username}>Jessica Gonzalez</Text>
                            <FontAwesome name="check-circle" size={14} color="#4CAF50" style={styles.verifiedIcon} />
                        </View>
                        <Text style={styles.postTime}>Posted a track • 3d</Text>
                    </View>
                </View>

                {/* Main Image */}
                <Image source={require('../assets/image/Feed - Audio Listing/Image 93.png')} resizeMode="stretch" style={{width:'100%', }}/>

        
                {/* Track Information Overlay */}
                <View style={styles.trackInfoOverlay}>
                    <Text style={styles.trackTitle}>FLOWER</Text>
                    <View style={styles.trackStats}>
                            <Text style={styles.trackArtist}>Jessica Gonzalez</Text>


                        <View style={styles.duoi}>
                             <MaterialIcons name="play-arrow" size={16} color="#fff" />
                            <Text style={styles.trackPlays}>125</Text>
                            <Text style={styles.trackDuration}>• 05:15</Text>
                        </View>
                       
                    </View>
                </View>

                {/* Footer with Like, Comment, and Share */}
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.footerIcon}>
                        <AntDesign name="hearto" size={20} color="#555" />
                        <Text style={styles.footerText}>20</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerIcon}>
                        <MaterialIcons name="comment" size={20} color="#555" />
                        <Text style={styles.footerText}>3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerIcon}>
                        <IconAnt name="reload1" size={20} color="#9095A0FF" />
                        <Text style={styles.footerText}>1</Text>

                    </TouchableOpacity>
                    <TouchableOpacity style={styles.footerIcon}>
                        <IcontSimLC name="options" size={20} color="#9095A0FF" />
                    </TouchableOpacity>
                </View>
            </View>

            
            </ScrollView>

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight,
    },
    card: {
        // backgroundColor: '#fff',
        // borderRadius: 10,
        padding: 15,
        marginVertical: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    userInfo: {
        flexDirection: 'column',
    },
    usernameContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    username: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    verifiedIcon: {
        marginLeft: 4,
    },
    postTime: {
        color: '#777',
        fontSize: 12,
    },
    duoi:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        // width: '100%',
    },
    mainImage: {
        width: '100%',
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },
    trackInfoOverlay: {
        position: 'absolute',
        bottom: 45,
        left: 15,
        // adjust this value to create space above the footer
        // left: 0,
        // right: 0,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        width: '100%',
        // borderBottomLeftRadius: 10,
        // borderBottomRightRadius: 10,
        
    },
    trackTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    trackArtist: {
        color: '#ccc',
        fontSize: 14,
    },
    trackStats: {
        flexDirection: 'row',
        alignItems: 'center',
        // marginTop: 5,
        justifyContent: 'space-evenly',
        width: '100%',

    },
    trackPlays: {
        color: '#bbb',
        fontSize: 12,
        // marginLeft: 5,
    },
    trackDuration: {
        color: '#bbb',
        fontSize: 12,
        // marginLeft: 10,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        paddingHorizontal: 5,
    },
    footerIcon: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    footerText: {
        color: '#555',
        fontSize: 14,
        marginLeft: 5,
    },
});

export default Feed;

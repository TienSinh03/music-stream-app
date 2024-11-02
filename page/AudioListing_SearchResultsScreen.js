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
    ImageBackground,
    Dimensions,
  } from "react-native";
  import React, { useEffect, useState } from "react";
  
  import IconFe from "react-native-vector-icons/Feather";
  import IconAnt from "react-native-vector-icons/AntDesign";
  import IconIon from "react-native-vector-icons/Ionicons";
  import IconFnA from "react-native-vector-icons/FontAwesome";
  import IconEnty from "react-native-vector-icons/Entypo";

  import { chart_list,songs } from "../data/data_audio";
  
  const screenWith = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;

  
  export default function AudioListing_SearchResultsScreen({navigation,route}) {
        

    return (
        <SafeAreaView 
        style={{
            flex: 1,
            backgroundColor: "#FFFFFF",
        }}>
        <ScrollView  
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
                paddingTop: 13,
                shadowColor: "#120F281C",
                shadowOpacity: 0.1,
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowRadius: 6,
                elevation: 6,
            }}>
            <View 
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 85,
                    marginHorizontal: 17,
                }}>
                <Text 
                    style={{
                        color: "#1D1B20",
                        fontSize: 14,
                        fontWeight: "bold",
                        marginRight: 4,
                        flex: 1,
                    }}>
                    {"9:30"}
                </Text>
                <Image
                    source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                    resizeMode = {"stretch"}
                    style={{
                        width: 24,
                        height: 24,
                        marginRight: 113,
                    }}
                />
                <View 
                    style={{
                        width: 33,
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: 5,
                    }}>
                    <View 
                        style={{
                            flex: 1,
                        }}>
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 17,
                                height: 17,
                            }}
                        />
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 17,
                                height: 14,
                            }}
                        />
                    </View>
                </View>
                <Image
                    source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                    resizeMode = {"stretch"}
                    style={{
                        width: 8,
                        height: 15,
                    }}
                />
            </View>
            <View 
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: 20,
                    marginHorizontal: 20,
                }}>
                <View 
                    style={{
                        width: 67,
                        paddingTop: 21,
                    }}>
                    <Text 
                        style={{
                            color: "#01BDD6",
                            fontSize: 14,
                            fontWeight: "bold",
                            marginBottom: 13,
                            marginLeft: 24,
                        }}>
                        {"All"}
                    </Text>
                    <View 
                        style={{
                            height: 4,
                            backgroundColor: "#01BDD6",
                        }}>
                    </View>
                </View>
                <View 
                    style={{
                        width: 90,
                        alignItems: "center",
                        paddingVertical: 21,
                    }}>
                    <Text 
                        style={{
                            color: "#565E6C",
                            fontSize: 14,
                        }}>
                        {"Tracks"}
                    </Text>
                </View>
                <View 
                    style={{
                        width: 98,
                        alignItems: "center",
                        paddingVertical: 21,
                    }}>
                    <Text 
                        style={{
                            color: "#565E6C",
                            fontSize: 14,
                        }}>
                        {"Albums"}
                    </Text>
                </View>
                <View 
                    style={{
                        width: 90,
                        alignItems: "center",
                        paddingVertical: 21,
                    }}>
                    <Text 
                        style={{
                            color: "#565E6C",
                            fontSize: 14,
                        }}>
                        {"Artists"}
                    </Text>
                </View>
            </View>
            <View 
                style={{
                    flexDirection: "row",
                    marginBottom: 18,
                    marginHorizontal: 20,
                }}>
                <Image
                    source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                    resizeMode = {"stretch"}
                    style={{
                        borderRadius: 30,
                        width: 60,
                        height: 60,
                        marginRight: 13,
                    }}
                />
                <View 
                    style={{
                        flex: 1,
                        alignSelf: "flex-start",
                        marginTop: 16,
                        marginRight: 4,
                    }}>
                    <Text 
                        style={{
                            color: "#171A1F",
                            fontSize: 16,
                            marginBottom: 8,
                        }}>
                        {"Mer Watson"}
                    </Text>
                    <View 
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <View 
                            style={{
                                width: 7,
                                marginRight: 8,
                            }}>
                            <View 
                                style={{
                                    height: 4,
                                    borderColor: "#565E6C",
                                    borderWidth: 1,
                                    marginBottom: 2,
                                    marginHorizontal: 1,
                                }}>
                            </View>
                            <Image
                                source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                                resizeMode = {"stretch"}
                                style={{
                                    height: 3,
                                }}
                            />
                        </View>
                        <Text 
                            style={{
                                color: "#9095A0",
                                fontSize: 14,
                                flex: 1,
                            }}>
                            {"1.234K Followers"}
                        </Text>
                    </View>
                </View>
                <View 
                    style={{
                        width: 72,
                        alignSelf: "flex-start",
                        alignItems: "center",
                        backgroundColor: "#FFFFFF",
                        borderColor: "#9095A0",
                        borderRadius: 16,
                        borderWidth: 1,
                        paddingVertical: 12,
                        marginTop: 14,
                    }}>
                    <Text 
                        style={{
                            color: "#9095A0",
                            fontSize: 12,
                        }}>
                        {"Follow"}
                    </Text>
                </View>
            </View>
            <View 
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 19,
                    marginHorizontal: 20,
                }}>
                <Image
                    source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                    resizeMode = {"stretch"}
                    style={{
                        borderRadius: 4,
                        width: 60,
                        height: 60,
                        marginRight: 11,
                    }}
                />
                <View 
                    style={{
                        flex: 1,
                        marginRight: 4,
                    }}>
                    <Text 
                        style={{
                            color: "#171A1F",
                            fontSize: 16,
                            marginBottom: 6,
                            marginLeft: 2,
                        }}>
                        {"Me"}
                    </Text>
                    <Text 
                        style={{
                            color: "#565E6C",
                            fontSize: 12,
                            marginBottom: 7,
                        }}>
                        {"Jessica Gonzalez"}
                    </Text>
                    <View 
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            marginHorizontal: 1,
                        }}>
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 6,
                                height: 8,
                                marginRight: 7,
                            }}
                        />
                        <Text 
                            style={{
                                color: "#565E6C",
                                fontSize: 12,
                                marginRight: 11,
                            }}>
                            {"2,1M"}
                        </Text>
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 5,
                                height: 5,
                                marginRight: 10,
                            }}
                        />
                        <Text 
                            style={{
                                color: "#565E6C",
                                fontSize: 12,
                                flex: 1,
                            }}>
                            {"3:36"}
                        </Text>
                    </View>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                        marginRight: 4,
                    }}>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                        marginRight: 5,
                    }}>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                    }}>
                </View>
            </View>

            <View 
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 4,
                    paddingVertical: 2,
                    marginBottom: 18,
                    marginHorizontal: 20,
                }}>
                <Image
                    source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                    resizeMode = {"stretch"}
                    style={{
                        borderRadius: 4,
                        width: 60,
                        height: 60,
                        marginRight: 12,
                    }}
                />
                <View 
                    style={{
                        flex: 1,
                        marginRight: 4,
                    }}>
                    <Text 
                        style={{
                            color: "#171A1F",
                            fontSize: 16,
                            marginBottom: 6,
                            marginLeft: 1,
                        }}>
                        {"Eastss me"}
                    </Text>
                    <Text 
                        style={{
                            color: "#565E6C",
                            fontSize: 12,
                            marginBottom: 7,
                        }}>
                        {"Anthony Taylor"}
                    </Text>
                    <View 
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 6,
                                height: 8,
                                marginRight: 7,
                            }}
                        />
                        <Text 
                            style={{
                                color: "#565E6C",
                                fontSize: 12,
                                marginRight: 13,
                            }}>
                            {"9M"}
                        </Text>
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 5,
                                height: 5,
                                marginRight: 10,
                            }}
                        />
                        <Text 
                            style={{
                                color: "#565E6C",
                                fontSize: 12,
                                flex: 1,
                            }}>
                            {"07:48"}
                        </Text>
                    </View>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                        marginRight: 4,
                    }}>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                        marginRight: 5,
                    }}>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                    }}>
                </View>
            </View>

            <View 
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 4,
                    paddingVertical: 2,
                    marginBottom: 18,
                    marginHorizontal: 20,
                }}>
                <Image
                    source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                    resizeMode = {"stretch"}
                    style={{
                        borderRadius: 4,
                        width: 60,
                        height: 60,
                        marginRight: 12,
                    }}
                />
                <View 
                    style={{
                        flex: 1,
                        marginRight: 4,
                    }}>
                    <Text 
                        style={{
                            color: "#171A1F",
                            fontSize: 16,
                            marginBottom: 6,
                            marginLeft: 1,
                        }}>
                        {"Eastss me"}
                    </Text>
                    <Text 
                        style={{
                            color: "#565E6C",
                            fontSize: 12,
                            marginBottom: 7,
                        }}>
                        {"Anthony Taylor"}
                    </Text>
                    <View 
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 6,
                                height: 8,
                                marginRight: 7,
                            }}
                        />
                        <Text 
                            style={{
                                color: "#565E6C",
                                fontSize: 12,
                                marginRight: 13,
                            }}>
                            {"9M"}
                        </Text>
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 5,
                                height: 5,
                                marginRight: 10,
                            }}
                        />
                        <Text 
                            style={{
                                color: "#565E6C",
                                fontSize: 12,
                                flex: 1,
                            }}>
                            {"07:48"}
                        </Text>
                    </View>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                        marginRight: 4,
                    }}>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                        marginRight: 5,
                    }}>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                    }}>
                </View>
            </View>



            <View 
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    borderRadius: 4,
                    paddingVertical: 2,
                    marginBottom: 18,
                    marginHorizontal: 20,
                }}>
                <Image
                    source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                    resizeMode = {"stretch"}
                    style={{
                        borderRadius: 4,
                        width: 60,
                        height: 60,
                        marginRight: 12,
                    }}
                />
                <View 
                    style={{
                        flex: 1,
                        marginRight: 4,
                    }}>
                    <Text 
                        style={{
                            color: "#171A1F",
                            fontSize: 16,
                            marginBottom: 6,
                            marginLeft: 1,
                        }}>
                        {"Eastss me"}
                    </Text>
                    <Text 
                        style={{
                            color: "#565E6C",
                            fontSize: 12,
                            marginBottom: 7,
                        }}>
                        {"Anthony Taylor"}
                    </Text>
                    <View 
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 6,
                                height: 8,
                                marginRight: 7,
                            }}
                        />
                        <Text 
                            style={{
                                color: "#565E6C",
                                fontSize: 12,
                                marginRight: 13,
                            }}>
                            {"9M"}
                        </Text>
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 5,
                                height: 5,
                                marginRight: 10,
                            }}
                        />
                        <Text 
                            style={{
                                color: "#565E6C",
                                fontSize: 12,
                                flex: 1,
                            }}>
                            {"07:48"}
                        </Text>
                    </View>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                        marginRight: 4,
                    }}>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                        marginRight: 5,
                    }}>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                    }}>
                </View>
            </View>





            <View 
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 19,
                    marginHorizontal: 20,
                }}>
                <Image
                    source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                    resizeMode = {"stretch"}
                    style={{
                        borderRadius: 4,
                        width: 60,
                        height: 60,
                        marginRight: 13,
                    }}
                />
                <View 
                    style={{
                        flex: 1,
                        marginRight: 4,
                    }}>
                    <Text 
                        style={{
                            color: "#171A1F",
                            fontSize: 16,
                            marginBottom: 7,
                        }}>
                        {"Me Ali"}
                    </Text>
                    <Text 
                        style={{
                            color: "#565E6C",
                            fontSize: 12,
                            marginBottom: 7,
                        }}>
                        {"Pedro Moreno"}
                    </Text>
                    <View 
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 6,
                                height: 8,
                                marginRight: 7,
                            }}
                        />
                        <Text 
                            style={{
                                color: "#565E6C",
                                fontSize: 12,
                                marginRight: 13,
                            }}>
                            {"23M"}
                        </Text>
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 5,
                                height: 5,
                                marginRight: 10,
                            }}
                        />
                        <Text 
                            style={{
                                color: "#565E6C",
                                fontSize: 12,
                                flex: 1,
                            }}>
                            {"3:36"}
                        </Text>
                    </View>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                        marginRight: 4,
                    }}>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                        marginRight: 5,
                    }}>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                    }}>
                </View>
            </View>
            <View 
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginBottom: 19,
                    marginHorizontal: 20,
                }}>
                <Image
                    source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                    resizeMode = {"stretch"}
                    style={{
                        borderRadius: 4,
                        width: 60,
                        height: 60,
                        marginRight: 13,
                    }}
                />
                <View 
                    style={{
                        flex: 1,
                        marginRight: 4,
                    }}>
                    <Text 
                        style={{
                            color: "#171A1F",
                            fontSize: 16,
                            marginBottom: 6,
                        }}>
                        {"Me quis a"}
                    </Text>
                    <Text 
                        style={{
                            color: "#565E6C",
                            fontSize: 12,
                            marginBottom: 7,
                        }}>
                        {"Elena Jimenez"}
                    </Text>
                    <View 
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 6,
                                height: 8,
                                marginRight: 8,
                            }}
                        />
                        <Text 
                            style={{
                                color: "#565E6C",
                                fontSize: 12,
                                marginRight: 10,
                            }}>
                            {"10M"}
                        </Text>
                        <Image
                            source = {{uri: "https://i.imgur.com/1tMFzp8.png"}} 
                            resizeMode = {"stretch"}
                            style={{
                                width: 5,
                                height: 5,
                                marginRight: 10,
                            }}
                        />
                        <Text 
                            style={{
                                color: "#565E6C",
                                fontSize: 12,
                                flex: 1,
                            }}>
                            {"06:22"}
                        </Text>
                    </View>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                        marginRight: 4,
                    }}>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                        marginRight: 5,
                    }}>
                </View>
                <View 
                    style={{
                        width: 2,
                        height: 2,
                        borderColor: "#565E6C",
                        borderWidth: 1,
                    }}>
                </View>
            </View>
           


        </ScrollView>
        <View style={styles.footer}>
          {/** button home */}
          <TouchableOpacity style={{alignItems:'center'}}>
            <IconAnt name="home" size={25} color="#21c5db"/>
            <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:'#21c5db'}}>Home</Text>
          </TouchableOpacity>
  
          {/** button search */}
          <TouchableOpacity style={{alignItems:'center'}}>
            <IconFe name="search" size={25} color="#565E6CFF"/>
            <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:'#565E6CFF'}}>Search</Text>
          </TouchableOpacity> 
  
          {/** button feed */}
          <TouchableOpacity style={{alignItems:'center'}}>
            <IconAnt name="switcher" size={25} color="#565E6CFF"/>
            <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:'#565E6CFF'}}>Feed</Text>
          </TouchableOpacity>
  
          {/** button library */}
          <TouchableOpacity style={{alignItems:'center'}}>
            <IconIon name="library-outline" size={25} color="#565E6CFF"/>
            <Text style={{fontSize:14, lineHeight:24, fontWeight:'400', color:'#565E6CFF'}}>Library</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal:20
    },
    viewInfo:{marginVertical: 25, display:'flex', flexDirection:'row', alignItems:'center', gap:20},
    viewImageList:{width:screenWith*0.31,height:screenHeight*0.14, alignItems:'center', justifyContent:'center'},
    textNameList_Image:{color:'white', fontSize: 22, lineHeight:30,fontWeight:'bold', paddingBottom:15},
    textTitleList:{fontSize: 24, lineHeight:30,fontWeight:'bold', color:'#171A1FFF'},
    text:{fontSize: 16, lineHeight:24,fontWeight:'400', color:'#565E6CFF'},
    footer:{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center',paddingHorizontal:55,paddingVertical:20,backgroundColor:'white', borderTopWidth:1, borderColor:'#C4C4C4'}
})
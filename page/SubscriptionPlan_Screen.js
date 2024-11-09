import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    ImageBackground,
    Dimensions,
  } from "react-native";
  import React from "react";
  import IconAnt from "react-native-vector-icons/AntDesign";
  
  const screenWidth = Dimensions.get("window").width;
  const screenHeight = Dimensions.get("window").height;
  
  export default function SubscriptionPlan({ navigation, route }) {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground
          source={require("../assets/image/Subscription Plans/Image 116.png")}
          style={styles.imageBackground}
        >
          <View style={styles.mainContent}>
            {/* Text title */}
            <Text style={styles.title}>Unlimited {"\n"} music selections</Text>
  
            {/* Subscription Contents */}
            <ScrollView
              style={styles.scrollContainer}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {/* Subscription 1 */}
              <View style={styles.subscriptionCard}>
                <Text style={styles.cardTitle}>Premium</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.freeTrial}>Free for 1 month</Text>
                  <Text style={styles.priceText}>$12.99/ month</Text>
                </View>
  
                {/* Features */}
                <View style={styles.featuresContainer}>
                  {[
                    "Ad-free listening",
                    "Download to listen offline",
                    "Access full catalog Premium",
                    "High sound quality",
                    "Cancel anytime",
                  ].map((feature, index) => (
                    <View style={styles.featureItem} key={index}>
                      <IconAnt name="check" size={20} color="#FF7AE2FF" />
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>
  
                {/* Button */}
                <TouchableOpacity style={styles.subscribeButton}>
                  <Text style={styles.subscribeText}>Subscribe now</Text>
                </TouchableOpacity>
              </View>
  
              {/* Subscription 2 */}
              <View style={[styles.subscriptionCard, {marginLeft: 30}]}>
                <Text style={styles.cardTitle}>Premium</Text>
                <View style={styles.priceContainer}>
                  <Text style={styles.freeTrial}>Free for 1 month</Text>
                  <Text style={styles.priceText}>$12.99/ month</Text>
                </View>
  
                {/* Features */}
                <View style={styles.featuresContainer}>
                  {[
                    "Ad-free listening",
                    "Download to listen offline",
                    "Access full catalog Premium",
                    "High sound quality",
                    "Cancel anytime",
                  ].map((feature, index) => (
                    <View style={styles.featureItem} key={index}>
                      <IconAnt name="check" size={20} color="#FF7AE2FF" />
                      <Text style={styles.featureText}>{feature}</Text>
                    </View>
                  ))}
                </View>
  
                {/* Button */}
                <TouchableOpacity style={styles.subscribeButton}>
                  <Text style={styles.subscribeText}>Subscribe now</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
  
            {/* Title header */}
            <Text style={styles.headerText}>...</Text>
  
            {/* Button back home */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Text style={styles.subscribeText}>Back home</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFFFFF",
    },
    imageBackground: {
      width: screenWidth,
      height: screenHeight,
      paddingTop: StatusBar.currentHeight || 0,
      resizeMode: "contain",
    },
    mainContent: {
      display: "flex",
      alignItems: "center",
    },
    title: {
      fontSize: 36,
      lineHeight: 52,
      fontWeight: "bold",
      color: "#FFFFFF",
      textAlign: "center",
      marginTop: screenWidth * 0.2,
      paddingBottom: screenWidth * 0.075,
    },
    scrollContainer: {
      marginLeft: 55,
    },
    subscriptionCard: {
      width: screenHeight * 0.34,
      height: screenHeight * 0.43,
      backgroundColor: "#FFFFFF",
      borderRadius: 10,
      paddingVertical: 35,
      paddingHorizontal: 25,
    },
    cardTitle: {
      fontSize: 26,
      fontWeight: "bold",
      color: "#171A1FFF",
    },
    priceContainer: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 12,
    },
    freeTrial: {
      backgroundColor: "#FFF0FCFF",
      fontSize: 14,
      lineHeight: 20,
      fontWeight: "500",
      color: "#FF7AE2FF",
      paddingVertical: 5,
      paddingHorizontal: 8,
      borderRadius: 16,
    },
    priceText: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#171A1FFF",
    },
    featuresContainer: {
      paddingTop: 20,
      gap: 12,
    },
    featureItem: {
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      gap: 10,
    },
    featureText: {
      fontSize: 17,
      fontWeight: "400",
      color: "#171A1FFF",
    },
    subscribeButton: {
      width: "100%",
      paddingVertical: 9,
      backgroundColor: "#171A1FFF",
      borderRadius: 24,
      display: "flex",
      justifyContent: "center",
      marginTop: screenWidth * 0.12,
    },
    subscribeText: {
      fontSize: 19,
      fontWeight: "400",
      color: "#FFFFFF",
      textAlign: "center",
    },
    headerText: {
      textAlign: "center",
      fontSize: 45,
      color: "white",
      fontWeight: "bold",
    },
    backButton: {
      width: "65%",
      paddingVertical: 9,
      borderRadius: 24,
      display: "flex",
      justifyContent: "center",
      marginTop: screenWidth * 0.24,
    },
  });
  
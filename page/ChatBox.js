import React, { useState, useEffect } from "react";
import { 
  View, 
  Text, 
  TextInput, 
  StatusBar, 
  ScrollView, 
  ActivityIndicator, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  Linking 
} from "react-native";
import * as GoogleGenerativeAI from "@google/generative-ai";

export default function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [userInput, setUserInput] = useState("");

  const API_KEY = "AIzaSyDg98SbxPU6g64qC8X42D-THXUIGwYvstA";

  // Mảng các bài hát với ID và URL tải xuống
  const audios = [
    {
      id: "1",
      title: "Sai Cách Yêu",
      url: "https://drive.google.com/uc?export=download&id=1awdfWxb7S7_8UHjr_fcRdWs58Ul2Eefh",
    },
    {
      id: "2",
      title: "Sợ Tạm Mất Nhau",
      url: "https://drive.google.com/uc?export=download&id=115e4zjKlc4FgYEH68oEq6ONF66Og8t43",
    },
    {
      id: "3",
      title: "Thằng Hầu",
      url: "https://drive.google.com/uc?export=download&id=1d7hVtO5mWByP0O7RN16QS-f0t4bl1F3w",
    },
    {
      id: "4",
      title: "Thay Vì Tôi Yêu Cô Ấy",
      url: "https://drive.google.com/uc?export=download&id=1aa6R0PqnzAbHwk2GntqscOvpp454ItDV",
    },
    {
      id: "5",
      title: "Thích Thì Đến",
      url: "https://drive.google.com/uc?export=download&id=1TB6C8Jbcwq79Dj1aoYpf-P_jYclRbeDL",
    },
    {
      id: "6",
      title: "As it was",
      url: "https://drive.google.com/uc?export=download&id=1TB6C8Jbcwq79Dj1aoYpf-P_jYclRbeDL",
    },
  ];

  useEffect(() => {
    const initChat = async () => {
      try {
        const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
        setMessages([
          { text: "Xin chào! Tôi có thể giúp gì cho bạn?", user: false }
        ]);
      } catch (error) {
        console.error("Lỗi khi khởi tạo Google Generative AI:", error);
      }
    };

    initChat();
  }, []);

  const sendMessage = async () => {
    if (!userInput.trim()) return;
    setLoading(true);

    try {
      let responseText;

      if (userInput.toLowerCase().includes("bai hat da luu")) {
        // Trả về danh sách bài hát
        responseText = `Các bài hát đã lưu của bạn:\n${audios.map((audio, index) => `${index + 1}. ${audio.title}`).join("\n")}`;
      } else if (userInput.toLowerCase().includes("link download")) {
        // Trả về danh sách bài hát kèm nút tải xuống
        responseText = "Danh sách bài hát của bạn kèm nút tải xuống:\n" + 
          audios.map((audio, index) => 
            `${index + 1}. ${audio.title} ` + 
            `<TouchableOpacity onPress={() => Linking.openURL("${audio.url}")}>Tải xuống</TouchableOpacity>` 
          ).join("\n");
      } else {
        const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const result = await model.generateContent(userInput);
        responseText = result.response.text();
      }

      setMessages([
        ...messages, 
        { text: userInput, user: true }, 
        { text: responseText, user: false }
      ]);
    } catch (error) {
      console.error("Lỗi khi gọi API Google Generative AI:", error);
      setMessages([
        ...messages, 
        { text: userInput, user: true },
        { text: "Đã có lỗi xảy ra khi xử lý yêu cầu của bạn.", user: false }
      ]);
    }

    setLoading(false);
    setUserInput("");
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.chatContainer} showsVerticalScrollIndicator={false}>
        {messages.map((msg, index) => (
          <View key={index} style={[styles.messageContainer, msg.user ? styles.userMessage : styles.botMessage]}>
            <View style={styles.imageContainer}>
              <Image
                source={{ 
                  uri: msg.user 
                    ? "https://cdn-icons-png.flaticon.com/512/8345/8345328.png" 
                    : "https://bochickenstore.com/storage/large/ban-tai-khoan-gemini_1712822935.jpeg" 
                }}
                style={styles.avatar}
              />
            </View>
            <Text 
              style={[styles.messageText, msg.user ? styles.userText : styles.botText]}
              onPress={() => msg.text.includes("https://") && Linking.openURL(msg.text)}
            >
              {msg.text}
            </Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Nhập tin nhắn của bạn..."
          value={userInput}
          onChangeText={setUserInput}
          onSubmitEditing={sendMessage} // Gửi tin nhắn khi nhấn Enter
          returnKeyType="send" // Đổi nút "Enter" thành "Gửi"
        />
        <TouchableOpacity style={styles.sendButton} onPress={sendMessage}>
          <Text style={styles.sendButtonText}>Gửi</Text>
        </TouchableOpacity>
      </View>

      {loading && <ActivityIndicator size="large" color="#0000ff" />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "flex-end",
    marginTop: StatusBar.currentHeight || 0,
  },
  chatContainer: {
    flex: 1,
    marginBottom: 10,
  },
  messageContainer: {
    maxWidth: "75%",
    padding: 10,
    marginVertical: 5,
    borderRadius: 10,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  userMessage: {
    backgroundColor: "#DCF8C6",
    alignSelf: "flex-end",
  },
  botMessage: {
    backgroundColor: "#FFFFFF",
    alignSelf: "flex-start",
  },
  imageContainer: {
    marginRight: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  messageText: {
    fontSize: 16,
    lineHeight: 20,
  },
  userText: {
    color: "#000000",
  },
  botText: {
    color: "#0000ff",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 75,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
  },
  sendButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

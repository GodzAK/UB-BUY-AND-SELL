import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const HomePage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <View style={styles.imageWithTitle}>
          <Image source={require("./assets/unif1.jpg")} style={styles.image} />
          <Text style={styles.imageTitle}>Uniforms</Text>
        </View>
        <View style={styles.imageWithTitle}>
          <Image source={require("./assets/book.jpg")} style={styles.image} />
          <Text style={styles.imageTitle}>Books</Text>
        </View>
        <View style={styles.imageWithTitle}>
          <Image source={require("./assets/calcu.jpg")} style={styles.image} />
          <Text style={styles.imageTitle}>Other Items</Text>
        </View>
      </View>

      <Text style={styles.title}>Welcome to UBuy & Sell</Text>
      <Text style={styles.text}>
        <Text style={styles.subtitle}>Mission:</Text> The platform aims to offer a secure and user-friendly platform for students to exchange essential items, fostering a collaborative and entrepreneurial environment.
      </Text>
      <Text style={styles.text}>
        <Text style={styles.subtitle}>Vision:</Text>The University of Batangas aims to become the most trusted and efficient online marketplace for students, fostering community and supporting sustainable practices.
        </Text>
      <Text style={styles.text}>
        <Text style={styles.subtitle}>Philosophy:</Text> UBuy & Sell is a marketplace that promotes collaboration, trust, learning, personal development, and strengthening ties within the university community, fostering personal growth and personal development.
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CreateAccount")}
      >
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  imageWithTitle: {
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginHorizontal: 5,
    borderRadius: 8,
  },
  imageTitle: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "#800000",
    textAlign: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#800000",
    marginBottom: 20,
    textAlign: "center",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  subtitle: {
    fontWeight: "bold",
    color: "#800000",
  },
  button: {
    backgroundColor: "#800000",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default HomePage;

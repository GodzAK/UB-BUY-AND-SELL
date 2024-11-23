// Display detailed information about a product
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ProductDetails = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>{product.price}</Text>
      <Text style={styles.description}>This is a detailed description of the product.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontSize: 20,
    color: "#800000",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#666",
  },
});

export default ProductDetails;

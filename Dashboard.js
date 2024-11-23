import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const productsData = [
  {
    id: "1",
    title: "Used Textbook",
    category: "Books",
    price: "₱200",
    image: require("./assets/book.jpg"),
  },
  {
    id: "2",
    title: "Brand New Laptop",
    category: "Electronics",
    price: "₱10,000",
    image: require("./assets/laptop.jpg"),
  },
  {
    id: "3",
    title: "Second-Hand Uniform",
    category: "Uniforms",
    price: "₱320",
    image: require("./assets/unif1.jpg"),
  },
  {
    id: "4",
    title: "Calculator",
    category: "Other Items",
    price: "₱140",
    image: require("./assets/calcu.jpg"),
  },
];

const MarketplaceDashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productsData);
  const navigation = useNavigation();

  // Filter products by search query
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() !== "") {
      const filtered = productsData.filter((product) =>
        product.title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts(productsData);
    }
  };

  // Navigate to product details page
  const handleProductClick = (product) => {
    navigation.navigate("ProductDetails", { product });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Marketplace</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Search for products..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.productCard} onPress={() => handleProductClick(item)}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productPrice}>{item.price}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.addItemButton}
        onPress={() => navigation.navigate("AddItem")}
      >
        <Text style={styles.addItemButtonText}>+ Add New Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  searchInput: {
    height: 40,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 8,
    paddingLeft: 10,
    marginBottom: 20,
  },
  productCard: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    elevation: 3,
    alignItems: "center",
    padding: 10,
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },
  productPrice: {
    fontSize: 14,
    color: "#666",
    marginTop: 5,
    textAlign: "center",
  },
  addItemButton: {
    backgroundColor: "#800000",
    padding: 15,
    borderRadius: 8,
    marginTop: 20,
    alignItems: "center",
  },
  addItemButtonText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default MarketplaceDashboard;

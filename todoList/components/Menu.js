// Menu.js

import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Menu = ({ onLinkClick, onCloseMenu }) => {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={onCloseMenu} style={styles.closeButton}>
        <Text style={styles.closeButtonText}>X</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onLinkClick("Link 1")}>
        <Text style={styles.link}>Link 1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onLinkClick("Link 2")}>
        <Text style={styles.link}>Link 2</Text>
      </TouchableOpacity>
      {/* Add more links as needed */}
    </View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: 200, // Adjust width as needed
    backgroundColor: "#FFF",
    padding: 20,
    elevation: 3,
  },
  link: {
    fontSize: 16,
    marginBottom: 10,
  },
  closeButton: {
    position: "absolute",
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#CCCCCC",
    borderRadius: 15,
  },
  closeButtonText: {
    fontSize: 10,
  },
});

export default Menu;

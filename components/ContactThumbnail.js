import React, { Component } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";

export default class ContactThumbnail extends Component {
  render() {
    const { name, avatar, phone, onPress } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={styles.contact}>
          <Image style={styles.image} source={{ uri: avatar }} />
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.phone}>{phone}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  contact: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  name: {
    color: "white",
    fontSize: 20,
    fontWeight: "600"
  },
  phone: {
    color: "white",
    fontSize: 16
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: "white",
    marginHorizontal: 15
  }
});

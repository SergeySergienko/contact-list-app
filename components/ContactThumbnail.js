import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class ContactThumbnail extends Component {
  render() {
    const { name, avatar, phone } = this.props;
    return (
      <View style={styles.contact}>
        <Image style={styles.image} source={{ uri: avatar }} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.phone}>{phone}</Text>
      </View>
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
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "white"
  }
});

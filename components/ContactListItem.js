import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";

export default class ContactListItem extends Component {
  render() {
    const { name, avatar, phone } = this.props;
    return (
      <View style={styles.contact}>
        <Image style={styles.image} source={{ uri: avatar }} />
        <View style={styles.text}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.phone}>{phone}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contact: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
    height: 80,
    borderBottomColor: "#ddd",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  name: {
    color: "black",
    fontSize: 20,
    fontWeight: "600"
  },
  phone: {
    color: "blue",
    fontSize: 16
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    margin: 30
  },
  text: {
    flex: 1
  }
});

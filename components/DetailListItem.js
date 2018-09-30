import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default class DetailListItem extends Component {
  render() {
    const { icon, title, subtitle } = this.props;
    return (
      <View style={styles.contact}>
        <View style={styles.icon}>
          <MaterialIcons name={icon} size={32} color="black" />
        </View>
        <View style={styles.text}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
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
    height: 50,
    borderBottomColor: "#ddd",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "600"
  },
  subtitle: {
    color: "blue",
    fontSize: 16
  },
  text: {
    flex: 1
  },
  icon: {
    margin: 30
  }
});

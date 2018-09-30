import React, { Component } from "react";
import { Text, StyleSheet, View, ActivityIndicator } from "react-native";
import ContactThumbnail from "../components/ContactThumbnail";
import colors from "../utils/colors";
import { fetchRandomContact } from "../utils/api";

export default class User extends Component {
  static navigationOptions = {
    title: "Me",
    headerTintColor: "white",
    headerStyle: {
      backgroundColor: colors.blue
    }
  };
  state = {
    user: [],
    loading: true,
    error: false
  };
  async componentDidMount() {
    try {
      const user = await fetchRandomContact();
      this.setState({
        user,
        loading: false,
        error: false
      });
    } catch (e) {
      this.setState({
        loading: false,
        error: true
      });
    }
  }
  render() {
    const { user, loading, error } = this.state;
    const { avatar, name, phone } = user;
    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error...</Text>}
        {!loading && (
          <ContactThumbnail avatar={avatar} name={name} phone={phone} />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.blue
  }
});

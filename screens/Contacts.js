import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator
} from "react-native";

import ContactListItem from "../components/ContactListItem";
import { fetchContacts } from "../utils/api";

const keyExtractor = ({ phone }) => phone;

export default class Contacts extends Component {
  static navigationOptions = {
    title: "Contacts"
  };
  state = {
    contacts: [],
    loading: true,
    error: false
  };
  async componentDidMount() {
    try {
      const contacts = await fetchContacts();
      this.setState({
        contacts,
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
  renderContact = ({ item }) => {
    const {
      navigation: { navigate }
    } = this.props;
    const { name, avatar, phone, id } = item;
    return (
      <ContactListItem
        name={name}
        avatar={avatar}
        phone={phone}
        onPress={() => navigate("Profile", { contact: item })}
      />
    );
  };
  render() {
    const { contacts, loading, error } = this.state;
    // console.log("Contacts: ", contacts);
    const contactsSorted = contacts.sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    return (
      <View style={styles.container}>
        {loading && <ActivityIndicator size="large" />}
        {error && <Text>Error...</Text>}
        {!loading &&
          !error && (
            <FlatList
              data={contactsSorted}
              keyExtractor={keyExtractor}
              renderItem={this.renderContact}
            />
          )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white"
  }
});

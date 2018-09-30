import { TabNavigator, StackNavigator } from "react-navigation";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

import Contacts from "./screens/Contacts";
import Profile from "./screens/Profile";
import Favorites from "./screens/Favorites";
import User from "./screens/User";
import colors from "./utils/colors";

const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);
const ContactsScreens = StackNavigator(
  {
    Contacts: {
      screen: Contacts
    },
    Profile: {
      screen: Profile
    }
  },
  {
    initialRouteName: "Contacts",
    navigationOptions: {
      tabBarIcon: getTabBarIcon("list")
    }
  }
);
const FavoritesScreens = StackNavigator(
  {
    Favorites: {
      screen: Favorites
    },
    Profile: {
      screen: Profile
    }
  },
  {
    initialRouteName: "Favorites",
    navigationOptions: {
      tabBarIcon: getTabBarIcon("star")
    }
  }
);
const UserScreens = StackNavigator(
  {
    User: {
      screen: User
    }
  },
  {
    initialRouteName: "User",
    navigationOptions: {
      tabBarIcon: getTabBarIcon("person")
    }
  }
);

export default TabNavigator(
  {
    Contacts: {
      screen: ContactsScreens
    },
    Favotites: {
      screen: FavoritesScreens
    },
    User: {
      screen: UserScreens
    }
  },
  {
    initialRouteName: "Contacts",
    tabBarPosition: "bottom",
    tabBarOptions: {
      style: {
        backgroundColor: colors.greyLight
      },
      showLabel: false,
      showIcon: true,
      activeTintColor: colors.blue,
      inactiveTintColor: colors.greyDark,
      renderIndicator: () => null
    }
  }
);

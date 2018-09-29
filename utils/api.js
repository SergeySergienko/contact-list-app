export const fetchContacts2 = () => [
  {
    name: "Joe Smith",
    avatar: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    phone: "111"
  },
  {
    name: "Bob Marley",
    avatar: "https://randomuser.me/api/portraits/thumb/men/6.jpg",
    phone: "222"
  },
  {
    name: "Antony Hopkins",
    avatar: "https://randomuser.me/api/portraits/thumb/men/5.jpg",
    phone: "777"
  },
  {
    name: "Don Basten",
    avatar: "https://randomuser.me/api/portraits/thumb/men/15.jpg",
    phone: "050-111-11-88"
  }
];

export const fetchContacts = () => {
  return fetch("https://randomuser.me/api/?results=30")
    .then(res => res.json())
    .then(json => {
      return json.results.map(item => ({
        name: item.name.first,
        avatar: item.picture.thumbnail,
        phone: item.cell
      }));
    })
    .catch(e => console.log(e));
};

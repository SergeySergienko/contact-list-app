export const fetchContacts = () => {
  return fetch("https://randomuser.me/api/?results=30")
    .then(res => res.json())
    .then(json => {
      return json.results.map(item => ({
        name: capitalize(item.name.first) + " " + capitalize(item.name.last),
        avatar: item.picture.thumbnail,
        phone: item.phone,
        id: item.login.uuid,
        email: item.email,
        cell: item.cell,
        favorite: item.dob.age < 35 ? true : false
      }));
    })
    .catch(e => console.log(e));
};

export const fetchRandomContact = () => {
  return fetch("https://randomuser.me/api/")
    .then(res => res.json())
    .then(json => json.results[0])
    .then(contact => {
      const {
        name: { first, last },
        picture: { thumbnail },
        phone,
        email,
        cell
      } = contact;
      return {
        name: capitalize(first) + " " + capitalize(last),
        avatar: thumbnail,
        phone,
        email,
        cell
      };
    })
    .catch(e => console.log(e));
};

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

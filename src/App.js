import logo from "./logo.svg";
import { useState } from "react";
import contactsData from "./contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  function getRandom() {
    const random = Math.floor(Math.random() * contactsData.length);
    const randomItem = contactsData[random];
    return setContacts((prevState) => [...prevState, randomItem]);
  }

  function sortByPopularity() {
    const sorted = contacts.sort((item1, item2) =>
      item1.popularity < item2.popularity ? 1 : item1.popularity > item2.popularity ? -1 : 0
    );
    return setContacts(() => [...sorted]);
  }

  function sortByName() {
    const sorted = contacts.sort((item1, item2) =>
      item1.name > item2.name ? 1 : item1.name < item2.name ? -1 : 0
    );
    return setContacts(() => [...sorted]);
  }

  function deleteContact(itemName) {
    const filtered = contacts.filter((item) => {
      return item.name !== itemName;
    });
    setContacts(filtered);
  }

  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={getRandom}>Add a random contact</button>
      <button onClick={sortByPopularity}>Sort by populatiry</button>
      <button onClick={sortByName}>Sort by name</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Won Oscar</th>
          <th>Won Emmy</th>
        </tr>

        {contacts.map((item) => {
          return (
            <tr>
              <td>
                <img src={item.pictureUrl} width="50px" />
              </td>
              <td>{item.name}</td>
              <td>{Number(item.popularity.toFixed(2))}</td>
              <td>{item.wonOscar ? "🏆" : null}</td>
              <td>{item.wonEmmy ? "🏆" : null}</td>
              <td><button onClick={() => deleteContact(item.name)}>Delete</button></td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default App;

<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <add-friend @add-friend="addFriend"></add-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @delete-item="deleteFinal"
        @toggle-favorite="toggleFavoriteStatus"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true,
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: false,
        },
        {
          id: "manuel1",
          name: "Manuel Lorenz",
          phone: "0123 45678 91",
          email: "manuel@localhost.com",
          isFavorite: false,
        },
        {
          id: "julie1",
          name: "Julie Jones",
          phone: "0987 654421 23",
          email: "julie@localhost.com",
          isFavorite: false,
        },
      ],
    };
  },
  methods: {
    deleteFinal(friendID) {
      const toDelete = this.friends.findIndex(
        (friend) => friend.id === friendID
      );
      this.friends.splice(toDelete, 1);
    },
    toggleFavoriteStatus(friendID) {
      const found = this.friends.find((friend) => friend.id === friendID);
      found.isFavorite = !found.isFavorite;
    },
    addFriend(name, phone, email) {
      const friend = {
        id: Math.floor(Math.random() * 16777215).toString(16),
        name,
        phone,
        email,
        isFavorite: false,
      };
      this.friends.unshift(friend);
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li, #app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  margin: 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

</style>

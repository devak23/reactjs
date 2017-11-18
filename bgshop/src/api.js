import axios from "axios";

export default {
  games: {
    fetchAll: () =>
      axios.get("/api/unsafegames").then(response => response.data.games)
  }
};

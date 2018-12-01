const API_URL = "http://kanbanapi.pro-react.com";
const API_HEADERS = {
  "Content-Type": "application/json",
  Authorization: "someAuth1"
};

const API = {
  getTasks: function() {
    return fetch(API_URL + "/cards", { headers: API_HEADERS }).then(response =>
      response.json()
    );
  },
  addTask: function(cardId, newTask) {
    return fetch(`${API_URL}/cards/${cardId}/tasks`, {
      method: "post",
      headers: API_HEADERS,
      body: JSON.stringify(newTask)
    }).then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Server response wasn't OK");
      }
    });
  },
  deleteTask: function(cardId, taskId) {
    return fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
      method: "delete",
      headers: API_HEADERS
    });
  },
  toggleTask: function(cardId, taskId, newDoneValue) {
    return fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
      method: "put",
      headers: API_HEADERS,
      body: JSON.stringify({ done: newDoneValue })
    });
  }
};

export default API;

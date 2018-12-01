import KanbanData from "../kanban-data";

const API_URL = "http://kanbanapi.pro-react.com";
const API_HEADERS = {
  "Content-Type": "application/json",
  Authorization: "someAuth"
};

const API = {
  getTasks: function() {
    return KanbanData;
  },
  addTask: function(cardId, newTask) {
    return fetch(`${API_URL}/cards/${cardId}/tasks`, {
      method: "post",
      headers: `${API_HEADERS}`,
      body: JSON.stringify(newTask)
    }).then(response => response.json());
  },
  deleteTask: function(cardId, taskId) {
    return fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
      method: "delete",
      headers: `${API_HEADERS}`
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

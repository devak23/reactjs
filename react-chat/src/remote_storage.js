import database from "./database_creator";

let inital_data_loaded = false;

export function getMessages() {
  return database.ref('messages').once('value').then( data => {
    const messages = [];
    const values = data.val();
    for (let prop in values) {
      if ({}.hasOwnProperty.call(values, prop)) {
        messages.push(values[prop]);
      }
    }
    inital_data_loaded = true;
    return messages;
  });
}

export function getChannels() {
  return database.ref('channels').once('value').then( data => {
    const channels = [];
    const values = data.val();

    for (let prop in values) {
      if ({}.hasOwnProperty.call(values, prop)) {
          channels.push(values[prop]);
      }
    }
    return channels;
  });
}

export function saveMessage(message) {
  database.ref('messages').push(message);
}

export function onNewMessage(callback, delay=false) {
  database.ref('messages').on('child_added', (data) => {
    if (!inital_data_loaded) return;

    if (delay) {
      setTimeout(() => callback(data.val()), 3000);
    } else {
      callback(data.val());
    }
  });
}
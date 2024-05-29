//import { useState } from 'react';
//const [login, setLogin] = useState('');
//const [password, setPassword] = useState('');

function cheakOnline() {if (!navigator.onLine) {
    throw new Error("Нет интернета");
  }} 

function addBearer(token) {
    return `Bearer ${token}`
}

  export function registerUser( login, name, password ) {
  cheakOnline()
  return fetch("https://wedev-api.sky.pro/api/user", {
    method: "POST",
    body: JSON.stringify({
      "login": login,
      "name": name,
      "password": password
    }),
  }).then((response) => {
    if (response.status === 400) {
      throw new Error("Такой пользователь уже существует");
    } 
    return response.json();
  });
}


export function loginUser( login, password ) {
    
    cheakOnline()
    return fetch("https://wedev-api.sky.pro/api/user/login", {
      method: "POST",
      body: JSON.stringify({
        "login": login,
        "password": password
      }),
    }).then((response) => {
      return response.json();
    });
  }

   
  export function getCards(token) {
  cheakOnline()
  return fetch("https://wedev-api.sky.pro/api/kanban", {
    method: "GET",
    headers: {
      Authorization: addBearer(token),
    },
  }).then((response) => {
    if (response.status === 401) {
      throw new Error("Вы не зарегестрированы");
    } 
    return response.json();
  });
}

export function postCards(token, title, topic, status, text, date) {
  cheakOnline()
  return fetch("https://wedev-api.sky.pro/api/kanban", {
    method: "POST",
    headers: {
      Authorization: addBearer(token),
    },
    body: JSON.stringify({
      "title": title,
      "topic": topic,
      "status": status,
      "descriptoin": text,
      "date": date,
    }),
  }).then((response) => {
    if (response.status === 401) {
      throw new Error("Вы не зарегестрированы");
    } 
    return response.json();
  });
}

export function putCards( {id, token, title, topic, status, text, date} ) {
  cheakOnline()
  return fetch("https://wedev-api.sky.pro/api/kanban/" + id, {
    method: "PUT",
    headers: {
      Authorization: addBearer(token),
    },
    body: JSON.stringify({
      "title": title,
      "topic": topic,
      "status": status,
      "descriptoin": text,
      "date": date,
    }),
  }).then((response) => {
    if (response.status === 401) {
      throw new Error("Вы не зарегестрированы");
    } 
    return response.json();
  });
}

export function deleteCards( {id, token} ) {
  cheakOnline()
  return fetch("https://wedev-api.sky.pro/api/kanban/" + id, {
    method: "DELETE",
    headers: {
      Authorization: addBearer(token),
    },
  }).then((response) => {
    if (response.status === 401) {
      throw new Error("Вы не зарегестрированы");
    } 
    return response.json();
  });
}
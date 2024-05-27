//import { useState } from 'react';
//const [login, setLogin] = useState('');
//const [password, setPassword] = useState('');

function cheakOnline() {if (!navigator.onLine) {
    throw new Error("Нет интернета");
  }} 
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
    console.log(response)
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

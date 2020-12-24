import './style.scss';
import './resources/PermaSafe-Logo-FC-Medium.png';

console.log('Hello World');

import axios from 'axios';

const user = document.querySelector('#user');
const pass = document.querySelector('#pass');
const submit = document.querySelector('#submit');

submit.addEventListener('click', e => {
  //const url = `http://localhost:3000/dist_login?user=${user.value}&pass=${pass.value}`;
  const url = `http://localhost:3000/dist_login`;

  axios
    .get(url, {
      headers: {
        authorization: user.value + ':' + pass.value,
      },
    })
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });

  e.preventDefault();
});

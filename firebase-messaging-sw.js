importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.6.8/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: 'AAAAPnD6RSU:APA91bG_o9Wz7aG86HFKEjk0rE1p0J7jDjJ2Vj8--AaO4Iucn53lcvoHXnJ922iNgC8F5RRKqUqQGy3ArqkumSB-ZpDihne7fK8eFbpiQe_3IbBj0M24eUK76QTdIHGchnwWDoG3TMGs'
});

const messaging = firebase.messaging();

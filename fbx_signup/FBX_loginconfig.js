import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
        
const firebaseConfig = {
    apiKey: "AIzaSyCMUPLP2O0GlgH-AI0xSeWs0zX1GqWDnxI",
          authDomain: "fbx-pro-3e320.firebaseapp.com",
          databaseURL: "https://fbx-pro-3e320-default-rtdb.firebaseio.com",
          projectId: "fbx-pro-3e320",
          storageBucket: "fbx-pro-3e320.appspot.com",
          messagingSenderId: "396370789893",
          appId: "1:396370789893:web:64030bd0f384889731fe6c",
          measurementId: "G-TDS9D2QTBQ"
  };
        
          const app = initializeApp(firebaseConfig);
        
          import { getDatabase, ref, set, child, get }
             from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";
        
          const db = getDatabase();

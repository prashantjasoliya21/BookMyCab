// var db;
// $(document).ready(function () {
   
    
//     var request = indexedDB.open("MyDatabase", 1);
  
//     // Handle database creation or upgrade
//     request.onupgradeneeded = function (event) {
//       var db = event.target.result;
  
//       // Create an object store (similar to a table in relational databases)
//       var objectStore = db.createObjectStore("MyObjectStore", { keyPath: "id", autoIncrement: true });
  
//       // Define the schema of your data (you can add more fields as needed)
//       objectStore.createIndex("name", "name", { unique: false });
//       objectStore.createIndex("password", "password", { unique: false });
//       objectStore.createIndex("mNumber", "mNumber", { unique: false });
//       objectStore.createIndex("lName", "lName", { unique: false });
//       objectStore.createIndex("lNumber", "lNumber", { unique: false });
//     };
  
//     // Handle successful database opening
//     request.onsuccess = function (event) {
//        db = event.target.result;
  
      
//     };
  
//     // Handle errors
//     request.onerror = function (event) {
//       console.error("Error opening database:", event.target.error);
//     };
  
   
//   });
//   function addData(name,password,mnumber,lname,lnumber) {
//     var transaction = db.transaction(["MyObjectStore"], "readwrite");
//     var objectStore = transaction.objectStore("MyObjectStore");
  
//     // Sample data to be added
//     var data = { name: name, 
//     password: password,
//     mNumber:mnumber,
//     lName:lname,
//     lNumber:lnumber
//  };
  
//     // Use the add method without specifying a key, as it will be auto-generated
//     var request = objectStore.add(data);
  
//     // Handle the success or error of the add operation
//     request.onsuccess = function (event) {
//       console.log("Data added successfully! Key:", event.target.result);
//    fetchData();
//     };
  
//     request.onerror = function (event) {
//       console.error("Error adding data:", event.target.error);
//     };
//   }

//   // Function to fetch data from the MyObjectStore table
// function fetchData() {
//     var transaction = db.transaction(["MyObjectStore"], "readonly");
//     var objectStore = transaction.objectStore("MyObjectStore");

//     // Open a cursor to iterate over the data
//     var request = objectStore.openCursor();

//     request.onsuccess = function (event) {
//         var cursor = event.target.result;

//         if (cursor) {
//             // Access the data from the cursor
//             var data = cursor.value;
//             console.log("Fetched data:", data);

//             // Continue to the next item in the cursor
//             cursor.continue();
//         } else {
//             // No more items in the cursor
//             console.log("All data fetched");
//         }
//     };

//     request.onerror = function (event) {
//         console.error("Error fetching data:", event.target.error);
//     };
// }

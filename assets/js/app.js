// Initialize Firebase
var config = {
    apiKey: "AIzaSyBl--rw-S9R7psO8vmypIbceszjOZA4fe8",
    authDomain: "trainschedule-d6366.firebaseapp.com",
    databaseURL: "https://trainschedule-d6366.firebaseio.com/",
    projectId: "trainschedule-d6366",
    storageBucket: "",
    messagingSenderId: "103210355628"
};
firebase.initializeApp(config);








var database = firebase.database();

$("#submit-btn").on("click", function (event) {
    event.preventDefault();
    var trName = $("#train-name").val().trim();
    var trDest = $("#train-destination").val().trim();
    var trFirst = $("#train-first").val().trim();
    var trFreq = $("#train-freq").val().trim();
    // console.log(trName);
    // return false;

    // create new Train
    var newTrain = {
        trainName: trName,
        trainDest: trDest,
        trainFirst: trFirst,
        trainFreqency: trFirst,

    };
    // push newTrain to database
    database.ref().push(newTrain);

    console.log(newTrain.trainName);
    console.log(newTrain.trainDest);
    console.log(newTrain.trainFirst);
    console.log(newTrain.trainFreqency);
    



});
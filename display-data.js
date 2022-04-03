$(document).ready(function () {
    getData();
    });
    
    function getData() {
    let localStorageData = localStorage.getItem("student");
    let studentObj = JSON.parse(localStorageData);
    console.log(studentObj);
    $("#firstname").text(studentObj.firstName);
    $("#lastname").text(studentObj.lastName);
    $("#emailaddress").text(studentObj.email);
    $("#mobilenumber").text(studentObj.phone);
    $("#birthdate").text(studentObj.birthdate);
    $("#password").text(studentObj.password);
    $("#confirmpassword").text(studentObj.confirmpassword);
    
    }
async function checkUserCreds(){
    let userName = document.getElementById('username').value;
    let passWord = document.getElementById('password').value;

    //Check username and password in the right format
    let userNameFormat = /^([a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3})|(\d{3}-\d{3}-\d{4})$/;
    let passWordFormat = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    
    if(!userName.match(userNameFormat) || !passWord.match(passWordFormat)){
        alert('Check your username and password again!');
        return false
    }else {   
        //If input provided then post them to server side for validation
        try {
            postUserLoginData('/postuserlogindata', {userName: userName, passWord: passWord})
        }catch(error){
            console.log("error", error);
        }
    }
}

//Function to post user credentials to the server
const postUserLoginData = async(url='', data={})=>{
    const response = await fetch(url, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify(data),
    })
    try {
        const serverResponse = await response.json();
        console.log(serverResponse);
    }catch(error){
        console.log("error", error);
    }
}

export {
    checkUserCreds
}
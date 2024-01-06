var objUser = [
    {
        username: "Vinhdoan69",
        password: "123456"
    }
]
function getInfo() {
    var username = document.getElementById(username).value
    var password = document.getElementById(password).value
    for(i=0; i<objUser.length;i++){
        if(username == objUser[i].username && password == objUser[i].password)
        {
            return true;
        }
        else return false;
    }
}
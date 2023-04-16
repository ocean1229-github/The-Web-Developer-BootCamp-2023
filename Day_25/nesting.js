const password = prompt("please enter a new password")

// 비밀번호는 6글자 이상이어야함.

if(password.length>=6){
    console.log("LONG ENOUGH PASSWORD!")
    if(password.indexOf(' ') === -1){
    console.log("Valid Password")
    }else{
        console.log("password cannot contain spaces!")
    }
}else{
    console.log("PASSWORD TOO SHORT! Must be 6+ characters")
}

// 비밀번호에는 space를 띄울 수 없음.

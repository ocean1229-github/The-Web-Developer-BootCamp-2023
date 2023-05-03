const person = {
    firstName: 'Viggo',
    lastName: 'Mortensen',
    fullName: function(){
        return '${this.firstName} ${lastName}'
    },
    shoutName: function(){
        setTimeout(() => {
            console.log(this);
            console.log(this.fullName())
        }, 3000)
    }
}
// 화살표 안에 arrow는 객체 전부를 반환한다. 
// 오류남
// setTimeout은 윈도우 객체의 메서드다 -> 윈도우 객체를 내포하고 있어서 보이지 않는다.
// 실행 컨테스트를 잘알기
//함수안 this에는 함수안 this와 같다.

// this 키워드가 화살표 함수에서 다르게 동작해야 하고
// 가끔 우리가 원하는 대로 사용가능
// 메서드를 정의하려고 화살표 함수를 사용하지 않는다.
// 즉 this 키워드는 이 객체 (this.firstName(5번줄))를 가리키지 않는다.


//일반 함수와 달리 화살표 함수에서 this 키워드는 다르게 동작한다.
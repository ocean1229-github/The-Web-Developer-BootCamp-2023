function hex(r,g,b){
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function rgb(r, g, b){
    return `rgb(${r}, ${g}, ${b})`;
}

// hex(255,100,25);
// "#ff6419"
// "rgb(255,100,25)"

// 팩토리함수
// 함수가 객체를 만들어준다
// 비어있는 상태로 시작하지만 주어진 인수를 기반으로 속성을 추가한다.
// 메서드에서 다른 결과를 얻었지만 결국엔 같은 패턴이다.
// 주된 방식은 아님!
function makeColor(r, g, b){
    const color = {};
    color.r = r;
    color.g = g;
    color.b = b;
    color.rgb = function() {
        const { r, g, b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    };
    color.hex = function() {
        const { r, g, b } = this;
        return (
            '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
        );
    };
    return color;
}

// makeColor(35,255,255)
//r: 35, g: 255, b: 255

const firstColor = makeColor(35,255,150);
firstColor.hex()
[1,2,3].push()
//불리언 메서드
const exams = [80, 98, 92, 78, 77, 90, 89, 84, 81, 77]

exams.every(score => score >= 75)
//전부 75가 넘으면 true가 뜬다
exams.some(score => score >= 75)
//하나라도 75가 넘으면 true가 뜬다.
let movieLine = ['tom', 'nancy', 'pablo', 'oliver', 'eva'];
movieLine.shift();
//tom
// shift는 맨앞의 요소를 지운다.
movieLine.push('colt')
movieLine.shift()
movieLine.shift()
movieLine.shift()
movieLine.shift()

// unshift는 맨앞줄에 뭘 추가하는 것

movieLine.push('jerry', 'deniz', 'nany', 'naerw');
movieLine.unshift('vip');
//-> 맨앞줄에 추가

//push pop은 끝에 뒤에 push는 추가 pop은 뺴기
//shift unshift는 앞에 shift는 빼기 unshift는 추가
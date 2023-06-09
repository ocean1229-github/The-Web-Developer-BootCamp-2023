const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.dir(form)
    // console.log(form.element.query.value)
    const searchTerm = form.element.query.value;
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
})

const makeImages = (shows) => {
    for(let result of shows){
        // console.log(result)
        // 확인 코드

        if(result.show.image){   
            const img = document.createElement('IMG');
            img.src = result.show.image.medium;
            document.body.append(img)
        }
    }
}
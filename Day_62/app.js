const form = document.querySelector('#searchForm')
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    // console.dir(form)
    // console.log(form.element.query.value)
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm }}
    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`, config)
    makeImages(res.data)
    form.elements.query.value = '';
    img.src = '';
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
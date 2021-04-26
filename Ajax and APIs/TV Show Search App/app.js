const form = document.querySelector('#searchForm');

form.addEventListener('submit', async function(e) {
    try {
    e.preventDefault();
    const searchTerm  = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const response = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(response.data);
    form.elements.query.value = '';
    } catch (e) {
        console.log("Couldn't load results.", e);
    }
}) 

const makeImages = (shows) => {
    for (let entry of shows) {
        if (entry.show.image) {
            const img = document.createElement('IMG');
            img.src = entry.show.image.medium;
            document.body.append(img);
        }
    }
}
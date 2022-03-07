const form = document.querySelector('#memeform');
const memeImage = document.querySelector('input[name="image"]');
const topText = document.querySelector('input[name="toptext"]');
const bottomText = document.querySelector('input[name="bottomtext"]');
const results = document.querySelector('#results');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    const newMeme = makeMeme(
        memeImage.value,
        topText.value,
        bottomText.value
    );
    results.appendChild(newMeme);
})

function makeMeme(image, text1, text2) {
    const meme = document.createElement('h2');
    meme.style.backgroundImage = image;
    meme.innerText = text1;
    meme.innerText = text2;
    return meme;
}
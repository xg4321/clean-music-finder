scripts.js
async function searchYouTube() {
    const query = document.getElementById('search').value;
    const apiKey = 'AIzaSyC82nOCr0wMfzqfcs_7fg_2Ok44DekBwmQ'; // Replace with your YouTube Data API key
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${query}+clean&type=video&key=${apiKey}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();
        displayResults(data.items);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

function displayResults(items) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    items.forEach(item => {
        const title = item.snippet.title;
        const videoId = item.id.videoId;
        resultsDiv.innerHTML += `
            <div>
                <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">${title}</a>
            </div>
        `;
    });
}

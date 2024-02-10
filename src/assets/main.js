const url = 'https://youtube-v31.p.rapidapi.com/search?channelId=UC3aj05GEEyzdOqYM5FLSFeg&part=snippet%2Cid&order=date&maxResults=6';

const content = null || document.getElementById('content');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0fcf5f2642msh12a40adc7edb1aap1bd5dajsn311b5624f80e',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
	const response = await fetch(url, options);
	const result = await response.json();
	return result;
}

(async ()=>{
    try{
		const videos = await fetchData(url);
		let view = `
		${videos.items.map(video =>`
		<a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
		<div class="group relative">
			<div
				class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
				<img src="${video.snippet.thumbnails.high.url}" alt="${video.description}" class="w-full">
			</div>
			<div class="mt-4 flex justify-between">
			<h3 class="text-sm text-gray-700">
				<span aria-hidden="true" class="absolute inset-0"></span>
				${video.snippet.title}
			</h3>
			</div>
	  </div></a>
		`).slice(0,4).join('')}
		`;
		content.innerHTML = view;
    }catch (error){
		console.log(error);
    }
})();//para que de manera automatica llame a nuestra funcion
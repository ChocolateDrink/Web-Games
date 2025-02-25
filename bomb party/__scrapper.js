const storedWords = {};

setInterval(() => {
	for (const id in milestone.playerStatesByPeerId) {
		const player = milestone.playerStatesByPeerId[id];
		if (player.wasWordValidated === false)
			continue;
	
		let word = player.word;
		if (storedWords[word])
			continue;

		storedWords[word] = true;
		console.log(word);
	}
}, 500);
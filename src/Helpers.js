export function handleEnter(e, callback) {

	console.log('enterhandle running')
	console.log(e);
	if (callback) {
		e.persist();
		console.log(`your key is ${e.key}`);

		callback();
	}

}
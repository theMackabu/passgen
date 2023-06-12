if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/serviceWorker.js', { scope: '/' }).then(
		(registration: any) => console.log('👍', 'serviceWorker', 'registered', registration.scope),
		(err: Error) => console.log('👎', 'serviceWorker', 'failed', err)
	);
}

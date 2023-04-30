import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'activity-tracker-desktop'
	}
});

export default app;

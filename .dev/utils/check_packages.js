const updateNotifier = require('update-notifier');
const pkg = require('../../package.json');

// Checks for available update and returns an instance
// 1 week
const notifier = updateNotifier({
  pkg,
  updateCheckInterval: 1000 * 60 * 60 * 24 * 7 
});

// Notify using the built-in convenience method
notifier.notify();

if (notifier.update) {
	console.log(`Update available: ${notifier.update.latest}`);
}

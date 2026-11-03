// helper functions

// function to handle clicks on contact buttons and open the default email client with the adress bcbooks@gmx.de
export function handleEmailClick(event) {
	// event.preventDefault();
	const email = atob('ZWQueG1nQHNrb29iY2I=').split('').reverse().join('');
	event.currentTarget.href = `mailto:${email}`;
}

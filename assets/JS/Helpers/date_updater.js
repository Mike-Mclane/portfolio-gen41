const copyrightElementDOM = document.querySelector('.footer__copy span');

function updateCopyRightYear() {
	const currentYear = new Date().getFullYear();
	copyrightElementDOM.textContent = `${currentYear}`;
}

export default updateCopyRightYear;

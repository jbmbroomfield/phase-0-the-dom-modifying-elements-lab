const main = document.getElementById('main');
main.remove();
// document.removeChild(main);

const newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'Jim is the champion';
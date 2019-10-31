let dados = [1, 2, 3, 4, 5];

let filtrados1 = [];

for (let i = 0; i < dados.length; i++) {
	if (dados[i] > 3) {
		filtrados1.push(dados[i]);
	}
}

function maior3(num) {
	return num > 3;
}

//const maiores3 = num => num > 3;
let filtrados2 = dados.filter(maior3);

let filtrados3 = dados.filter(it => it > 3);

console.log(filtrados1);
console.log(filtrados2);
console.log(filtrados3);

let info = [1, 2, 3, 4, 5];

let updatedinfo = info.map(it => it * 3);

console.log(updatedinfo);

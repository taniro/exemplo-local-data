import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import NewApp from "./NewApp";

let dados = [1, 2, 3, 4, 5, 6, 7, 8];
//let resultado = [];

/*
for (let i = 0; i < dados.length; i++) {
	if (dados[i] > 4) {
		resultado.push(dados[i]);
	}
}
*/

/*
function maior4(num) {
	if (num > 4) return num;
}

let resultado = dados.filter(maior4);
*/

//let resultado = dados.filter(it => it > 4);

//let resultado = dados.map(it => it * 2);

//console.log(resultado);

ReactDOM.render(<App />, document.getElementById("root"));

import React from "react";
import Turma from "./Turma";

function App() {
	return (
		<div>
			<Turma
				info={{
					professor: "Taniro",
					disciplina: "Autoria",
					horario: "2M23"
				}}
			/>
			<Turma
				info={{
					professor: "Laura",
					disciplina: "Programação Orientada a Objetos",
					horario: "4M456"
				}}
			/>
			<Turma
				info={{
					professor: "Ana",
					disciplina: "Matemática",
					horario: "6M56"
				}}
			/>
		</div>
	);
}
export default App;

import React from "react";

function Turma(props) {
	return (
		<div>
			<h1>{props.info.disciplina}</h1>
			<h2>Professor(a): {props.info.professor}</h2>
			<h3>Horário: {props.info.horario}</h3>
		</div>
	);
}

export default Turma;

import React from 'react'
import { useState } from 'react'

export const Digiturno = () => {
    const [turno, setTurno] = useState(0);
    const [counterCash, setCounterCash ] = useState(0);
	const [counterRx, setCounterRx ] = useState(0);
	const [counterLab, setCounterLab ] = useState(0);

	const changeTurn = (e) =>{
		if(e.target.name === "cash"){
			setCounterCash(counterCash + 1);
			setTurno("C"+counterCash)
		}else if(e.target.name === "rx"){
			setCounterRx(counterRx + 1);
			setTurno("R"+counterRx)
		}else{
			setCounterLab(counterLab + 1);
			setTurno("L"+counterLab)
		}
		console.log("counterCash - "+counterCash)
	}


    return (
		<div class="container">
			<h1 class="text-center">Toma de Turnos</h1>
			<div class="row justify-content-center" id='div-boton'>
				<div >
					<button class="boton" type="button" name="rx" id="rx-btn" onClick={changeTurn}>RX</button>
			
					<button class="boton" type="button" name="lab" id="lab-btn" onClick={changeTurn}>Laboratorios</button>
				
					<button class="boton" type="button" name="cash" id="cash-btn" onClick={changeTurn}>Caja</button>
				</div>
			</div>
			<div class="card mg-3" >
				<h2 class="text-center">TURNO ACTUAL</h2>
				<div class="card-body">
					<h1 class="turno">{turno}</h1>
				</div>
			</div>
		</div>
    )
}

import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
    const [pacientes, setPacientes] = useState([])
    const [paciente, setPaciente] = useState({})

    const eliminarPaciente = (id) => {
        const pacientesActualizados = pacientes.filter(
            (paciente) => paciente.id !== id
        )
        setPacientes(pacientesActualizados)
    }

    return (
        <div className="container mx-auto mt-20">
            <Header />
            <div className="mt-12 md:flex">
                <Formulario pacientes={pacientes} setPacientes={setPacientes} />
                <Listado
                    pacientes={pacientes}
                    setPaciente={setPaciente}
                    eliminarPaciente={eliminarPaciente}
                />
            </div>
        </div>
    )
}

export default App

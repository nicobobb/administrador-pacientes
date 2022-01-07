import Paciente from './Paciente'

const Listado = (props) => {
    const { setPaciente, eliminarPaciente, pacientes } = props
    console.log(pacientes)
    return (
        <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
            {pacientes && pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center">Listado</h2>
                    <p className="font-bold text-center mt-5 mb-10">
                        Administra tus Pacientes {''}{' '}
                        <span className="text-indigo-600 text-center font-bold">
                            y Citas
                        </span>
                    </p>

                    {pacientes.map((paciente) => (
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center">
                        No hay Pacientes
                    </h2>
                    <p className="font-bold text-center mt-5 mb-10">
                        Por favor agregue a tus {''}{' '}
                        <span className="text-indigo-600 text-center font-bold">
                            Pacientes
                        </span>
                    </p>
                </>
            )}
        </div>
    )
}

export default Listado

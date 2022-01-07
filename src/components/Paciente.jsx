const Paciente = (props) => {
    const { setPaciente, eliminarPaciente, paciente } = props
    const { nombre, apellido, nacimiento, email, aclaracion, id } = paciente
    return (
        <div className="bg-white m-3 shadow-xl p-10">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                Nombre: {''}
                <span className="font-normal normal-case">{nombre}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Apellido: {''}
                <span className="font-normal normal-case">{apellido}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Email: {''}
                <span className="font-normal normal-case">{email}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Fecha de Nacimiento: {''}
                <span className="font-normal normal-case">{nacimiento}</span>
            </p>

            <p className="font-bold mb-3 text-gray-700 uppercase">
                Aclaración: {''}
                <span className="font-normal normal-case">{aclaracion}</span>
            </p>
            <div className="flex justify-between mt-10">
                {/* <button
                    className="py-2 px-5 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase text-sm"
                    type="button"
                    onClick={() => setPaciente(paciente)}
                >
                    Editar
                </button> */}
                <button
                    className="py-2 px-5 bg-red-600 hover:bg-red-700 text-white font-bold uppercase text-sm"
                    type="button"
                    onClick={() => eliminarPaciente(id)}
                >
                    Eliminar
                </button>
            </div>
        </div>
    )
}

export default Paciente

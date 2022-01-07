import { useState } from 'react'
import Error from './Error'

const Formulario = (props) => {
    const { pacientes, setPacientes } = props

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [nacimiento, setNacimiento] = useState('')
    const [aclaracion, setAclaracion] = useState('')

    const [error, setError] = useState(false)

    const generarId = () => {
        const random = Math.random().toString(36).substring(2)
        const fecha = Date.now().toString(36)

        return random + fecha
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!nombre.trim() || !apellido.trim()) {
            console.log('Estan vacios')
            setError(true)
            return
        }

        setError(false)

        const objetoPaciente = {
            nombre,
            apellido,
            email,
            nacimiento,
            aclaracion,
            id: generarId(),
        }

        setPacientes([...pacientes, objetoPaciente])

        //Reiniciar formulario

        setNombre('')
        setApellido('')
        setEmail('')
        setNacimiento('')
        setAclaracion('')
    }

    return (
        <div className="md:w-1/2 lg:w-2/5">
            <h2 className="font-black text-3xl text-center">Formulario</h2>

            <p className="font-bold text-center mt-5 mb-10">
                Añade Pacientes y {''}
                <span className="text-indigo-600">Administralos</span>
            </p>

            {error && <Error msj="Todos los campos son obligatorios" />}

            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-xl py-10 px-8 mb-10"
            >
                <div className="mb-5">
                    <label
                        htmlFor="nombre"
                        className="block text-gray-700 font-bold uppercase text-sm"
                    >
                        Nombre
                    </label>
                    <input
                        id="nombre"
                        className="border-2 w-full m-2 p-2 placeholder-gray-400"
                        type="text"
                        placeholder="Pedro"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="apellido"
                        className="block text-gray-700 font-bold uppercase text-sm"
                    >
                        Apellido
                    </label>
                    <input
                        id="apellido"
                        className="border-2 w-full m-2 p-2 placeholder-gray-400"
                        type="text"
                        placeholder="Montaner"
                        value={apellido}
                        onChange={(e) => setApellido(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 font-bold uppercase text-sm"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        className="border-2 w-full m-2 p-2 placeholder-gray-400"
                        type="email"
                        placeholder="pedro.montaner@mail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="nacimiento"
                        className="block text-gray-700 font-bold uppercase text-sm"
                    >
                        Fecha de Nacimiento
                    </label>
                    <input
                        id="nacimiento"
                        className="border-2 w-full m-2 p-2 placeholder-gray-400"
                        type="date"
                        value={nacimiento}
                        onChange={(e) => setNacimiento(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="aclaracion"
                        className="block text-gray-700 font-bold uppercase text-sm"
                    >
                        Aclaración
                    </label>
                    <textarea
                        id="aclaracion"
                        className="border-2 w-full m-2 p-2 placeholder-gray-400"
                        placeholder="Escribe todos los detalles que veas necesario"
                        value={aclaracion}
                        onChange={(e) => setAclaracion(e.target.value)}
                    />
                </div>

                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-zinc-50 uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all"
                    value="agregar"
                />
            </form>
        </div>
    )
}

export default Formulario

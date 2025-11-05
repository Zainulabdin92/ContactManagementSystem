// import React, { useContext } from 'react'
// import { UserContext } from '../App'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import { useNavigate } from 'react-router-dom'

// const Logout = () => {
//     const { setUser } = useContext(UserContext)
//     const MySwal = withReactContent(Swal)
//     const navigate = useNavigate()
//     MySwal.fire({
//         title: "Are you sure?",
//         text: "Do You want to exit",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes!"
//     }).then((result) => {
//         if (result.isConfirmed) {
//             localStorage.clear()
//             setUser(null)
//             navigate('/')
//         }
//     })
// }

// export default Logout


// import React, { useContext } from 'react'
// import { UserContext } from '../App'
// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// import { useNavigate } from 'react-router-dom'

// const Logout = () => {
//     const { setUser } = useContext(UserContext)
//     const MySwal = withReactContent(Swal)
//     const navigate = useNavigate()

//     MySwal.fire({
//         title: "Are you sure?",
//         text: "Do You want to exit",
//         icon: "warning",
//         showCancelButton: true,
//         confirmButtonColor: "#3085d6",
//         cancelButtonColor: "#d33",
//         confirmButtonText: "Yes!"
//     }).then((result) => {
//         if (result.isConfirmed) {
//             localStorage.clear()
//             setUser(null)
//             navigate('/')   // logout confirmed → home le jao
//         }
//     })

//     return null
// }

// export default Logout


import React, { useContext, useState } from 'react'
import { UserContext } from '../App'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useNavigate } from 'react-router-dom'

const Logout = () => {
    const { setUser } = useContext(UserContext)
    const MySwal = withReactContent(Swal)
    const navigate = useNavigate()
    const [shown, setShown] = useState(false)

    if (!shown) {
        setShown(true) // ensure swal sirf ek dafa chale
        MySwal.fire({
            title: "Are you sure?",
            text: "Do You want to exit",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                // localStorage.clear()
                localStorage.removeItem("token")
                setUser(null)
                navigate('/')
            } else {
                navigate(-1) // cancel → wapas le jao
            }
        })
    }

    return null
}

export default Logout

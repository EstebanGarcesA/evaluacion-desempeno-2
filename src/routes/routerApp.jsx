import App from '../App'
import Inicio from '../pages/Inicio'
import Productos from '../pages/Productos'
import Contacto from '../pages/Contacto'

export let routerApp = [
    {
        path: "/",
        element: <Inicio />
    },
    {
        path: "/inicio",
        element: <Inicio />
    },
    {
        path: "/productos",
        element: <Productos />
    },
    {
        path: "/contacto",
        element: <Contacto />
    }
]
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import { Link } from "react-router-dom";

const Inicio = () => {
    return (
        <div>

            <nav><Navbar /></nav>
            <main>
                <div id="home-page" className="page">
                    <section className="urban-gradient text-white py-20 lg:py-32">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                            <h2 className="hero-text text-4xl md:text-6xl font-bold mb-6 tracking-tight">
                                ESTILO URBANO
                                <span className="block text-amber-400">REDEFINIDO</span>
                            </h2>
                            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
                                Descubre nuestra colección exclusiva de ropa urbana minimalista
                            </p>
                            <Link
                                to="/productos"
                                className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-4 px-8 rounded-none transition-all duration-300 transform hover:scale-105 inline-block"
                            >
                                EXPLORAR COLECCIÓN
                            </Link>
                        </div>
                    </section>

                    <section className="py-20 bg-white">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.828 2.828A4 4 0 019.172 21H7l-2-2h5.172a4 4 0 002.828-2.828L21 3z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">DISEÑO ÚNICO</h3>
                                    <p className="text-gray-600">
                                        Piezas exclusivas con estética urbana y minimalista
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">CALIDAD PREMIUM</h3>
                                    <p className="text-gray-600">
                                        Materiales de alta calidad para máxima durabilidad
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="w-16 h-16 bg-gray-900 mx-auto mb-6 flex items-center justify-center">
                                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-semibold mb-4">ENVÍO RÁPIDO</h3>
                                    <p className="text-gray-600">Entrega express en 24-48 horas</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
            <footer><Footer /></footer>

        </div>
    )
}

export default Inicio
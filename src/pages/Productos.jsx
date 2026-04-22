import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ProductCard
    from '../components/Cards'
const Productos = () => {
    return (
        <div>

            <nav><Navbar /></nav>

            <main>
                <div id="products-page" class="page">
                    <section class="py-16 bg-gray-50">
                        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div class="text-center mb-16">
                                <h2 class="text-4xl font-bold text-gray-900 mb-4">
                                    NUESTRA COLECCIÓN
                                </h2>
                                <p class="text-xl text-gray-600">Estilo urbano para cada ocasión</p>
                            </div>
                            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                                <ProductCard
                                    titulo="Camiseta Básica Urban"
                                    descripcion="Algodón 100% orgánico"
                                    precio="€29"
                                    icon={
                                        <svg className="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"
                                                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    }
                                />



                                <ProductCard
                                    titulo="Jeans Slim Fit"
                                    descripcion="Denim premium stretch"
                                    precio="€89"
                                    icon={
                                        <svg class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4 4 4 0 004-4V5z"></path>
                                        </svg>
                                    }
                                />



                                <ProductCard
                                    titulo="Sudadera Oversize"
                                    descripcion="Algodón French Terry"
                                    precio="€65"
                                    icon={
                                        <svg class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"></path>
                                        </svg>
                                    }
                                />



                                <ProductCard
                                    titulo="Chaqueta Bomber"
                                    descripcion="Nylon resistente al agua"
                                    precio="€120"
                                    icon={
                                        <svg class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                    }
                                />



                                <ProductCard
                                    titulo="Gorra Snapback"
                                    descripcion="Bordado premium"
                                    precio="€35"
                                    icon={
                                        <svg class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                                        </svg>
                                    }
                                />



                                <ProductCard
                                    titulo="Zapatillas Urban"
                                    descripcion="Suela de goma antideslizante"
                                    precio="€95"
                                    icon={
                                        <svg class="w-24 h-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                    }
                                />

                            </div>

                        </div>
                    </section>
                </div>
            </main>

            <footer><Footer /></footer>

        </div>
    )
}

export default Productos
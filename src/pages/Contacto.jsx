import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ContactInfoItem from '../components/ContactInfoItem'

const Contacto = () => {
  const storageKey = 'contacto.form'
  const emptyForm = {
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  }

  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const saved = localStorage.getItem(storageKey)
    if (saved) setForm(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem(storageKey, JSON.stringify(form))
  }, [form])

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    setSubmitted(false)
  }

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main className="bg-gray-50 text-gray-900">
        <section className="py-16 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">CONTACTO</h2>
              <p className="text-xl text-gray-600">
                ¿Tienes alguna pregunta? Nos encantaría escucharte
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">INFORMACIÓN DE CONTACTO</h3>
                </div>

                <ContactInfoItem
                  title="DIRECCIÓN"
                  icon={
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  }
                >
                  <p>
                    Calle Urban Style 123
                    <br />
                    28001 Madrid, España
                  </p>
                </ContactInfoItem>

                <ContactInfoItem
                  title="TELÉFONO"
                  icon={
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  }
                >
                  <p>+34 91 123 45 67</p>
                </ContactInfoItem>

                <ContactInfoItem
                  title="EMAIL"
                  icon={
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  }
                >
                  <p>info@urbanthreads.com</p>
                </ContactInfoItem>

                <ContactInfoItem
                  title="HORARIO"
                  icon={
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  }
                >
                  <p>
                    Lun - Vie: 9:00 - 18:00
                    <br />
                    Sáb: 10:00 - 14:00
                  </p>
                </ContactInfoItem>
              </div>

              <div className="bg-white p-8 shadow-lg">
                <h3 className="text-2xl font-semibold mb-6">ENVÍANOS UN MENSAJE</h3>
                <div className="bg-amber-100 border-l-4 border-amber-500 p-4 mb-6">
                  <p className="text-amber-700 text-sm">
                    <strong>Demo:</strong> Este es un formulario de demostración. Los mensajes no se enviarán realmente.
                  </p>
                </div>

                {submitted && (
                  <div className="bg-green-50 border-l-4 border-green-600 p-4 mb-6">
                    <p className="text-green-800 text-sm">Mensaje guardado localmente (localStorage).</p>
                  </div>
                )}

                <form onSubmit={onSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        NOMBRE
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={form.firstName}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        APELLIDOS
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={form.lastName}
                        onChange={onChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      EMAIL
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={onChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                    />
                  </div>

                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      ASUNTO
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={form.subject}
                      onChange={onChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                    >
                      <option value="">Selecciona un asunto</option>
                      <option value="general">Consulta general</option>
                      <option value="product">Información de producto</option>
                      <option value="order">Estado de pedido</option>
                      <option value="return">Devoluciones</option>
                      <option value="other">Otro</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      MENSAJE
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={form.message}
                      onChange={onChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gray-900 text-white py-4 px-6 hover:bg-gray-800 transition-colors font-semibold tracking-wider"
                  >
                    ENVIAR MENSAJE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Contacto

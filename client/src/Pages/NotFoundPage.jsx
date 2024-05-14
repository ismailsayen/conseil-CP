import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section class="bg-white rounded-md shadow-md">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="mx-auto max-w-screen-sm text-center">
          <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-green-600 ">
            404
          </h1>
          <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
            Quelque chose manque.
          </p>
          <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
            Désolé, nous ne trouvons pas cette page. Vous trouverez beaucoup de choses à explorer sur la page d'accueil.
          </p>
          <Link to="/" class="inline-flex text-white shadow-md border-2 border-green-600 bg-green-600 hover:bg-white hover:text-green-600 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-green-900 my-4">
            Retour à la page d'accueil
          </Link>
        </div>
      </div>
    </section>
  )
}

export default NotFoundPage
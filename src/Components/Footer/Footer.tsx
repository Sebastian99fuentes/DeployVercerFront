import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className="w-full bg-gray-800 text-white py-4">
    <div className="container mx-auto text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Derechos Reservados. Sebas Fuentes.
      </p>
    </div>
  </footer>
  )
}

export default Footer
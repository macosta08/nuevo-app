import React from 'react'

const TextSecundary = ({text}: {text: string}) => {
  return (
    <h2 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl underline">{text}</h2>
  )
}

export default TextSecundary

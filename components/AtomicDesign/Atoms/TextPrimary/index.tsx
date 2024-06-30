import React from 'react'

const TextPrimary = ({text}: {text: string}) => {
  return (
    <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">{text}</h1>
  )
}

export default TextPrimary

import React from 'react'
interface Props {
  className?: string
  children?: React.ReactNode
}
const Container = ({ className = '', children }: Props) => {
  return (
    <div
      className={`container p-8 mx-auto xl:px-0 ${className ? className : ''}`}
    >
      {children}
    </div>
  )
}

export default Container

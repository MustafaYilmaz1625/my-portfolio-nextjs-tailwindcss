import React from 'react'

const Layout = ({children,className=''}) => {
  return (
    <div className={`w-full h-full inline-block dark:bg-dark z-0 xl:p-24 md:p-12 sm:p-8 bg-light p-32 ${className}`}>
        {children}
    </div>
  )
}

export default Layout
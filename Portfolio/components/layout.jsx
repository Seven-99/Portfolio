import React from 'react'

export default function Layout({ children }) {
    return (
        <div className="min-h-screen w-full circuit-bg">
            <div className="circuit-lines"></div>

            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

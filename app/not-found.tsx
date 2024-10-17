'use client'

import React, { useState } from 'react'
import Webcam from 'react-webcam'

export default function NotFound() {
    const [isWebcamOn, setIsWebcamOn] = useState(false)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
            <p className="text-xl mb-8">The page does not exist lol</p>
            
            <button 
                onClick={() => setIsWebcamOn(!isWebcamOn)}
                className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
            >
                {isWebcamOn ? 'Enough' : 'Look at your silly face instead'}
            </button>

            {isWebcamOn && (
                <div className="border-4 border-blue-500 rounded-lg overflow-hidden">
                    <Webcam
                        audio={false}
                        height={480}
                        width={640}
                        mirrored={true}
                    />
                </div>
            )}
        </div>
    )
}
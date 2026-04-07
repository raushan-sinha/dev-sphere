import React from 'react'
import { statsData } from '../../../config/statsData.data'

const InteractiveSection: React.FC = () => {
    return (
        <section className="px-6 py-20">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
                {statsData.map((item, idx) => (
                    <div key={idx}>
                        <h4 className="text-3xl font-bold text-blue-500">{item.value}</h4>
                        <p className="text-gray-400 mt-2">{item.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default InteractiveSection
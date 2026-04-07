import React from 'react'
import { featuresData } from '../../../config/featureSection.data'

const FeaturesSection: React.FC = () => {
    return (
        <section className="px-6 py-16 grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuresData.map((item, idx) => {
                const Icon = item.icon;

                return (
                    <div
                        key={idx}
                        className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:scale-[1.03] transition duration-300"
                    >
                        <div className="mb-4 text-blue-400">
                            <Icon fontSize='large' />
                        </div>
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                )
            })}
        </section>
    )
}

export default FeaturesSection
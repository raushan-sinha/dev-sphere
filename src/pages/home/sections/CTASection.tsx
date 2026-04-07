import { Bolt } from '@mui/icons-material';
import { Button } from '@mui/material';
import React from 'react'

const CTASection: React.FC = () => {
    return (
        <section className="px-6 py-20 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to level up your dev workflow?
            </h2>
            <p className="text-gray-400 mb-8">
                Join DevSphereOS and transform how you build modern applications.
            </p>
            <Button variant="contained" size="large" endIcon={<Bolt />}>
                Get Started Now
            </Button>
        </section>
    )
}

export default CTASection;
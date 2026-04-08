import { RocketLaunch } from '@mui/icons-material'
import { Button, Chip } from '@mui/material'
import React from 'react'

const HeroSection: React.FC = () => {
    return (
        <section className="flex flex-col items-center text-center px-6 py-20 gap-6">
            <Chip
                label="Next-Gen Developer Workspace"
                color="primary"
                className="!px-4 !py-2 text-sm"
            />

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight max-w-4xl">
                Build, Scale & Ship Faster with <span className="text-blue-500 font-mono">DevSphereOS</span>
            </h2>

            <p className="text-gray-500 max-w-2xl text-lg">
                A unified ecosystem for frontend engineers, AI builders, and modern dev teams.
                Streamline workflows, boost performance, and ship production-ready products faster.
            </p>

            <div className="flex gap-4 flex-wrap justify-center">
                <Button variant="contained" size="large" startIcon={<RocketLaunch />}>
                    Launch Dashboard
                </Button>
                <Button variant="outlined" size="large" sx={{ borderColor: "gray" }}>
                    View Demo
                </Button>
            </div>
        </section>
    )
}

export default HeroSection
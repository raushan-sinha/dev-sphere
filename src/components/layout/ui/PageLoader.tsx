import { useEffect, useState } from "react";

export default function PageLoader() {
    const [slow, setSlow] = useState<boolean>(false);

    //todo: set timer for slow net 
    useEffect(() => {
        const timer = setTimeout(() => {
            setSlow(true);
        }, 6000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm text-white z-50">

            <div className="w-12 h-12 border-4 border-white/20 border-t-blue-500 rounded-full animate-spin mb-4" />

            {!navigator.onLine ? (
                <p className="text-red-400">You're offline. Check connection.</p>
            ) : slow ? (
                <p className="text-yellow-400">Slow network detected…</p>
            ) : (
                <p>Loading...</p>
            )}

        </div>
    );
}
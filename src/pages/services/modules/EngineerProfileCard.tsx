import { engineersData } from "../../../config/engineerData";
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const EngineerProfileCard = () => {
    return (
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {engineersData.map((item, idx) => (
                <div
                    key={idx}
                    className="rounded-2xl p-6 border backdrop-blur-md shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 rounded-full object-cover"
                        />
                    </div>

                    {/* Info */}
                    <div className="text-center mt-4">
                        <h2 className="text-lg font-semibold">{item.name}</h2>
                        <p className="text-sm opacity-70 mt-1">{item.title}</p>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center gap-4 mt-4">
                        <a
                            href={item.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border hover:scale-110 transition">
                            <GitHubIcon />
                        </a>

                        <a
                            href={item.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full border hover:scale-110 transition">
                            <LinkedInIcon />
                        </a>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default EngineerProfileCard;
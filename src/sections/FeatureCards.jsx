
import { abilities } from "../constants/index.js";

const FeatureCards = () => {
    return (
        <div className="w-full c-space mt-25 md:mt-35">
            <h2 className="text-heading">Como eu Trabalho</h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[18rem] mt-12">
                {abilities.map(({ imgPath, title, desc }) => (
                    <div key={title} className="max-w-md p-5 mx-auto border border-white/10 rounded-2xl rounded-xl bg-gradient-to-r bg-indigo to-storm hover:bg-royal hover-animation">
                        <div className="size-14 flex items-center justify-center rounded-full">
                            <img src={imgPath} alt={title} />
                        </div>
                        <h3 className="text-white text-2xl font-semibold mt-2 mb-4">{title}</h3>
                        <p className="text-neutral-400 text-lg">{desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FeatureCards
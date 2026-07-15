import ProjectDetails from './ProjectDetails'
import { useState } from 'react'

const Project = ({
    title,
    description,
    subDescription,
    href,
    image,
    tags,
    setPreview,
}) => {
    const [isHidden, setIsHidden] = useState(false);
    return (
        <>
            <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
                onMouseEnter={() => setPreview(image)}
                onMouseLeave={() => setPreview(null)}
            >
                <div>
                    <p className="text-2xl">{title}</p>
                    <div className="flex gap-5 mt-2 text-sand">
                        {tags.map((tag) => (
                            <span key={tag.id}>{tag.name}</span>
                        ))}
                    </div>
                </div>
                <button
                    onClick={() => setIsHidden(true)} className="flex items-center gap-2 curor-pointer hover-animation">
                    Veja Mais<img src="assets/arrow-right.svg" alt="arrow" className="w-5" />
                </button>
            </div>
            <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
            {isHidden && (
                <ProjectDetails
                    title={title}
                    description={description}
                    subDescription={subDescription}
                    href={href}
                    image={image}
                    tags={tags}
                    closeModal={() => setIsHidden(false)}
                />)}
        </>
    )
}

export default Project
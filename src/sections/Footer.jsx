import { mySocials } from "../constants";
const Footer = () => {
    return (
        <section className="flex flex-wrap items-center justify-between mb-5 gap-5 text-sm text-neutral-400 c-space">
            <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
            <div className="flex gap-2">
                <p>Termos e Condições</p>
                <p>|</p>
                <p>Política de Privacidade</p>
            </div>
            <div className="flex gap-3">
                {mySocials.map((social, index) => (
                    <a href={social.href} key={index} target="_blank">
                        <img src={social.icon} alt={social.name} className="w-6 h-6 cursor-pointer" />
                    </a>
                ))}
            </div>
            <p>&copy; {new Date().getFullYear()} Michael Oliveira. Todos os direitos reservados</p>
        </section>
    )
}

export default Footer
import { useState } from "react";
import emailjs from "@emailjs/browser";
import Alert from "../components/Alert";
import { Particles } from "../components/Particles";
const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isLoading, setIsLoading] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState("success");
    const [alertMessage, setAlertMessage] = useState("");
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const showAlertMessage = (type, message) => {
        setAlertType(type);
        setAlertMessage(message);
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false);
        }, 5000);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            console.log("From submitted:", formData);
            await emailjs.send("service_p8gvbjk", "template_9dd9uaf", {
                from_name: formData.name,
                to_name: "Michael",
                from_email: formData.email,
                to_email: "micholiveira.md@gmail.com",
                message: formData.message,
            }, "6yP6pcKIEvJJW8vKL");
            setIsLoading(false);
            setFormData({
                name: "",
                email: "",
                message: "",
            })
            showAlertMessage("success", "Mensagem enviada com sucesso!");
        } catch (error) {
            setIsLoading(false);
            showAlertMessage("danger", "Shh... algo deu errado. Por favor, tente novamente!");
            console.log(error);

        }
    };
    return (
        <section id="contact" className="relative flex items-center c-space section-spacing">
            <Particles
                className="absolute inset-0 -z-50"
                quantity={100}
                ease={80}
                color={"#ffffff"}
                refresh
            />
            {showAlert && (<Alert type={alertType} text={alertMessage} />)}
            <div className="flex flex-col items-center justify-center max-w-md p-5 mx-auto border border-white/10 rounded-2xl bg-primary">
                <div className="flex flex-col items-start w-full gap-5 mb-10">
                    <h2 className="text-heading">Vamos Conversar</h2>
                    <p className="font-normal text-neutral-400">Seja para criar um novo site, aprimorar sua plataforma atual ou tirar um projeto único do papel, estou aqui para ajudar.</p>
                </div>
                <form
                    onSubmit={handleSubmit} className="w-full"
                >
                    <div className="mb-5">
                        <label htmlFor="name" className="field-label">
                            Seu Nome <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name" className="field-input field-input-focus"
                            placeholder="Seu Nome Completo"
                            autoComplete="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="email" className="field-label">
                            Seu E-mail <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email" className="field-input field-input-focus"
                            placeholder="seu_email@email.com"
                            autoComplete="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <label htmlFor="message" className="field-label">
                            Sua Mensagem
                        </label>
                        <textarea
                            id="message"
                            name="message" className="field-input field-input-focus"
                            placeholder="Diga como posso te ajudar..."
                            rows="4"
                            autoComplete="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button
                        type="submit" className="w-full px-1 py-3 text-lg rounded-md cursor-pointer bg-radial from-lavender to-royal hover-animation"
                    >
                        {!isLoading ? "Enviar" : "Enviando..."}
                    </button>
                </form>
            </div>
        </section>
    )
}

export default Contact
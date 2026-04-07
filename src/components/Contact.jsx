import { translations } from "../data/translation"
import { useLanguage } from "../contexts/LanguageContext"
import { useState } from "react"
import { Github, Linkedin, Mail, MessageCircle } from "lucide-react"
import emailJs from "@emailjs/browser"


const Contact = () => {
    const { language } = useLanguage()
    const t = translations[language]
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null)
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus(null)

        try {
            await emailJs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    phone: formData.phone,
                    message: formData.message,
                },
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            console.log("Form submitted:", formData)
            setSubmitStatus("success")
            setFormData({ name: "", phone: "", message: "" })
        } catch (error) {
            setSubmitStatus("erro ao enviar email", error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const whatsappUrl = `https://wa.me/5511966259715?text=${encodeURIComponent(t.contact.social.whatsappMessage)}`

    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    {t.contact.title}
                </h2>
                <p className="text-gray-300 text-lg mb-12 text-center max-w-2xl mx-auto">
                    {t.contact.description}
                </p>
                <div className="grid md:grid-cols-2 gap-12">
                    <div className="card bg-gray-800/80 backdrop-blur-sm border border-gray-700">
                        <div className="card-body">
                            <h3 className="card-title text-purple-400">{t.contact.ctaForm}</h3>

                            <form onSubmit={handleSubmit} className="space-y-6 mt-4">
                                <div className="form-control">
                                    <label htmlFor="name" className="label">
                                        <span className="label-text text-gray-300">{t.contact.form.name}</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        required
                                        className="input input-bordered bg-gray-700/80 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                                        placeholder={t.contact.form.name}
                                    />
                                </div>
                                <div className="form-control">
                                    <label htmlFor="phone" className="label">
                                        <span className="label-text text-gray-300">
                                            {t.contact.form.phone}
                                        </span>
                                    </label>
                                    <input type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        required
                                        className="input input-bordered bg-gray-700/80 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500"
                                        placeholder={t.contact.form.phone}
                                    />
                                </div>

                                <div className="form-control">
                                    <label htmlFor="message" className="label">
                                        <span className="label-text text-gray-300">{t.contact.form.message}</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={4}
                                        className="textarea textarea-bordered bg-gray-700/80 border-gray-600 text-white placeholder-gray-400 focus:border-purple-500 resize-none"
                                        placeholder={t.contact.form.message}
                                    />
                                </div>

                                <button className="btn w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white border-0 disabled:opacity-50"
                                    type="submit"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? t.contact.form.submitting : t.contact.form.submit}
                                </button>

                                {submitStatus === "success" && (
                                    <div className="alert alert-success text-sm py-2">
                                        {t.contact.form.success}
                                    </div>
                                )}

                                {submitStatus === "error" && (
                                    <div className="alert alert-error text-sm py-2">
                                        <span>{t.contact.form.error}</span>
                                    </div>
                                )}
                            </form>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <div>
                            <h3 className="text-xl font-semibold text-purple-400 mb-4">{t.contact.social.ctaSocial}</h3>
                            <div className="space-y-4">
                                <a href="mailto:juan.moreira62@outlook.com"
                                    className="btn btn-outline w-full justify-start border-purple-600 text-gray-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Mail className="" w-4 h-4 />
                                    {t.contact.social.email}
                                </a>
                                <a href="https://github.com/Juan-s-moreira"
                                    className="btn btn-outline w-full justify-start border-purple-600 text-gray-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github className="" w-4 h-4 />
                                    {t.contact.social.github}
                                </a>
                                <a href="https://www.linkedin.com/in/juan-s-moreira/"
                                    className="btn btn-outline w-full justify-start border-purple-600 text-gray-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Linkedin className="" w-4 h-4 />
                                    {t.contact.social.linkedin}
                                </a>
                                <a href={whatsappUrl}
                                    className="btn btn-outline w-full justify-start border-purple-600 text-gray-300 hover:bg-purple-600 hover:border-purple-600 hover:text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <MessageCircle className="" w-4 h-4 />
                                    {t.contact.social.whatsapp}
                                </a>
                            </div>
                        </div>
                        <div className="card bg-gray-800/80 backdrop-blur-sm border border-gray-700">
                            <div className="card-body">
                                <h4 className="text-lg font-medium text-purple-400 ">
                                    {t.contact.social.cta}
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {language === 'pt' ? t.contact.social.ctaInvite : t.contact.social.ctaInvite}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact

'use client';

import React, { useRef, useState } from 'react';
import { FiSend, FiCheck } from 'react-icons/fi';
import { contactInfo, socialLinks } from './data';
import emailjs from "@emailjs/browser";

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!form.current) return;

        setIsSubmitting(true);
        setError(null);
        setIsSubmitted(false);

        try {
            // EmailJS send
            await emailjs.sendForm(
                'service_4akcvz6',          // Service ID
                'template_2t3w93p',        // Template ID
                form.current,
                {
                    publicKey: 'vk9jmd2z3kYabxl7F', // Public Key (User ID)
                }
            );

            // Success
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
        } catch (err) {
            console.error(err);
            setError('Failed to send. Please try again.');
        } finally {
            setIsSubmitting(false);

            // Auto-hide success after 3 seconds
            if (isSubmitted) {
                setTimeout(() => setIsSubmitted(false), 3000);
            }
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };
    return (
        <section className="relative min-h-screen py-20" id="contact">
            {/* Floating Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container relative z-10 px-6 mx-auto">
                <div className="max-w-[1200px] mx-auto">
                    {/* Section Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 mb-6">
                            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 animate-pulse"></div>
                            <span className="text-sm font-medium text-purple-300">Let&apos;s Connect</span>
                        </div>

                        <h2 className="text-6xl md:text-8xl font-black mb-6 leading-none">
                            <span className="text-white">Get in</span>{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
                                Touch
                            </span>
                        </h2>

                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Ready to transform your ideas into reality? Let&apos;s create something extraordinary together.
                        </p>
                    </div>

                    {/* Main Content */}
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Contact Form - Takes 2 columns */}
                        <div className="lg:col-span-2">
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/[0.07] transition-all duration-500">
                                <div className="mb-8">
                                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                        Start Your Project
                                    </h3>
                                    <p className="text-gray-400">
                                        Fill out the form below and I&apos;ll get back to you within 24 hours
                                    </p>
                                </div>

                                <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="group">
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-3">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 group-hover:border-gray-600/50"
                                                placeholder="Enter your full name"
                                            />
                                        </div>
                                        <div className="group">
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-3">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-6 py-4 rounded-xl bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 group-hover:border-gray-600/50"
                                                placeholder="Enter your email address"
                                            />
                                        </div>
                                    </div>

                                    <div className="group">
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-3">
                                            Project Details *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={6}
                                            className="w-full px-6 py-4 rounded-xl bg-white/5 border border-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 resize-none group-hover:border-gray-600/50"
                                            placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting || isSubmitted}
                                        className="w-full py-4 px-8 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : isSubmitted ? (
                                            <>
                                                <FiCheck className="w-5 h-5" />
                                                Message Sent!
                                            </>
                                        ) : (
                                            <>
                                                <FiSend className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>

                                {/* Error */}
                                {error && <div className="text-red-600 mt-4">{error}</div>}
                            </div>
                        </div>

                        {/* Contact Info Sidebar */}
                        <div className="space-y-6">
                            {/* Direct Contact */}
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-500">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
                                    Contact Info
                                </h3>
                                <div className="space-y-6">
                                    {contactInfo.map((contact, index) => (
                                        <div className="flex items-start gap-4" key={index}>
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${contact.iconCss}`}>
                                                {contact.icon}
                                            </div>
                                            <div>
                                                <p className="text-gray-300 font-medium">{contact.label}</p>
                                                <a href={contact.href} className={`text-gray-400 transition-colors ${contact.contentCss}`}>
                                                    {contact.value}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.07] transition-all duration-500">
                                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-blue-400"></div>
                                    Let&apos;s Connect
                                </h3>
                                <div className="space-y-4">
                                    {socialLinks.map((link, index) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`flex items-center gap-4 p-4 rounded-xl bg-white/5  border border-transparent  transition-all duration-300 group ${link.contentCss}`}
                                        >
                                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${link.iconCss}`}>
                                                {link.icon}
                                            </div>
                                            <div>
                                                <p className="text-white font-medium">{link.name}</p>
                                                <p className="text-gray-400 text-sm">{link.description}</p>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

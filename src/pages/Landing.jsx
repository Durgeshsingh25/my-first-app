import React from 'react'
import { ArrowRight, Zap, Shield, Globe, Star, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Landing = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    return (
        <div className="min-h-screen bg-white">
            <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
                <nav className="container mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <Zap className="w-8 h-8 text-blue-600" />
                            <span className="text-2xl font-bold text-gray-900">Nexus</span>
                        </div>

                        <div className="hidden md:flex items-center gap-8">
                            <Link to="/about?id=1234" className="text-gray-600 hover:text-gray-900 transition-colors">About us</Link>
                            <Link to="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact us</Link>
                            <Link to="/features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</Link>
                            <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors">Services</Link>
                            <Link to="/login" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Get Started
                            </Link>
                        </div>

                        <button
                            className="md:hidden"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                    {mobileMenuOpen && (
                        <div className="md:hidden mt-4 pb-4 flex flex-col gap-4">
                            <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
                            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
                            <a href="#about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
                            <Link to="/login" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                Get Started
                            </Link>
                        </div>
                    )}
                </nav>
            </header>

            <main className="pt-20">
                <section className="container mx-auto px-6 py-20 md:py-32">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full mb-8">
                            <Star className="w-4 h-4 text-blue-600" />
                            <span className="text-sm text-blue-600 font-medium">Trusted by 10,000+ users worldwide</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Build faster with the power of modern tools
                        </h1>

                        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Transform your workflow with cutting-edge technology designed for teams who move fast and think big.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center gap-2 text-lg font-medium shadow-lg shadow-blue-600/30">
                                Start Free Trial
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-8 py-4 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors text-lg font-medium">
                                Watch Demo
                            </button>
                        </div>
                    </div>

                    <div className="mt-20 max-w-6xl mx-auto">
                        <div className="rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 p-2 shadow-2xl">
                            <div className="bg-white rounded-xl p-8 aspect-video flex items-center justify-center">
                                <div className="text-center">
                                    <Globe className="w-24 h-24 text-blue-600 mx-auto mb-4" />
                                    <p className="text-gray-500">Product Preview</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="features" className="bg-gray-50 py-20 md:py-32">
                    <div className="container mx-auto px-6">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                                Everything you need to succeed
                            </h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                                Powerful features designed to help you work smarter, not harder.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                    <Zap className="w-6 h-6 text-blue-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Experience blazing fast performance with our optimized infrastructure built for speed.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                    <Shield className="w-6 h-6 text-green-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Secure by Default</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Enterprise-grade security measures keep your data safe and protected at all times.
                                </p>
                            </div>

                            <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                                    <Globe className="w-6 h-6 text-purple-600" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Scale</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    Deploy globally with our distributed network spanning across continents.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-6">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                                Ready to get started?
                            </h2>
                            <p className="text-xl text-gray-600 mb-12">
                                Join thousands of teams already building the future with Nexus.
                            </p>
                            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 flex items-center justify-center gap-2 text-lg font-medium shadow-lg shadow-blue-600/30 mx-auto">
                                Start Your Free Trial
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center gap-2 mb-4 md:mb-0">
                            <Zap className="w-6 h-6 text-blue-400" />
                            <span className="text-xl font-bold">Nexus</span>
                        </div>
                        <p className="text-gray-400">
                            &copy; 2025 Nexus. All rights reserved.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Landing

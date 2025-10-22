"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                                <span className="text-2xl font-bold text-yellow-500">M</span>
                            </div>
                            <span className="text-xl font-bold">
                                Meta<span className="text-primary">Bee</span>
                            </span>
                        </div>
                        <p className="text-secondary-foreground/80">
                            Educação, inovação e robótica para formar os criadores do futuro.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">
                            Links Rápidos
                        </h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="#home"
                                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#sobre"
                                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                                >
                                    Sobre
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#cursos"
                                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                                >
                                    Cursos
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#contato"
                                    className="text-secondary-foreground/80 hover:text-primary transition-colors"
                                >
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4 text-primary">Contato</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-secondary-foreground/80">
                                <Mail size={18} className="text-primary" />
                                <span>contato@metabee.tec.br</span>
                            </li>
                            <li className="flex items-center gap-2 text-secondary-foreground/80">
                                <Phone size={18} className="text-primary" />
                                <span>(00) 0000-0000</span>
                            </li>
                            <li className="flex items-center gap-2 text-secondary-foreground/80">
                                <MapPin size={18} className="text-primary" />
                                <span>Brasil</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-secondary-foreground/20 mt-8 pt-8 text-center text-secondary-foreground/60">
                    <p>
                        &copy; {new Date().getFullYear()} MetaBee. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}

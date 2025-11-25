"use client";

import Link from "next/link";
import { Home, Users, BookOpen, Settings, LogOut } from "lucide-react";

export default function AdminSidebar() {
    const menu = [
        { icon: <Home className="w-5 h-5" />, label: "Dashboard", href: "/admin" },
        { icon: <Users className="w-5 h-5" />, label: "Alunos", href: "/admin/alunos" },
        { icon: <BookOpen className="w-5 h-5" />, label: "Cursos", href: "/admin/cursos" },
        { icon: <Settings className="w-5 h-5" />, label: "Configurações", href: "/admin/config" },
    ];

    return (
        <aside className="w-64 h-screen bg-card border-r flex flex-col justify-between p-6 fixed left-0 top-0">
            <div>
                <h1 className="text-xl font-bold mb-8">MetaBee Admin</h1>

                <nav className="space-y-2">
                    {menu.map((item, i) => (
                        <Link
                            key={i}
                            href={item.href}
                            className="flex items-center gap-3 p-3 rounded-lg hover:bg-accent transition"
                        >
                            {item.icon}
                            <span className="font-medium">{item.label}</span>
                        </Link>
                    ))}
                </nav>
            </div>

            <button className="flex items-center gap-3 text-red-600 hover:text-red-700">
                <LogOut className="w-5 h-5" />
                Sair
            </button>
        </aside>
    );
}

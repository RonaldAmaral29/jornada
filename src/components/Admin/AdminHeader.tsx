"use client";

import { Button } from "@/components/ui/button";
import { Bell, Menu } from "lucide-react";
import Image from "next/image";

export default function AdminHeader() {
    return (
        <header className="h-16 bg-background border-b fixed left-64 top-0 right-0 flex items-center justify-between px-6">
            <div className="flex items-center gap-3">
                <Menu className="w-6 h-6 md:hidden" />
                <h2 className="text-xl font-semibold">Painel Administrativo</h2>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                    <Bell className="w-5 h-5" />
                </Button>

                <Image
                    src="/avatar.png"
                    width={36}
                    height={36}
                    alt="Avatar"
                    className="rounded-full border"
                />
            </div>
        </header>
    );
}

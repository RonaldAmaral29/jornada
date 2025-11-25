"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import { Conteudo } from "@/types/conteudo";
import { Curso } from "@/types/curso";

import ConteudoTable from "@/components/Admin/Conteudos/ConteudoTable";
import ConteudoModal from "@/components/Admin/Conteudos/ConteudoModal";

export default function AdminConteudosPage() {
    const [conteudos, setConteudos] = useState<Conteudo[]>([]);
    const [cursos, setCursos] = useState<Curso[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedConteudo, setSelectedConteudo] = useState<Conteudo | null>(null);

    const fetchConteudos = async () => {
        const res = await fetch("http://localhost:8000/api/conteudos");
        setConteudos(await res.json());
    };

    const fetchCursos = async () => {
        const res = await fetch("http://localhost:8000/api/cursos");
        setCursos(await res.json());
    };

    useEffect(() => {
        fetchConteudos();
        fetchCursos();
    }, []);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Gerenciar Conteúdos</h1>

                <Button
                    className="gap-2"
                    onClick={() => {
                        setSelectedConteudo(null);
                        setOpenModal(true);
                    }}
                >
                    <PlusCircle className="w-5 h-5" />
                    Novo Conteúdo
                </Button>
            </div>

            <ConteudoTable
                conteudos={conteudos}
                cursos={cursos}
                onEdit={(c) => {
                    setSelectedConteudo(c);
                    setOpenModal(true);
                }}
                refresh={fetchConteudos}
            />

            <ConteudoModal
                open={openModal}
                onOpenChange={setOpenModal}
                conteudo={selectedConteudo}
                cursos={cursos}
                refresh={fetchConteudos}
            />
        </div>
    );
}

"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import { Curso } from "@/types/curso";
import CursoTable from "@/components/Admin/cursos/CursoTable";
import CursoModal from "@/components/Admin/cursos/CursoModal";

export default function AdminCursosPage() {
    const [cursos, setCursos] = useState<Curso[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedCurso, setSelectedCurso] = useState<Curso | null>(null);

    const fetchCursos = async () => {
        const res = await fetch("http://localhost:8000/api/cursos");
        const data = await res.json();
        setCursos(data);
    };

    useEffect(() => {
        fetchCursos();
    }, []);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Gerenciar Cursos</h1>

                <Button
                    className="gap-2"
                    onClick={() => {
                        setSelectedCurso(null);
                        setOpenModal(true);
                    }}
                >
                    <PlusCircle className="w-5 h-5" />
                    Novo Curso
                </Button>
            </div>

            <CursoTable
                cursos={cursos}
                onEdit={(curso) => {
                    setSelectedCurso(curso);
                    setOpenModal(true);
                }}
                refresh={fetchCursos}
            />

            <CursoModal
                open={openModal}
                onOpenChange={setOpenModal}
                curso={selectedCurso}
                refresh={fetchCursos}
            />
        </div>
    );
}

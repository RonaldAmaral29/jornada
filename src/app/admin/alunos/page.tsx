"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import AlunoTable from "@/components/Admin/aluno/AlunoTable";
import AlunoModal from "@/components/Admin/aluno/AlunoModal";

import { Aluno } from "@/types/aluno";


export default function AdminAlunosPage() {
    const [alunos, setAlunos] = useState([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedAluno, setSelectedAluno] = useState<Aluno | null>(null);

    const fetchAlunos = async () => {
        const res = await fetch("http://localhost:8000/api/alunos");
        const data = await res.json();
        setAlunos(data);
    };

    useEffect(() => {
        fetchAlunos();
    }, []);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Gerenciar Alunos</h1>

                <Button
                    className="gap-2"
                    onClick={() => {
                        setSelectedAluno(null);
                        setOpenModal(true);
                    }}
                >
                    <PlusCircle className="w-5 h-5" />
                    Novo Aluno
                </Button>
            </div>

            <AlunoTable
                alunos={alunos}
                onEdit={(aluno) => {
                    setSelectedAluno(aluno);
                    setOpenModal(true);
                }}
                refresh={fetchAlunos}
            />

            <AlunoModal
                open={openModal}
                onOpenChange={setOpenModal}
                aluno={selectedAluno}
                refresh={fetchAlunos}
            />
        </div>
    );
}

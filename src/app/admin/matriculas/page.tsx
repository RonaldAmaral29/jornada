"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

import { Matricula } from "@/types/matricula";
import { Aluno } from "@/types/aluno";
import { Curso } from "@/types/curso";

import MatriculaTable from "@/components/Admin/matriculas/MatriculaTable";
import MatriculaModal from "@/components/Admin/matriculas/MatriculaModal";

export default function AdminMatriculasPage() {
    const [matriculas, setMatriculas] = useState<Matricula[]>([]);
    const [alunos, setAlunos] = useState<Aluno[]>([]);
    const [cursos, setCursos] = useState<Curso[]>([]);
    const [openModal, setOpenModal] = useState(false);
    const [selectedMatricula, setSelectedMatricula] = useState<Matricula | null>(null);

    // carregar matrículas
    const fetchMatriculas = async () => {
        const res = await fetch("http://localhost:8000/api/matriculas");
        setMatriculas(await res.json());
    };

    // carregar alunos e cursos
    const fetchAlunos = async () => {
        const res = await fetch("http://localhost:8000/api/alunos");
        setAlunos(await res.json());
    };

    const fetchCursos = async () => {
        const res = await fetch("http://localhost:8000/api/cursos");
        setCursos(await res.json());
    };

    useEffect(() => {
        fetchMatriculas();
        fetchAlunos();
        fetchCursos();
    }, []);

    return (
        <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-bold">Gerenciar Matrículas</h1>

                <Button
                    className="gap-2"
                    onClick={() => {
                        setSelectedMatricula(null);
                        setOpenModal(true);
                    }}
                >
                    <PlusCircle className="w-5 h-5" />
                    Nova Matrícula
                </Button>
            </div>

            <MatriculaTable
                matriculas={matriculas}
                alunos={alunos}
                cursos={cursos}
                onEdit={(m) => {
                    setSelectedMatricula(m);
                    setOpenModal(true);
                }}
                refresh={fetchMatriculas}
            />

            <MatriculaModal
                open={openModal}
                onOpenChange={setOpenModal}
                matricula={selectedMatricula}
                alunos={alunos}
                cursos={cursos}
                refresh={fetchMatriculas}
            />
        </div>
    );
}

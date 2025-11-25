"use client";

import { Button } from "@/components/ui/button";
import { Trash, Pencil } from "lucide-react";
import { Matricula } from "@/types/matricula";
import { Aluno } from "@/types/aluno";
import { Curso } from "@/types/curso";
import DeleteMatriculaAlert from "./DeleteMatriculaAlert";

import { useState } from "react";

interface Props {
    matriculas: Matricula[];
    alunos: Aluno[];
    cursos: Curso[];
    onEdit: (m: Matricula) => void;
    refresh: () => void;
}

export default function MatriculaTable({ matriculas, alunos, cursos, onEdit, refresh }: Props) {
    const [selected, setSelected] = useState<Matricula | null>(null);

    const getAlunoNome = (id: number) => alunos.find(a => a.id === id)?.nome ?? "—";
    const getCursoNome = (id: number) => cursos.find(c => c.id === id)?.nome ?? "—";

    return (
        <>
            <DeleteMatriculaAlert
                matricula={selected}
                onClose={() => setSelected(null)}
                refresh={refresh}
            />

            <div className="border rounded-xl bg-card p-4">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">Aluno</th>
                            <th className="p-3">Curso</th>
                            <th className="p-3">Status</th>
                            <th className="p-3 text-right">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {matriculas.map((m) => (
                            <tr key={m.id} className="border-b hover:bg-accent/40">
                                <td className="p-3">{getAlunoNome(m.aluno_id)}</td>
                                <td className="p-3">{getCursoNome(m.curso_id)}</td>
                                <td className="p-3 capitalize">{m.status}</td>

                                <td className="p-3 text-right space-x-2">
                                    <Button variant="outline" size="icon" onClick={() => onEdit(m)}>
                                        <Pencil className="w-4 h-4" />
                                    </Button>

                                    <Button variant="destructive" size="icon" onClick={() => setSelected(m)}>
                                        <Trash className="w-4 h-4" />
                                    </Button>
                                </td>
                            </tr>
                        ))}

                        {matriculas.length === 0 && (
                            <tr>
                                <td colSpan={4} className="p-6 text-center text-muted-foreground">
                                    Nenhuma matrícula encontrada.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

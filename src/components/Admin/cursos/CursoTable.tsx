"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash, Pencil } from "lucide-react";
import { Curso } from "@/types/curso";
import DeleteCursoAlert from "./DeleteCursoAlert";

interface CursoTableProps {
    cursos: Curso[];
    onEdit: (curso: Curso) => void;
    refresh: () => void;
}

export default function CursoTable({ cursos, onEdit, refresh }: CursoTableProps) {
    const [deleteCurso, setDeleteCurso] = useState<Curso | null>(null);

    return (
        <>
            <DeleteCursoAlert
                curso={deleteCurso}
                onClose={() => setDeleteCurso(null)}
                refresh={refresh}
            />

            <div className="border rounded-xl bg-card p-4">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">Nome</th>
                            <th className="p-3">Carga Horária</th>
                            <th className="p-3">Valor</th>
                            <th className="p-3 text-right">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cursos.map((curso) => (
                            <tr key={curso.id} className="border-b hover:bg-accent/40">
                                <td className="p-3">{curso.nome}</td>
                                <td className="p-3">{curso.carga_horaria}h</td>
                                <td className="p-3">R$ {curso.valor?.toFixed(2)}</td>

                                <td className="p-3 text-right space-x-2">
                                    <Button variant="outline" size="icon" onClick={() => onEdit(curso)}>
                                        <Pencil className="w-4 h-4" />
                                    </Button>

                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        onClick={() => setDeleteCurso(curso)}
                                    >
                                        <Trash className="w-4 h-4" />
                                    </Button>
                                </td>
                            </tr>
                        ))}

                        {cursos.length === 0 && (
                            <tr>
                                <td colSpan={4} className="p-6 text-center text-muted-foreground">
                                    Nenhum curso encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

"use client";

import { Button } from "@/components/ui/button";
import { Trash, Pencil } from "lucide-react";
import DeleteAlert from "./DeleteAlert";
import { Aluno } from "@/types/aluno";
import { useState } from "react";

interface AlunoTableProps {
    alunos: Aluno[];
    onEdit: (aluno: Aluno) => void;
    refresh: () => void;
}

export default function AlunoTable({
    alunos,
    onEdit,
    refresh,
}: AlunoTableProps) {
    const [deleteAluno, setDeleteAluno] = useState<Aluno | null>(null);

    return (
        <>
            <DeleteAlert
                aluno={deleteAluno}
                onClose={() => setDeleteAluno(null)}
                refresh={refresh}
            />

            <div className="border rounded-xl bg-card p-4">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">Nome</th>
                            <th className="p-3">E-mail</th>
                            <th className="p-3">CPF</th>
                            <th className="p-3">Telefone</th>
                            <th className="p-3 text-right">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {alunos.map((aluno) => (
                            <tr key={aluno.id} className="border-b hover:bg-accent/40">
                                <td className="p-3">{aluno.nome}</td>
                                <td className="p-3">{aluno.email}</td>
                                <td className="p-3">{aluno.cpf}</td>
                                <td className="p-3">{aluno.telefone}</td>

                                <td className="p-3 text-right space-x-2">
                                    <Button
                                        variant="outline"
                                        size="icon"
                                        onClick={() => onEdit(aluno)}
                                    >
                                        <Pencil className="w-4 h-4" />
                                    </Button>

                                    <Button
                                        variant="destructive"
                                        size="icon"
                                        onClick={() => setDeleteAluno(aluno)}
                                    >
                                        <Trash className="w-4 h-4" />
                                    </Button>
                                </td>
                            </tr>
                        ))}

                        {alunos.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-6 text-center text-muted-foreground">
                                    Nenhum aluno encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

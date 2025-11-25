"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Trash, Pencil } from "lucide-react";

import { Conteudo } from "@/types/conteudo";
import { Curso } from "@/types/curso";

import DeleteConteudoAlert from "./DeleteConteudoAlert";

interface Props {
    conteudos: Conteudo[];
    cursos: Curso[];
    onEdit: (c: Conteudo) => void;
    refresh: () => void;
}

export default function ConteudoTable({ conteudos, cursos, onEdit, refresh }: Props) {
    const [selected, setSelected] = useState<Conteudo | null>(null);

    const getCursoNome = (id: number) =>
        cursos.find((c) => c.id === id)?.nome ?? "—";

    return (
        <>
            <DeleteConteudoAlert
                conteudo={selected}
                onClose={() => setSelected(null)}
                refresh={refresh}
            />

            <div className="border rounded-xl bg-card p-4">
                <table className="w-full text-left">
                    <thead>
                        <tr className="border-b">
                            <th className="p-3">Curso</th>
                            <th className="p-3">Título</th>
                            <th className="p-3">Tipo</th>
                            <th className="p-3">Ordem</th>
                            <th className="p-3 text-right">Ações</th>
                        </tr>
                    </thead>

                    <tbody>
                        {conteudos.map((c) => (
                            <tr key={c.id} className="border-b hover:bg-accent/40">
                                <td className="p-3">{getCursoNome(c.curso_id)}</td>
                                <td className="p-3">{c.titulo}</td>
                                <td className="p-3 capitalize">{c.tipo}</td>
                                <td className="p-3">{c.ordem}</td>

                                <td className="p-3 text-right space-x-2">
                                    <Button variant="outline" size="icon" onClick={() => onEdit(c)}>
                                        <Pencil className="w-4 h-4" />
                                    </Button>

                                    <Button variant="destructive" size="icon" onClick={() => setSelected(c)}>
                                        <Trash className="w-4 h-4" />
                                    </Button>
                                </td>
                            </tr>
                        ))}

                        {conteudos.length === 0 && (
                            <tr>
                                <td colSpan={5} className="p-6 text-center text-muted-foreground">
                                    Nenhum conteúdo encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
}

"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Matricula } from "@/types/matricula";
import { Aluno } from "@/types/aluno";
import { Curso } from "@/types/curso";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    matricula: Matricula | null;
    alunos: Aluno[];
    cursos: Curso[];
    refresh: () => void;
}

export default function MatriculaModal({
    open,
    onOpenChange,
    matricula,
    alunos,
    cursos,
    refresh,
}: Props) {
    const { register, handleSubmit } = useForm<Matricula>({
        defaultValues: matricula ?? {
            aluno_id: 0,
            curso_id: 0,
            status: "ativo",
        },
    });

    const onSubmit = async (data: Matricula) => {
        const method = matricula ? "PUT" : "POST";
        const url = matricula
            ? `http://localhost:8000/api/matriculas/${matricula.id}`
            : "http://localhost:8000/api/matriculas";

        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            toast.success(matricula ? "Matrícula atualizada!" : "Matrícula criada!");
            onOpenChange(false);
            refresh();
        } else {
            toast.error("Erro ao salvar matrícula.");
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>{matricula ? "Editar Matrícula" : "Nova Matrícula"}</DialogTitle>
                </DialogHeader>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <select {...register("aluno_id")} className="w-full p-2 border rounded">
                        <option value="">Selecione o aluno</option>
                        {alunos.map((a) => (
                            <option key={a.id} value={a.id}>{a.nome}</option>
                        ))}
                    </select>

                    <select {...register("curso_id")} className="w-full p-2 border rounded">
                        <option value="">Selecione o curso</option>
                        {cursos.map((c) => (
                            <option key={c.id} value={c.id}>{c.nome}</option>
                        ))}
                    </select>

                    <select {...register("status")} className="w-full p-2 border rounded">
                        <option value="ativo">Ativo</option>
                        <option value="concluido">Concluído</option>
                        <option value="cancelado">Cancelado</option>
                    </select>

                    <Button type="submit" className="w-full">
                        {matricula ? "Salvar Alterações" : "Criar Matrícula"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

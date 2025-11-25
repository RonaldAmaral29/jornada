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
import { Curso } from "@/types/curso";

interface CursoModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    curso: Curso | null;
    refresh: () => void;
}

export default function CursoModal({
    open,
    onOpenChange,
    curso,
    refresh,
}: CursoModalProps) {
    const { register, handleSubmit } = useForm<Curso>({
        defaultValues: curso ?? {
            nome: "",
            descricao: "",
            carga_horaria: 0,
            valor: 0,
        },
    });

    const onSubmit = async (data: Curso) => {
        const method = curso ? "PUT" : "POST";
        const url = curso
            ? `http://localhost:8000/api/cursos/${curso.id}`
            : "http://localhost:8000/api/cursos";

        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            toast.success(curso ? "Curso atualizado!" : "Curso criado!");
            onOpenChange(false);
            refresh();
        } else {
            toast.error("Erro ao salvar o curso.");
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>{curso ? "Editar Curso" : "Novo Curso"}</DialogTitle>
                </DialogHeader>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome do Curso" {...register("nome")} />
                    <Input placeholder="Descrição" {...register("descricao")} />
                    <Input type="number" placeholder="Carga Horária" {...register("carga_horaria")} />
                    <Input type="number" placeholder="Valor" {...register("valor")} />

                    <Button type="submit" className="w-full">
                        {curso ? "Salvar Alterações" : "Criar Curso"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

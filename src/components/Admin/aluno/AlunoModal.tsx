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
import { Aluno } from "@/types/aluno";

interface AlunoModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    aluno: Aluno | null;
    refresh: () => void;
}

export default function AlunoModal({
    open,
    onOpenChange,
    aluno,
    refresh,
}: AlunoModalProps) {
    const { register, handleSubmit, reset } = useForm<Aluno>({
        defaultValues: aluno ?? {
            nome: "",
            email: "",
            cpf: "",
            telefone: "",
        },
    });

    const onSubmit = async (data: Aluno) => {
        const method = aluno ? "PUT" : "POST";
        const url = aluno
            ? `http://localhost:8000/api/alunos/${aluno.id}`
            : "http://localhost:8000/api/alunos";

        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            toast.success(aluno ? "Aluno atualizado!" : "Aluno criado!");
            onOpenChange(false);
            refresh();
        } else {
            toast.error("Erro ao salvar aluno");
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>{aluno ? "Editar Aluno" : "Novo Aluno"}</DialogTitle>
                </DialogHeader>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome" {...register("nome")} />
                    <Input placeholder="Email" {...register("email")} />
                    <Input placeholder="CPF" {...register("cpf")} />
                    <Input placeholder="Telefone" {...register("telefone")} />

                    <Button type="submit" className="w-full">
                        {aluno ? "Salvar Alterações" : "Criar Aluno"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

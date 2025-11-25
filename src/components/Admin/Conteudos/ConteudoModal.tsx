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

import { Conteudo } from "@/types/conteudo";
import { Curso } from "@/types/curso";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    conteudo: Conteudo | null;
    cursos: Curso[];
    refresh: () => void;
}

export default function ConteudoModal({
    open,
    onOpenChange,
    conteudo,
    cursos,
    refresh,
}: Props) {
    const { register, handleSubmit } = useForm<Conteudo>({
        defaultValues: conteudo ?? {
            curso_id: 0,
            titulo: "",
            tipo: "texto",
            arquivo_url: "",
            ordem: 0,
        },
    });

    const onSubmit = async (data: Conteudo) => {
        const method = conteudo ? "PUT" : "POST";
        const url = conteudo
            ? `http://localhost:8000/api/conteudos/${conteudo.id}`
            : "http://localhost:8000/api/conteudos";

        const res = await fetch(url, {
            method,
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        if (res.ok) {
            toast.success(conteudo ? "Conteúdo atualizado!" : "Conteúdo criado!");
            onOpenChange(false);
            refresh();
        } else {
            toast.error("Erro ao salvar conteúdo.");
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-lg">
                <DialogHeader>
                    <DialogTitle>{conteudo ? "Editar Conteúdo" : "Novo Conteúdo"}</DialogTitle>
                </DialogHeader>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                    <select {...register("curso_id")} className="w-full p-2 border rounded">
                        <option value="">Selecione o curso</option>
                        {cursos.map((c) => (
                            <option key={c.id} value={c.id}>{c.nome}</option>
                        ))}
                    </select>

                    <Input placeholder="Título" {...register("titulo")} />

                    <select {...register("tipo")} className="w-full p-2 border rounded">
                        <option value="texto">Texto</option>
                        <option value="pdf">PDF</option>
                        <option value="video">Vídeo</option>
                    </select>

                    <Input placeholder="URL do Arquivo" {...register("arquivo_url")} />

                    <Input type="number" placeholder="Ordem" {...register("ordem")} />

                    <Button type="submit" className="w-full">
                        {conteudo ? "Salvar Alterações" : "Criar Conteúdo"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
}

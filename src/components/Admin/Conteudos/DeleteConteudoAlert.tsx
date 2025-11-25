"use client";

import {
    AlertDialog,
    AlertDialogContent,
    AlertDialogHeader,
    AlertDialogFooter,
    AlertDialogTitle,
    AlertDialogCancel,
    AlertDialogAction,
} from "@/components/ui/alert-dialog";

import { toast } from "sonner";
import { Conteudo } from "@/types/conteudo";

interface Props {
    conteudo: Conteudo | null;
    onClose: () => void;
    refresh: () => void;
}

export default function DeleteConteudoAlert({ conteudo, onClose, refresh }: Props) {
    const deleteConteudo = async () => {
        if (!conteudo) return;

        const res = await fetch(`http://localhost:8000/api/conteudos/${conteudo.id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            toast.success("Conteúdo excluído!");
            refresh();
            onClose();
        } else {
            toast.error("Erro ao excluir conteúdo.");
        }
    };

    return (
        <AlertDialog open={!!conteudo} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>

                    <AlertDialogAction className="bg-red-600" onClick={deleteConteudo}>
                        Excluir
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

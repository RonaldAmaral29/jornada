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
import { Aluno } from "@/types/aluno";

interface DeleteAlertProps {
    aluno: Aluno | null;
    onClose: () => void;
    refresh: () => void;
}

export default function DeleteAlert({
    aluno,
    onClose,
    refresh,
}: DeleteAlertProps) {
    const deleteAluno = async () => {
        if (!aluno) return;

        const res = await fetch(`http://localhost:8000/api/alunos/${aluno.id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            toast.success("Aluno excluído!");
            refresh();
            onClose();
        } else {
            toast.error("Erro ao excluir aluno.");
        }
    };

    return (
        <AlertDialog open={!!aluno} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Tem certeza que deseja excluir este aluno?
                    </AlertDialogTitle>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>
                    <AlertDialogAction className="bg-red-600" onClick={deleteAluno}>
                        Excluir
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

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
import { Curso } from "@/types/curso";

interface DeleteCursoProps {
    curso: Curso | null;
    onClose: () => void;
    refresh: () => void;
}

export default function DeleteCursoAlert({
    curso,
    onClose,
    refresh,
}: DeleteCursoProps) {
    const deleteCurso = async () => {
        if (!curso) return;

        const res = await fetch(`http://localhost:8000/api/cursos/${curso.id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            toast.success("Curso excluído!");
            refresh();
            onClose();
        } else {
            toast.error("Erro ao excluir curso.");
        }
    };

    return (
        <AlertDialog open={!!curso} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Tem certeza que deseja excluir este curso?
                    </AlertDialogTitle>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>

                    <AlertDialogAction className="bg-red-600" onClick={deleteCurso}>
                        Excluir
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

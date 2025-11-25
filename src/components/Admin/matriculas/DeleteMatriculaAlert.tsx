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
import { Matricula } from "@/types/matricula";

interface Props {
    matricula: Matricula | null;
    onClose: () => void;
    refresh: () => void;
}

export default function DeleteMatriculaAlert({ matricula, onClose, refresh }: Props) {

    const deleteMatricula = async () => {
        if (!matricula) return;

        const res = await fetch(`http://localhost:8000/api/matriculas/${matricula.id}`, {
            method: "DELETE",
        });

        if (res.ok) {
            toast.success("Matrícula excluída!");
            refresh();
            onClose();
        } else {
            toast.error("Erro ao excluir matrícula.");
        }
    };

    return (
        <AlertDialog open={!!matricula} onOpenChange={onClose}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Deseja realmente excluir esta matrícula?</AlertDialogTitle>
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel>Cancelar</AlertDialogCancel>

                    <AlertDialogAction className="bg-red-600" onClick={deleteMatricula}>
                        Excluir
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}

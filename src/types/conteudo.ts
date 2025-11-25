export interface Conteudo {
    id?: number;
    curso_id: number;
    titulo: string;
    tipo: string;      // video | pdf | texto
    arquivo_url?: string;
    ordem?: number;
}

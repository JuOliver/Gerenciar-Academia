export interface Aluno{
    id: number;
    nome: string;
    valorMensalidade: number;
    dataUltimoPgto: string | Date;
    dataInclusaoSistema: string | Date;
    email: string;
    senha: string;
}
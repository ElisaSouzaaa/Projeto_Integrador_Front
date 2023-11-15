import Categoria from './Categoria';
import Usuario from './Usuario';

export default interface Produto {
    id: number;
    nome: string;
    descricao: string;
    valor: number;
    quantidade: number;
    vendedor: string;
    foto: string;
    categoria: Categoria | null;
    usuario: Usuario | null;
}
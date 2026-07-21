export interface ComodosDTO {
    quartos: number;
    banheiros: number;
    suites: number;
    vagas_garage: number;
}


export interface ImovelDTO {
    id: number;
    id_loteamento: number;
    id_tipo_imovel: number | null;
    tamanho_total_m2: number | null;
    area_construida_m2: number| null;
    comodos: ComodosDTO | null;
    descricao: string | null;
    valor_venda: number | null;
    valor_avaliacao_caixa: number | null;
    status: number | null;
    created_at: string | null;
    nome: string | null;
    endereco: string | null;
    url_foto: string | null;
    classificacao: 'comum' | 'destaque' | 'lancamento';
}

export type CreateImovelDTO = Omit<ImovelDTO, 'id' | 'created_at'>;
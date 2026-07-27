import { ImovelDTO } from "../imoveis/imoveis.dto";

export interface LoteamentoDTO {
  id: number;
  nome_loteamento: string | null;
  quantidade_unidades: number | null;
  logradouro: string | null;
  numero: string | null;
  bairro: string | null;
  cidade: string | null;
  uf: string | null;
  cep: string | null;
  id_tipo_loteamento: number | null;
  created_at: string | null;
  imoveis?: ImovelDTO[];
}

export interface CreateLoteamentoDTO extends Omit<LoteamentoDTO, 'id' | 'created_at'> {}
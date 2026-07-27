import Imovel from '../modules/imoveis/imoveis.model'; 
import Loteamento from '../modules/loteamentos/loteamentos.model'; 
import { ImovelFoto } from '../modules/imoveis/imoveis-fotos.model'; 
 
// Associações Imovel ↔ ImovelFoto 
Imovel.hasMany(ImovelFoto, { foreignKey: 'id_imovel', as: 'fotos' }); 
ImovelFoto.belongsTo(Imovel, { foreignKey: 'id_imovel', as: 'imovel' }); 
 
// Associação Imovel ↔ Loteamento 
Imovel.belongsTo(Loteamento, { foreignKey: 'id_loteamento', as: 'loteamento' }); 
Loteamento.hasMany(Imovel, { foreignKey: 'id_loteamento', as: 'imoveis' }); 
 
export { Imovel, Loteamento, ImovelFoto }; 
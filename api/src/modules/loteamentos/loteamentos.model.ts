import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute } from "sequelize";
import { sequelize } from "../../config/database";
import Imovel from "../imoveis/imoveis.model";

class Loteamento extends Model<InferAttributes<Loteamento>, InferCreationAttributes<Loteamento>> {
  declare id: CreationOptional<number>;
  declare nome_loteamento: string | null;
  declare quantidade_unidades: number | null;
  declare logradouro: string | null;
  declare numero: string | null;
  declare bairro: string | null;
  declare cidade: string | null;
  declare uf: string | null;
  declare cep: string | null;
  declare id_tipo_loteamento: number | null;
  declare imoveis?: NonAttribute<Imovel[]>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Loteamento.init(
  {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    nome_loteamento: { type: DataTypes.STRING(150), allowNull: true },
    quantidade_unidades: { type: DataTypes.INTEGER, allowNull: true },
    logradouro: { type: DataTypes.STRING(255), allowNull: true },
    numero: { type: DataTypes.STRING(20), allowNull: true },
    bairro: { type: DataTypes.STRING(100), allowNull: true },
    cidade: { type: DataTypes.STRING(100), allowNull: true },
    uf: { type: DataTypes.CHAR(2), allowNull: true },
    cep: { type: DataTypes.CHAR(8), allowNull: true },
    id_tipo_loteamento: { type: DataTypes.INTEGER, allowNull: true },
    
    createdAt: { type: DataTypes.DATE, field: 'created_at' },
    updatedAt: { type: DataTypes.DATE, field: 'updated_at' },
  },
  {
    sequelize,
    tableName: 'loteamentos',
    underscored: true,
    timestamps: true,
  }
);



export default Loteamento;
import { DataTypes, Model, InferAttributes, InferCreationAttributes, CreationOptional } from "sequelize";
import { sequelize } from "../../config/database";

class Imovel extends Model<InferAttributes<Imovel>, InferCreationAttributes<Imovel>> {
    declare id: CreationOptional<number>;
    declare id_campanha: number;
    declare id_tipo_imovel: CreationOptional<number | null>;
    declare tamanho_total_m2: CreationOptional<number | null>;
    declare area_construida_m2: CreationOptional<number | null>;
    declare comodos: CreationOptional<object | null>;
    declare descricao: CreationOptional<string | null>;
    declare valor_venda: CreationOptional<number | null>;
    declare valor_avaliacao_caixa: CreationOptional<number | null>;
    declare status: CreationOptional<number>;
    declare nome: CreationOptional<string | null>;
    declare endereco: CreationOptional<string | null>;
    declare url_foto: CreationOptional<string | null>;
    declare classificacao: CreationOptional<string>;

    declare createdAt: CreationOptional<Date>;
    declare updatedAt: CreationOptional<Date>;
}

Imovel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_campanha: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        id_tipo_imovel: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        tamanho_total_m2: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        area_construida_m2: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        comodos: {
            type: DataTypes.JSONB,
            allowNull: true,
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        valor_venda: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        valor_avaliacao_caixa: {
            type: DataTypes.DECIMAL,
            allowNull: true,
        },
        status: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        nome: {
            type: DataTypes.STRING(255),
            allowNull: true,
        },
        endereco: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        url_foto: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        classificacao: {
            type: DataTypes.STRING(50),
            defaultValue: 'comum',
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
        },
    },
    {
        sequelize,
        tableName: 'imoveis',
        timestamps: true, 
        underscored: true, 
    }
);

export default Imovel;
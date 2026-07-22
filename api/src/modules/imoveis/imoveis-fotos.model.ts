import { Model, DataTypes, InferAttributes, InferCreationAttributes, CreationOptional } from 'sequelize'
import {sequelize} from '../../config/database';

export class ImovelFoto extends Model<InferAttributes<ImovelFoto>, InferCreationAttributes<ImovelFoto>> {

    declare id: CreationOptional<number>;
    declare id_imovel: number;
    declare url_foto: string;
    declare destaque: CreationOptional<boolean>;
    declare ordem: CreationOptional<number>;
    declare created_at: CreationOptional<Date>;
    declare updated_at: CreationOptional<Date>;

}

ImovelFoto.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        id_imovel: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        url_foto: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        destaque: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        ordem: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        created_at: DataTypes.DATE,
        updated_at: DataTypes.DATE,
    },
    {
        sequelize,
        tableName: 'imovel_fotos',
        underscored: true,
        timestamps: true,
    }
);


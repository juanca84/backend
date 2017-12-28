/**
 * Módulo que mapea los ROLES_RUTAS.
 *
 * @module
 *
 **/

module.exports = (sequelize, DataType) => {
  const parametro_formulario = sequelize.define("parametro_formulario", {
    id_parametro_formulario: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      xlabel: 'Id rol ruta',
    },
    estado: {
      type: DataType.STRING(30),
      field: 'estado',
      xlabel: 'Estado',
      allowNull: false,
      defaultValue: 'ACTIVO',
      validate: {
        isIn: {args: [['ACTIVO', 'INACTIVO', 'ELIMINADO']], msg: "El campo estado sólo permite valores: ACTIVO, INACTIVO o ELIMINADO."},
      },
    },
    _usuario_creacion: {
      type: DataType.STRING(50),
      field: '_usuario_creacion',
      xlabel: 'Usuario de creación',
      allowNull: false,
    },
    _usuario_modificacion: {
      type: DataType.STRING(50),
      field: '_usuario_modificacion',
      xlabel: 'Usuario de modificación',
      allowNull: true,
    },
  },{
    createdAt: '_fecha_creacion',
    updatedAt: '_fecha_modificacion',
    classMethods: {
      associate: (models) => {
        parametro_formulario.belongsTo(models.parametro, {as: 'parametro', foreignKey: {name:'fid_parametro', allowNull: false, unique: 'compositeIndex'}});
        // parametro_formulario.belongsTo(models.formulario, {as: 'formulario', foreignKey: {name:'fid_formulario', allowNull: false, unique: 'compositeIndex'}});
      },
      tableName: 'parametro_formulario',
    },
  });

  return parametro_formulario;
};

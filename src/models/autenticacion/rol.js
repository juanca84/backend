/**
 * Modelo para la tabla rol
 * @param {type} sequelize
 * @param {type} DataType
 * @returns rol
 */
module.exports = (sequelize, DataType) => {
  const rol = sequelize.define("rol", {
    id_rol: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      xlabel: 'Id rol',
    },
    nombre: {
      type: DataType.STRING(100),
      field: 'nombre',
      xlabel: 'Nombre',
      allowNull: false,
      validate: {
        len: {args: [3, 100], msg: "El campo 'Nombre' permite un mínimo de 3 caracteres y un máximo de 100 caracteres"},
      },
      notEmpty: {args: [true], msg: 'El campo Nombre es obligatorio.'},
    },
    descripcion: {
      type: DataType.STRING(200),
      field: 'descripcion',
      xlabel: 'Descripción',
      allowNull: true,
      validate: {
        len: {args: [0, 200], msg: "El campo 'Descripción' permite un máximo de 200 caracteres"},
      },
    },
    peso: {
      type: DataType.INTEGER,
      field: 'peso',
      xlabel: 'Peso',
      allowNull: false,
      notEmpty: {args: [true], msg: 'El campo Peso es obligatorio.'},
    },
    estado: {
      type: DataType.ENUM,
      field: 'estado',
      xlabel: 'Estado',
      allowNull: false,
      defaultValue: 'ACTIVO',
      values: ['ACTIVO', 'INACTIVO', 'ELIMINADO'],
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
        rol.hasMany(models.rol_ruta, {as: 'rol_ruta', foreignKey: {name: 'fid_rol', allowNull: false}});
        rol.hasMany(models.rol_menu, {as: 'rol_menu', foreignKey: {name: 'fid_rol', allowNull: true}});
      },
      tableName: 'rol',
      comment: `Tabla para almacenar roles de usuario dentro del sistema.
      Inicialmente se plantean los roles: Administrador, Técnico y Empresario`,
      paranoid: true,
      buscar: (condicion) => rol.findAll({
        attributes: ["id_rol", "nombre", "descripcion", "peso", "estado"],
        where: condicion,
        order: '_fecha_creacion ASC',
      }),
    },
  });
  return rol;
};

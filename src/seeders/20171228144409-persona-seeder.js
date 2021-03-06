'use strict';

module.exports = {
  up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('persona', [
      // 1
      {
        documento_identidad: '0000001',
        complemento_documento: '00',
        fecha_nacimiento: '1980/01/01',
        nombres: 'AGETIC',
        primer_apellido: 'AGETIC',
        segundo_apellido: 'AGETIC',
        nombre_completo: 'AGETIC AGETIC AGETIC',
        genero: 'M',
        estado: 'ACTIVO',
        _usuario_creacion: 1,
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        tipo_documento: 'CARNET_IDENTIDAD',
        fid_dpa: 140
      },
      // 2
      {
        documento_identidad: '0000002',
        complemento_documento: '00',
        fecha_nacimiento: '1980/01/01',
        nombres: 'Juan',
        primer_apellido: 'Perez',
        segundo_apellido: '',
        nombre_completo: 'Juan Perez',
        genero: 'M',
        estado: 'ACTIVO',
        _usuario_creacion: 1,
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        tipo_documento: 'CARNET_IDENTIDAD',
        fid_dpa: 140
      },
      // 3
      {
        documento_identidad: '0000003',
        complemento_documento: '00',
        fecha_nacimiento: '1980/01/01',
        nombres: 'Rene',
        primer_apellido: 'Lopez',
        segundo_apellido: '',
        nombre_completo: 'Rene Lopez',
        genero: 'M',
        estado: 'ACTIVO',
        _usuario_creacion: 1,
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        tipo_documento: 'CARNET_IDENTIDAD',
        fid_dpa: 139
      },
      // 4
      {
        documento_identidad: '0000004',
        complemento_documento: '00',
        fecha_nacimiento: '1980/01/01',
        nombres: 'Mauricio',
        primer_apellido: 'Torrez',
        segundo_apellido: 'Mallea',
        nombre_completo: 'Mauricio Torrez Mallea',
        genero: 'M',
        estado: 'ACTIVO',
        _usuario_creacion: 1,
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        tipo_documento: 'CARNET_IDENTIDAD',
        fid_dpa: 139
      },
      // 5
      {
        documento_identidad: '0000005',
        complemento_documento: '00',
        fecha_nacimiento: '1980/01/01',
        nombres: 'Juan',
        primer_apellido: 'Perez',
        segundo_apellido: '',
        nombre_completo: 'Juan Perez',
        genero: 'M',
        estado: 'ACTIVO',
        _usuario_creacion: 1,
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        tipo_documento: 'CARNET_IDENTIDAD',
        fid_dpa: 139
      },
      // 6
      {
        documento_identidad: '0000006',
        complemento_documento: '00',
        fecha_nacimiento: '1980/01/01',
        nombres: 'Ana',
        primer_apellido: 'Arispe',
        segundo_apellido: 'Yanarico',
        nombre_completo: 'Ana Arispe Yanarico',
        genero: 'F',
        estado: 'ACTIVO',
        _usuario_creacion: 1,
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        tipo_documento: 'CARNET_IDENTIDAD',
        fid_dpa: 139
      },
      // 7
      {
        documento_identidad: '0000007',
        complemento_documento: '00',
        fecha_nacimiento: '1980/01/01',
        nombres: 'Patricia',
        primer_apellido: 'Cupe',
        segundo_apellido: 'Yanarico',
        nombre_completo: 'Patricia Cupe Yanarico',
        genero: 'F',
        estado: 'ACTIVO',
        _usuario_creacion: 1,
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        tipo_documento: 'CARNET_IDENTIDAD',
        fid_dpa: 140
      },
      // 8
      {
        documento_identidad: '0000008',
        complemento_documento: '00',
        fecha_nacimiento: '1980/01/01',
        nombres: 'Ana Maria',
        primer_apellido: 'Delgado',
        segundo_apellido: 'Yanarico',
        nombre_completo: 'Ana Maria Delgado Yanarico',
        genero: 'F',
        estado: 'ACTIVO',
        _usuario_creacion: 1,
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        tipo_documento: 'CARNET_IDENTIDAD',
        fid_dpa: 140
      },
      // 9
      {
        documento_identidad: '0000009',
        complemento_documento: '00',
        fecha_nacimiento: '1980/01/01',
        nombres: 'Juan Ramon',
        primer_apellido: 'Ramos',
        segundo_apellido: 'Linares',
        nombre_completo: 'Juan Ramon Ramos Linares',
        genero: 'M',
        estado: 'ACTIVO',
        _usuario_creacion: 1,
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        tipo_documento: 'CARNET_IDENTIDAD',
        fid_dpa: 141
      },
      // 10
      {
        documento_identidad: '0000010',
        complemento_documento: '00',
        fecha_nacimiento: '1980/01/01',
        nombres: 'Juan Ramon',
        primer_apellido: 'Quintana',
        segundo_apellido: 'Linares',
        nombre_completo: 'Juan Ramon Quintana Linares',
        genero: 'M',
        estado: 'ACTIVO',
        _usuario_creacion: 1,
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        tipo_documento: 'CARNET_IDENTIDAD',
        fid_dpa: 141
      },
      // 11
      {
        documento_identidad: '0000011',
        complemento_documento: '00',
        fecha_nacimiento: '1980/01/01',
        nombres: 'Ramon',
        primer_apellido: 'Valdez',
        segundo_apellido: 'Linares',
        nombre_completo: 'Ramon Valdez Linares',
        genero: 'M',
        estado: 'ACTIVO',
        _usuario_creacion: 1,
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        tipo_documento: 'CARNET_IDENTIDAD',
      },
      // 12
      {
        documento_identidad: '0000012',
        complemento_documento: '00',
        fecha_nacimiento: '1985/08/15',
        nombres: 'Actor',
        primer_apellido: 'Productivo',
        segundo_apellido: 'Minero',
        nombre_completo: 'Actor Productivo Minero',
        genero: 'M',
        estado: 'ACTIVO',
        _usuario_creacion: 1,
        _fecha_creacion: new Date(),
        _fecha_modificacion: new Date(),
        tipo_documento: 'CARNET_IDENTIDAD',
      },
    ], {});
  },

  down (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  },
};

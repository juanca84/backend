
/* ********************** ACCIONES ********************* */

global.ACCION_ENVIAR = 'ENVIAR';
global.ACCION_MODIFICAR = 'MODIFICAR';
global.ACCION_CATEGORIZAR = 'CATEGORIZAR';


/* ********************** TIPOS DE REGISTROS PERSONA ********************* */
global.PERSONA_TIPO_DOCUMENTO_IDENTIDAD_CI = 'CARNET_IDENTIDAD';
global.PERSONA_TIPO_PASAPORTTE = 'PASAPORTE';
global.PERSONA_TIPO_FUNDEMPRESA = 'FUNDEMPRESA';

global.VALIDACION_MAYORIA_EDAD = 18;

/* ********************** ESTADOS ********************* */
global.ESTADO_ACTIVO = 'ACTIVO';
global.ESTADO_INACTIVO = 'INACTIVO';
global.ESTADO_ELIMINADO = 'ELIMINADO';
global.ESTADO_PENDIENTE = 'PENDIENTE';
global.ESTADO_BAJA_TEMPORAL = 'BAJA_TEMPORAL';
global.ESTADO_BAJA_PERMANENTE = 'BAJA_PERMANENTE';
global.ESTADO_NUEVO = 'NUEVO';
global.ESTADO_ENVIADO = 'ENVIADO';
global.ESTADO_PENDIENTE_PAGO = 'PENDIENTE_PAGO';
global.ESTADO_PAGADO = 'PAGADO';
global.ESTADO_APROBADO = 'APROBADO';
global.ESTADO_OBSERVADO = 'OBSERVADO';
global.ESTADO_RECHAZADO = 'RECHAZADO';
global.ESTADO_ACTUALIZADO = 'ACTUALIZADO';
global.ESTADO_DIFERENTE = 'DIFERENTE';

/* ******* ROLES *************  */
global.ROL_ADMINISTRADOR = 1;
global.ROL_TECNICO_MINISTERIO = 2;
global.ROL_DIRECTOR_MINISTERIO = 3;
global.ROL_TECNICO_SENARECOM = 4;
global.ROL_JEFE_TECNICO_SENARECOM = 5;
global.ROL_DIRECTOR_SENARECOM = 6;
global.ROL_ACTOR_PRODUCTIVO_MINERO = 7;

/* ********************** TIPOS DE USUARIO ********************* */
global.USUARIO_TIPO_EMPRESARIO = 'EMPRESARIO';
global.USUARIO_TIPO_ARTESANO = 'ARTESANO';
global.USUARIO_TIPO_OPERADOR = 'OPERADOR';

/* ******************** TIPOS DE ACTIVIDAD ECONOMICA ********************* */
global.ACTIVIDAD_ECONOMICA_PRODUCTO = 'TRANSFORMACION';
global.ACTIVIDAD_ECONOMICA_SERVICIO = 'SERVICIOS';

/* ******************** TIPOS DE ACTIVIDAD ECONOMICA ********************* */
global.CATEGORIZACION_ARTESANO = 'ARTESANO';
global.CATEGORIZACION_MICRO = 'MICRO';
global.CATEGORIZACION_PEQUENA = 'PEQUEÑA';
global.CATEGORIZACION_MEDIANA = 'MEDIANA';
global.CATEGORIZACION_GRANDE = 'GRANDE';
global.CATEGORIZACION_ICAP = 'ICAP';
global.CATEGORIZACION_PROVEEDOR = 'PROVEEDOR';

/* ******************** TIPOS DE ESCALA_PAGO ********************* */
global.ESCALA_PAGO_TIPO_REGISTRO = 'REGISTRO';
global.ESCALA_PAGO_TIPO_RENOVACION = 'RENOVACION';
global.ESCALA_PAGO_TIPO_DUPLICACION = 'DUPLICACION';

/* ******************** FORMULARIO ********************* */
global.FORMULARIO_TIPO_UNIDAD_PRODUCTIVA = 'UNIDAD_PRODUCTIVA';
global.FORMULARIO_TIPO_ARTESANO = 'ARTESANO';
global.FORMULARIO_TIPO_PROVEEDOR = 'PROVEEDOR';
global.FORMULARIO_TIPO_ICAP = 'ICAP';
global.FORMULARIO_TIPO_COSTO_BRUTO = 'COSTO_BRUTO';
global.FORMULARIO_TIPO_BIEN_PRODUCIDO = 'BIEN_PRODUCIDO';
global.FORMULARIO_AMBITO_MARCA_PAIS = 'MARCA_PAIS';
global.FORMULARIO_AMBITO_PROMUEVE = 'PROMUEVE';

/* ******************** REPRESENTANTE LEGAL ********************* */
global.REPRESENTANTE_LEGAL_PROPIETARIO = 'PROPIETARIO';
global.REPRESENTANTE_LEGAL_REPRESENTANTE = 'REPRESENTANTE_LEGAL';

/* ********************** TIPOS DE PLANTILLAS ********************* */
//USUARIOS
global.PLANTILLA_USUARIO_REGISTRO = 'USUARIO_REGISTRO';
global.PLANTILLA_USUARIO_RECUPERAR = 'USUARIO_RECUPERAR';
global.PLANTILLA_USUARIO_CONFIRMAR = 'USUARIO_CONFIRMAR';
global.PLANTILLA_USUARIO_CONFIRMAR_NIT = 'USUARIO_CONFIRMAR_NIT';
//RUM
global.PLANTILLA_CERTIFICACION_OBSERVAR = 'CERTIFICACION_OBSERVAR';
global.PLANTILLA_CERTIFICACION_APROBAR = 'CERTIFICACION_APROBAR';
global.PLANTILLA_CERTIFICACION_NOTIFICAR_CON_NIT = 'CERTIFICACION_NOTIFICAR_CON_NIT';
global.PLANTILLA_CERTIFICACION_NOTIFICAR_SIN_NIT = 'CERTIFICACION_NOTIFICAR_SIN_NIT';
//NIM
global.CERTIFICACION_NIM_OBSERVADO = 'CERTIFICACION_NIM_OBSERVADO';
global.CERTIFICACION_NIM_RECHAZADO = 'CERTIFICACION_NIM_RECHAZADO';
global.CERTIFICACION_NIM_APROBADO = 'CERTIFICACION_NIM_APROBADO';
//CAM
global.CERTIFICACION_CAM_OBSERVADO = 'CERTIFICACION_CAM_OBSERVADO';
global.CERTIFICACION_CAM_RECHAZADO = 'CERTIFICACION_CAM_RECHAZADO';
global.CERTIFICACION_CAM_APROBADO = 'CERTIFICACION_CAM_APROBADO';
//PLAN DE TRABAJO
global.CERTIFICACION_PT_OBSERVADO = 'CERTIFICACION_PT_OBSERVADO';
global.CERTIFICACION_PT_RECHAZADO = 'CERTIFICACION_PT_RECHAZADO';
global.CERTIFICACION_PT_APROBADO = 'CERTIFICACION_PT_APROBADO';


/* *************** GRUPOS DE PARAMETROS *************************** */
global.PARAMETRO_GRUPO_TIPO_SOCIETARIO = 'TIPO_SOCIETARIO';
global.PARAMETRO_GRUPO_SERVICIO = 'SERVICIO';
global.PARAMETRO_GRUPO_UNIDAD_MEDIDA = 'UNIDAD_MEDIDA';
global.PARAMETRO_GRUPO_TIPO_ORGANIZACION_AFILIADA = 'TIPO_ORGANIZACION_AFILIADA';
global.PARAMETRO_ID_UNIDAD_MEDIDA_OTROS = 700;
global.PARAMETRO_TIPO_ORGANIZACION_OTROS = 195;

/* *************** TIPO CAEB *************************** */
global.CAEB_TIPO_SECCION = 'SECCION';
global.CAEB_TIPO_GRUPO = 'GRUPO';
global.CAEB_TIPO_SUBCLASE = 'SUBCLASE';
global.CAEB_TIPO_DIVISION = 'DIVISION';
global.CAEB_TIPO_CLASE = 'CLASE';

/* ******************** ADMIN ************************************* */
global.USUARIO_ADMIN = 1;
global.TIPO_OPERADOR = 'OPERADOR';

/* ******************** ARCHIVOS DE EJEMPLO ************************************* */
global.ARCHIVO_EJEMPLO_CSV = 'activos.csv';
global.MIMETYPE_PDF = 'application/pdf';
global.MIMETYPE_CSV = 'text/csv';

/* ******************** TIPOS SOCIETARIOS ************************************* */
global.TIPO_SOCIETARIO_EMP_UNIPERSONAL = 200;
global.TIPO_SOCIETARIO_PERSONA_NATURAL = 245;

/* ******************** ABREVIATURAS DE TRAMITES ************************************* */
global.REGISTRO_UNICO_MINERO = 'RUM';
global.CONTRATO_ADMINISTRATIVO_MINERO = 'CAM';
global.NUMERO_IDENTIFICACION_MINERA = 'NIM';

global.JSREPORT = require('jsreport-core')({tasks: {strategy: 'in-process'}});
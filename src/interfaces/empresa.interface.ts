export interface EmpresaInterface{
    id             ?: number;
    razonSocial     : string;
    nombreComercial : string;
    rfc             : string;
    cliente         : number;
    calle          ?: string;
    numeroExterior ?: string;
    numeroInterior ?: string;
    colonia        ?: string;
    localidad      ?: string;
    estado         ?: number;
    codigoPostal   ?: string;
    telefono       ?: string;
    email          ?: string;
    estatus         : number;
    userIdAdd       : number;
    userEditAdd    ?: number;
    createdAt      ?: Date;
    updateAt       ?: Date;
}
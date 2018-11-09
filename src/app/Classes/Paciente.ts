export class Paciente {
    constructor(
        public nombre: string,
        public especie?: string,
        public raza?: string,
        public color?: string,
        public cliente?: string,
        public castrado?: boolean,
        public chip?: string,
        public ultimaVisita?: Date,
        public foto?: ArrayBuffer){

        }
}
export class Endereco {
    rua;
    numeroCasa;
    complemento;
    bairro;
    area;
    latitude;
    longitude;
    constructor(rua,  complemento, bairro, area, latitude, longitude) {
        this.rua = rua,
            this.complemento = complemento;
            this.bairro = bairro;
            this.area = area;
            this.latitude = latitude;
            this.longitude = longitude;
    }
}
export class Pakketje {
    constructor(
        private _naam : string,  
        private _stad : string, 
        private _adres : string,
        private _longitude : number,
        private _latitude : number, 
        private _id : number) {}

        get naam() : string { return this.naam } 
        get stad() : string { return this.stad } 
        get id() : number { return this.id }
        get adres() : string { return this.adres }
        get longitude() : number {return this.longitude }
        get latitude() : number {return this.latitude }

        set naam(naam: string) {  this.naam = naam } 
        set stad(stad : string) { this.stad = stad } 
        set adres(adres : string)  {  this.adres = adres}
        set longitude(longitude : number) { this.longitude = longitude }
        set latitude(latitude : number) { this.latitude = latitude }
}

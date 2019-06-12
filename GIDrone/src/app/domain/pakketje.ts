export class Pakketje {
    constructor(
        private _naam : string, 
        private _postcode : string, 
        private _stad : string, 
        private _pakket : string , 
        private _huidige_locatie : string,
        private _adres : string, 
        private _afzender : string, 
        private _gewicht: number, 
        private _id : number) {}

        get id() : number { return this._id }
        get gewicht() : number { return this._gewicht } 
        get afzender() : string { return this._afzender }
        get naam() : string { return this._naam } 
        get postcode() : string { return this._postcode } 
        get stad() : string { return this._stad } 
        get pakket() : string  { return this._pakket } 
        get huidige_locatie() : string { return this._huidige_locatie }
        get adres() : string { return this._adres } 
}
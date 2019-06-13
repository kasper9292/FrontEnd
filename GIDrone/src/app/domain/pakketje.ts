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

        get id() : number { return this.id }
        get gewicht() : number { return this.gewicht } 
        get afzender() : string { return this.afzender }
        get naam() : string { return this.naam } 
        get postcode() : string { return this.postcode } 
        get stad() : string { return this.stad } 
        get pakket() : string  { return this.pakket } 
        get huidige_locatie() : string { return this.huidige_locatie }
        get adres() : string { return this.adres }

        // set id(id : number) {  this.id = id} //Hoort niet echt nodig te zijn, toch?
        set gewicht(gewicht : number) { this.gewicht = gewicht}
        set afzender(afzender : string) {  this.afzender = afzender }
        set naam(naam: string) {  this.naam = naam } 
        set postcode(postcode : string) { this.postcode = postcode} 
        set stad(stad : string) { this.stad = stad } 
        set pakket(pakket : string) { this.pakket = pakket } 
        set huidige_locatie(locatie : string)  {  this.huidige_locatie = locatie}
        set adres(adres : string)  {  this.adres = adres}
}
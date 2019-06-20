import { Pakketje } from '../domain/pakketje';

export class Route {
    constructor(
        private _route : Pakketje[],
        private _id : number) {}
        
        get route() : Pakketje[] { return this.route }
        get id() : number { return this.id }
}
// un livre
export default class Livre {
    constructor(id, titre, qtestock, prix) {
        this._titre = titre;
        this._qtestock = qtestock;
        this._id = id;
        this._prix = prix;
        //this._id = Date.now() + Math.floor(Math.random() * 10); // génération d'un id unique
    }
    get titre() {
        return this._titre;
    }
    get id() {
        return this._id;
    }
    get qtestock() {
        return this._qtestock;
    }
    get prix() {
        return this._prix;
    }

    // modifier la quantite en stock
    set qtestock(qtestock) {
        this._qtestock = qtestock;
    }

    // afficher un livre
    pourAfficher() {
        return `--> ${this._id} ${this._titre} ${this._qtestock} ${this._prix}  `;
    }
}

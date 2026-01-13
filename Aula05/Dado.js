export class Dado{

    #face
    

    constructor(){
        let faceRandom = (Math.random()*6)+1;
        this.#face = faceRandom
        Object.freeze(this);
    }

    set setFace(face){
        this.#face = face
    }

    get getFace(){
       return this.#face;
    }
}
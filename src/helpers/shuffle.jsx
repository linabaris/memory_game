import MATISS from '../img/matiss.jpg';
import VRUBEL from '../img/vrubel.jpg';
import VANGOG from '../img/vangog.jpg';
import KLIMT from '../img/klimt.jpg';
import DEGA from '../img/dega.jpg';
import VERMEER from '../img/vermeer.jpg';

export const createMatrix = () => {
    const images = [MATISS, VRUBEL, VANGOG, KLIMT, DEGA, VERMEER];
    const names = ['matiss', 'vrubel', 'vangog', 'klimt', 'edga', 'vermeer'];
    const matrix = [];

    for (let i=0; i<names.length; i++) {
        let cell = {
            face: names[i],
            image: images[i]
        };
        let pair = [cell, cell];
        matrix.push(...pair);
    }
    for (let i =0; i<matrix.length; i++) {
        let randomPos = Math.floor(Math.random()*(i+1));
        [matrix[i], matrix[randomPos]] = [matrix[randomPos], matrix[i]];
    }
    return matrix.map((cell,index) => ({
        ...cell,
        id:index,
        matched: false,
    }))
}

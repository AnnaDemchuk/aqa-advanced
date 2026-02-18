let radius, height, cylinderVolume;

radius = 4;
height = 10;

cylinderVolume = Math.PI * radius ** 2 * height;
console.log(`cylinderVolume   : ${cylinderVolume}`); //502.6548245743669;

cylinderVolume = parseFloat(cylinderVolume.toFixed(2));
console.log(`cylinderVolume toFixed: ${cylinderVolume}`);

///-----------------------------
import Decimal from 'decimal.js';

let radiusDec = new Decimal(4);
let heightDec = new Decimal(10);

let cylinderVolumeDec = new Decimal(Math.PI).mul(radiusDec.pow(2)).mul(heightDec);
console.log(`cylinderVolumeDec: ${cylinderVolumeDec}`); // 502.65482457436688

cylinderVolumeDec = cylinderVolumeDec.toDecimalPlaces(2);

console.log(`CylinderVolumeDec toDecimalPlaces: ${cylinderVolumeDec}`);

/*
Logical Operators
*/

const hasDriversLicense = true; // A
const hasGoodVision = false; // B

console.log(hasDriversLicense && hasGoodVision); // AND
console.log(hasDriversLicense || hasGoodVision); // OR
console.log(!hasDriversLicense); // NOT

const shouldDrive = hasDriversLicense && hasGoodVision;

if(hasDriversLicense && hasGoodVision) {
    console.log('Sarah is able to drive!'); // this only runs if condition is true
} else {
    console.log('Someone else should drive...');
}
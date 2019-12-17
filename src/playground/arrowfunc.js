
// const getFirstname = (b) => {
//      return b.split(' ')[0];
//      };

//      console.log(getFirstname('Gentle Tuyishimire'));

// const getFirstname2 = (b) => b.split(' ')[0];

// console.log(getFirstname2('Emmanuel Tuyishimire'));

const multiplier = {
    number:[2,3,5,6],
    multiplyBy: 2,

    multiply() {
        return this.number.map((mul) => mul * this.multiplyBy );
    }
};

console.log(multiplier.multiply());
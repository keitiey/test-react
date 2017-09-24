const randomNumber = (min, max, type) => {
    if (type.toLowerCase() === 'float') {
        return parseFloat(((Math.random() * (max - min)) + min).toFixed(2));
    }
    return Math.floor(Math.random() * ((max - min) + 1)) + min;
};

const addCommaToNumber = (x) => {
    const parts = x.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
};

//  func để sắp xếp tăng cho .sort()
const increCompare = (a, b) => {
    const valueA = a.value;
    const valueB = b.value;
    return valueA - valueB;
};
//  func để sắp xếp giảm cho .sort()
const decreCompare = (a, b) => {
    const valueA = a.value;
    const valueB = b.value;
    return valueB - valueA;
};

class Company {
    constructor(code, name, price, volume) {
        this.code = code;
        this.name = name;
        this.price = price;
        this.volume = volume;
        this.value = parseInt((price * volume).toFixed(0), 10);
        this.change = 0;
        this.percentChange = 0;
    }
    resetPrice(nextPrice) { this.price = nextPrice; }

    resetVolume(nextVolume) { this.volume = nextVolume; }

    setValue(currentPrice, currentVolume) {
        this.value = parseInt((currentPrice * currentVolume).toFixed(0), 10);
    }

    setChange(currentPrice, prevPrice) { 
        this.change = parseFloat((currentPrice - prevPrice).toFixed(2)); 
    }

    setPercentChange(currentChange, prevPrice) { 
        this.percentChange = parseFloat(((currentChange / prevPrice) * 100).toFixed(2)); 
    }
    //  Gia lap viec thay doi du lieu
    goChange() {
        const scopeChangedPrice = parseFloat(((this.price / 100) * 5).toFixed(2));
        const nextPrice = randomNumber(
            (this.price - scopeChangedPrice),
            (this.price + scopeChangedPrice),
            'float'
        );
        const nextVolume = randomNumber((this.volume + 10), (this.volume + 30), 'int');

        /*
            khi chua resetPrice: 
            nextPrice = currentPrice
            this.price = prevPrice
        */
        this.setChange(nextPrice, this.price);
        /*
            setChange() da duoc chay: 
            this.change = currentChange
            this.price = prevPrice
        */
        this.setPercentChange(this.change, this.price);
        this.resetPrice(nextPrice);
        this.resetVolume(nextVolume);
        this.setValue(this.price, this.volume);
    }
}

module.exports = {
    randomNumber,
    increCompare,
    decreCompare,
    addCommaToNumber,
    Company
};

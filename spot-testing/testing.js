class timeKeeper {
    constructor() {

    }
    activeKeys = [];
    setKey(key, value, duration ) {
        const pack = {
            key: key,
            value: value
        };
        this.activeKeys.push(pack);
        console.log('Key created for: ', key);
        setTimeout(()=> {
            this.activeKeys.forEach((item, i = index) => {
                if (item.key === pack.key) {
                    this.activeKeys.splice(i, 1);
                }
            });
        }, duration);
    };
    get(key) {
        const pack = this.activeKeys.find(item => item.key === key);
        if (!pack) {
            return null
        }
        return pack.value
    };
    count() {
        return this.activeKeys.length
    }
}

const timeLord = new timeKeeper();

timeLord.setKey('first', 1, 1000);
timeLord.setKey('second', 2, 3000);

setTimeout(()=> {console.log('Looked for first key at 500: ', timeLord.get('first'))}, 500);
setTimeout(()=> {console.log('Looked for second key at 500: ', timeLord.get('second'))}, 500);
setTimeout(()=> {console.log('Counted keys at 500: ', timeLord.count())}, 500);
setTimeout(()=> {console.log('Looked for first key at 1500: ', timeLord.get('first'))}, 1500);
setTimeout(()=> {console.log('Counted keys at 1500: ', timeLord.count())}, 1500);
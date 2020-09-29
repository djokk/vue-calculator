const vue = new Vue({
    el: '#app',
    data: {
        previous: null,
        result: '',
        fullNum: '',
        operations: null,
        operationsClicked: false,

    },
    methods: {
        reset() {
            this.result = '';
            this.fullNum = '';
        },
        plusMinus() {
            this.result = this.result.charAt(0) === '-' ?
                this.result.slice(1) : `-${this.result}`;
                this.fullNum ='-' + this.fullNum;
        },
        percent() {
            this.result = `${parseFloat(this.result) / 100}`;
        },
        input(number) {
            if(this.operationsClicked){
                this.result = '';
                this.operationsClicked = false;
                console.log(this.fullNum + '   1');
            }
            this.result = `${this.result}${number}`;
            this.fullNum = `${this.fullNum}${number}`;
            console.log(this.fullNum + '   2');
        },
        tochka(){
            if(this.result.indexOf('.') === -1  && this.result.length != 0){
                this.result = this.result + ('.');
                this.fullNum = this.fullNum + '.';
            }
        },
        setPrevious(){
            this.previous = this.result;
            this.operationsClicked = true;
            this.fullNum = this.previous;
        },
        divide(){
            this.operations = (a, b) => a / b;
            this.setPrevious();
            this.fullNum = this.fullNum + ' / ';
        },
        times(){
            this.operations = (a, b) => a * b;
            this.setPrevious();
            this.fullNum = this.fullNum + ' * ';
        },
        minus(){
            this.operations = (a, b) => a - b;
            this.setPrevious();
            this.fullNum = this.fullNum + ' - ';
        },
        plus(){
            this.operations = (a, b) => a + b;
            this.setPrevious();
            this.fullNum = this.fullNum + ' + ';
        },
        equal(){
            this.result = `${this.operations(
                parseFloat(this.previous),
                parseFloat(this.result)
            )}`;
            this.fullNum = this.fullNum + ' = ' + this.result;
            this.previous = null;
        }
    }
})

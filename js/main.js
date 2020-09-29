const vue = new Vue({
    el: '#app',
    data: {
        previous: null,
        result: '',
        fullNum: '',
        // operations: ['+', '-', '*', '/']
        operations: null,
        operationsClicked: false,

    },
    methods: {
        // reset: function () {
        //     this.result = '';
        // },
        reset() {
            this.result = '';
            this.fullNum = '';
        },
        // input: function (char) {
        //     this.result = this.result.toString();
        //     this.result += (char);
        // },
        // plusMinus: function () {
        //     numArr = [];
        //     num = this.result;

        //     for (var i = 0; i < num.length; i++) {
        //         numArr.push(num[i]);
        //     }

        //     if (numArr[0] == '-') {
        //         numArr.splice(0, 1);
        //         let men = '';
        //         for (let i = 0; i < numArr.length; i++) {
        //             let sen = numArr[i];
        //             men = men + sen;
        //         }
        //         this.result = men;
        //     } else {

        //         this.result = '-' + this.result;
        //     }
        // },
        plusMinus() {
            this.result = this.result.charAt(0) === '-' ?
                this.result.slice(1) : `-${this.result}`;
                this.fullNum ='-' + this.fullNum;
        },
        // percent: function () {
        //     this.result = this.result / 100;
        // },
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
        // tochka: function () {
        //     tochArr = [];
        //     toch = this.result;

        //     for (var i = 0; i < toch.length; i++) {
        //         tochArr.push(toch[i]);
        //     }
        //     console.log(tochArr);

        //     if(tochArr.pop() != '.' && tochArr.includes('.') != true && tochArr.length != 0){
        //         this.result = this.result + '.';
                
        //     }
        //     else{
        //         this.result = this.result + '';
        //     }
        // },
        tochka(){
            if(this.result.indexOf('.') === -1  && this.result.length != 0){
                this.result = this.result + ('.');
                this.fullNum = this.fullNum + '.';
            }
        },
        // calc: function () {
        //     this.result = eval(this.result);
        // },
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
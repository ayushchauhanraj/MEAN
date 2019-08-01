const obj = {
    inputData: [],
    str: "",
    index: 1,
    count: 0,
    dotCount: 0,
    lastVal: 0,
    insert(val) {

        if (this.inputData.length != 0) {
            this.lastVal = this.inputData[this.inputData.length - 1];
        }
        if ((val >= 0 && val <= 9) || val == '.') {
            if (val == '.') {
                this.dotCount++;
            }
            if ((this.lastVal == '/' && val == 0) || this.dotCount > 1 && val == '.') {

            } else {
                this.count = 0;

                this.str += String(val);
                if (this.inputData.length == 0) {
                    this.index = 0;
                }
                this.inputData[this.index] = this.str;
            }
        } else {

            if (this.inputData.length == 0 && val != '-') {
                this.dotCount = 0;
                return 0;
            } else {
                this.dotCount = 0;
                this.str = "";
                this.count++;
                if (this.count <= 1) {
                    if (this.inputData.length == 0 && val == '-') {
                        this.inputData.push('0');
                    }
                    this.inputData.push(val);
                    this.index = this.inputData.length;
                }
            }

        }
        console.log(this.inputData);
        return obj.inputData.join("");
    },
    clearSrc() {
        this.str = "";
        this.inputData = [];
        this.count = 0;
        this.dotCount = 0;
        return 0;
    },
    customEval() {
        let operator = [];
        let values = [];
        let count = 0;
        if (this.inputData.length == 0) {
            return 0;
        }
        if (this.inputData.length == 2) {
            let data;
            data = this.inputData[0];
            this.str = String(data);
            this.inputData = [];
            this.inputData[0] = this.str;
            this.index = 0;
            this.count = 0;
            return data;
        }
        this.inputData.forEach(element => {

            console.log("element", element);
            if (parseFloat(element) >= 0) {
                values.push(element);

            } else {
                let prior = this.priority(element);
                if (operator.length > 0) {
                    if (this.priority(operator[operator.length - 1]) >= prior) {
                        var last = values.pop();
                        values[values.length - 1] = this.calculateVal(values[values.length - 1], last, operator.pop());
                        operator.push(element);
                    } else {
                        operator.push(element);
                    }

                } else {
                    operator.push(element);
                }
            }

        });
        while (operator.length) {

            var last = values.pop();
            values[values.length - 1] = this.calculateVal(values[values.length - 1], last, operator.pop());
        }
        if (values.length == 0) {

            values[0] = '0';
        }
        this.inputData = [];
        this.str = this.inputData[0] = String(values[0]);
        this.index = 0;
        return values[0];
    },
    priority(val) {
        if (val == '+' || val == '-') {
            return 1;
        } else {
            return 2;
        }
    },
    calculateVal(val1, val2, oper) {
        if (oper == '+') {
            return parseFloat(val1) + parseFloat(val2);;
        } else {
            if (oper == '-') {
                return parseFloat(val1) - parseFloat(val2);
            } else {
                if (oper == '/') {
                    return parseFloat(val1) / parseFloat(val2);
                } else {
                    return parseFloat(val1) * parseFloat(val2);
                }
            }
        }
    },
    // delete() {
    //     if (parseFloat(this.inputData[this.inputData.length - 1]) >= 0) {

    //         let data = this.inputData[this.inputData.length - 1];
    //         let arr = data.split('', data.length);
    //         console.log("indie", arr)
    //         arr.pop();
    //         console.log("arr", arr)
    //         if (arr.length > 0) {
    //             this.inputData.pop();
    //             if (this.inputData.length == 0) {
    //                 console.log("join", arr.join(""))
    //                 this.inputData[0] = arr.join("");
    //                 this.str = arr.join("");
    //             } else {
    //                 this.inputData[this.inputData.length - 1] = arr.join("");
    //                 this.str = arr.join("");
    //             }

    //         } else {
    //             this.inputData.pop();

    //         }

    //     } else {
    //         this.inputData.pop();
    //         this.count = 0;
    //     }
    //     return this.inputData.join("");
    // }
}
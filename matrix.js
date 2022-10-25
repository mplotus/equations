class Matrix{
    constructor(_array){
        var i = 0;
        var _arr = new Array();
        while(i<_array.length) {
            var sArr = new Array();
            if(isNaN(_array[i].length)) sArr.push(_array[i]);
            else {
                var j = 0;
                while(j<_array[i].length) {
                    sArr.push(_array[i][j]);
                    j++;
                }
            }
            _arr.push(sArr);
            i++;
        }
        this.arr=_arr;
    }
    // Get number of element in array
    size() {
        var mSize = 0;
        var i=0;
        while(i<this.arr.length) {
            if(isNaN(this.arr[i].length)) mSize++;
            else mSize+=this.arr[i].length;
            i++;
        }
        return mSize; 
    }
    // Check array is or not matrix (number)
    isMatrix() {
        var _isMat = true;
        if(this.arr.length==0) _isMat = false;
        else {
            var nCnt = 0;
            var i=0;
            while(i<this.arr.length) {
                if(isNaN(this.arr[i].length)) {
                    nCnt+=(!isNaN(parseFloat(this.arr[i])))?1:0;
                }
                else {
                    if(this.arr[i].length==0) return false;
                    var j=0;
                    while(j<this.arr[i].length) {
                        nCnt+=(!isNaN(parseFloat(this.arr[i][j])))?1:0;
                        j++;
                    }
                }
                i++;
            }
            var mSize = this.size();
            if(mSize==nCnt) {
                if(mSize==this.arr.length) _isMat = true;
                else _isMat = (mSize % this.arr.length == 0);
            }
            else _isMat = false;
        }
        return _isMat;
    }
    // Get number of row of matrix
    row() {
        if(!this.isMatrix()) return NaN;
        else return this.arr.length;
    }
    // Get number of column of matrix
    column() {
        if(!this.isMatrix()) return NaN;
        else return this.size()/this.arr.length;
    }
    // Get item of matrix
    item(_i,_j) {
        if((_i>=this.row())||(_j>=this.column())) return NaN;
        else return this.arr[_i][_j];
    }
    // Check array is square matrix
    isSquare() {
        var _isSqr = true;
        if(!this.isMatrix()) _isSqr = false;
        else _isSqr = ((this.size() % this.arr.length == 0) && (this.size() / this.arr.length == this.arr.length));
        return _isSqr;
    }
    // Convert matrix to string
    toString() {
        if(!this.isMatrix()) return NaN;
        else {
            var mStr = '';
            var i = 0;
            while(i<this.row()){
                var j = 0;
                while(j<this.column()){
                    mStr += this.arr[i][j] + ';';
                    j++;
                }
                mStr += '\n';
                i++;
            }
            return mStr;
        }
    }
    // Make unit matrix with same level
    unit() {
        var lev = Math.min(this.row(),this.column());
        var _arr = new Array();
        var i = 0;
        while(i<lev){
            var sArr = new Array();
            var j = 0;
            while(j<lev){
                if(i!=j) sArr.push(0);
                else sArr.push(1);
                j++;
            }
            _arr.push(sArr);
            i++;
        }
        return new Matrix(_arr);
    }
    // Transpose matrix
    transpose() {
        var _arr = new Array();
        if(this.isMatrix()) {
            var i = 0;
            while(i<this.column()) {
                var sArr = new Array();
                var j = 0;
                while(j<this.row()) {
                    sArr.push(this.arr[j][i]);
                    j++;
                }
                _arr.push(sArr);
                i++;
            }
        }
        return new Matrix(_arr);
    }
    // Multiply factor to every element (scale)
    scale(_factor) {
        var _arr = new Array();
        if(this.isMatrix()) {
            var i = 0;
            while(i<this.row()) {
                var sArr = new Array();
                var j = 0;
                while(j<this.column()) {
                    sArr.push(_factor * this.arr[i][j]);
                    j++;
                }
                _arr.push(sArr);
                i++;
            }
        }
        return new Matrix(_arr);
    }
    // Plus matrix with matrixB
    plus(_matrixB) {
        var pArr = new Array();
        if(this.isMatrix() && _matrixB.isMatrix()) {
            if((this.row() == _matrixB.row()) && (this.column() == _matrixB.column())) {
                var i = 0;
                while(i<this.row()) {
                    var j = 0;
                    var sArr = new Array();
                    while(j<this.column()) {
                        sArr.push(this.arr[i][j] + _matrixB.item(i,j));
                        j++;
                    }
                    pArr.push(sArr);
                    i++;
                }
            }
        }
        return new Matrix(pArr);
    }
    // Multiply this matrix with matrixB
    multiply(_matrixB) {
        var mArr = new Array();
        if(this.isMatrix() && _matrixB.isMatrix()) {
            if(this.column() == _matrixB.row()) {
                var i = 0;
                while(i<this.row()) {
                    var sArr = new Array();
                    var j = 0;
                    while(j<_matrixB.column()) {
                        var sEle = 0;
                        var t = 0;
                        while(t<this.column()) {
                            sEle += this.arr[i][t] * _matrixB.item(t,j);
                            t++;
                        }
                        sArr.push(sEle);
                        j++;
                    }
                    mArr.push(sArr);
                    i++;
                }
            }
        }
        return new Matrix(mArr);
    }
    
}
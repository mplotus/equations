class Matrix{
    constructor(_array){
        this.arr=_array;
    }
    // Get number of element in array
    size() {
        var mSize = 0;
        var i=0;
        while(i<this.arr.length){
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
        else{
            var nCnt = 0;
            var i=0;
            while(i<this.arr.length){
                if(isNaN(this.arr[i].length)){
                    nCnt+=(!isNaN(parseFloat(this.arr[i])))?1:0;
                }
                else{
                    if(this.arr[i].length==0) return false;
                    var j=0;
                    while(j<this.arr[i].length){
                        nCnt+=(!isNaN(parseFloat(this.arr[i][j])))?1:0;
                        j++;
                    }
                }
                i++;
            }
            var mSize = this.size();
            if(mSize==nCnt){
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
    
}
var Matrix2 = (function(){
    return{
        // Check array is square matrix
        isSquare:function(_matrix){
            var _isSqr = true;
            if(!isMatrix(_matrix)) _isSqr = false;
            else{
                var mSize = getSize(_matrix);
                _isSqr = ((mSize % _matrix.length == 0) && (mSize / _matrix.length == _matrix.length));
            }
            return _isSqr;
        },
        // Convert matrix to string
        toString:function(_matrix){
            if(!isMatrix(_matrix)) return NaN;
            else{
                var mStr = '';
                var rows = getRow(_matrix);
                var cols = getColumn(_matrix);
                for(i=0;i<rows;i++){
                    for(j=0;j<cols;j++){
                        mStr+=_matrix[i][j]+';';
                    }
                    mStr+='\n';
                }
                return mStr;
            }
        },
        // Make unit matrix level n
        unit:function(_level){
            var _arr = new Array();
            for(i=0;i<_level;i++){
                for(j=0;j<_level;j++){
                    if(i!=j) _arr.push(0);
                    else _arr.push(1);
                }
            }
            return _arr;
        },
        // Transpose matrix
        transpose:function(_matrix){
            var _arr = new Array();
            if(isMatrix(_matrix)){
                var cols = getColumn(_matrix);
                var rows = getRow(_matrix);
                for(i=0;i<cols;i++){
                    var sArr = new Array();
                    for(j=0;j<rows;j++){
                        sArr.push(_matrix[j][i]);
                    }
                    _arr.push(sArr);
                }
            }
            return _arr;
        },
        // Multiply _factor to every element in _matrix
        scale:function(_factor,_matrix){
            var _arr = new Array();
            for(i=0;i<_matrix.length;i++){
                var _sArr = new Array();
                for(j=0;j<_matrix[i].length;j++){
                    _sArr.push(_factor * _matrix[i][j]);
                }
                _arr.push(_sArr);
            }
            return _arr;
        },
        // Plus _matrixA with _matrixB
        plus:function(_matrixA,_matrixB){
            var pArr = new Array();
            if(!isNaN(getRow(_matrixA))){
                if((getRow(_matrixA)==getRow(_matrixB) && 
                (getColumn(_matrixA)==getColumn(_matrixB)))){
                    for(i=0;i<getRow(_matrixA);i++){
                        var sArr = new Array();
                        for(j=0;j<getColumn(_matrixA);j++){
                            sArr.push(_matrixA[i][j]+_matrixB[i][j]);
                        }
                        pArr.push(sArr);
                    }
                }
            }
            return pArr;
        },
        // Multiply _matrixA to _matrixB
        multiply:function(_matrixA,_matrixB){
            var mArr = new Array();
            if(!isNaN(getRow(_matrixA))){
                if(getColumn(_matrixA)==getRow(_matrixB)){
                    var rows = getRow(_matrixA);
                    var cols = getColumn(_matrixB);
                    var eles = getColumn(_matrixA);
                    for(i=0;i<rows;i++){
                        var sArr = new Array();
                        for(j=0;j<cols;j++){
                            var sEle = 0;
                            for(t=0;t<eles;t++){
                                sEle+=_matrixA[i][t]*_matrixB[t][j];
                            }
                            sArr.push(sEle);
                        }
                        mArr.push(sArr);
                    }
                }
            }
            return mArr;
        }
    };
})();
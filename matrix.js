class Matrix{
    constructor(_array){
        this.arr=_array;
    }
    size(){
        let mSize = 0;
        let aLen = this.arr.length;
        for(i=0;i<2;i++){
            aLen++;
        }
        aLen--;
        return aLen;
    }
}
/*var Matrix2 = (function(){
    return{
        // Get number of element in matrix
        getSize:function(_matrix){
            var mSize = 0;
        for(i=0;i<this.arr.length;i++){
            if(isNaN(this.arr[i].length)) mSize++;
            else mSize+=this.arr[i].length;
        }
        },
        // Get number of rows in matrix (length)
        getRow:function(_matrix){
            if(!isMatrix(_matrix)) return NaN;
            else return _matrix.length;
        },
        // Get number of column in matrix
        getColumn:function(_matrix){
            if(!isMatrix(_matrix)) return NaN;
            else return getSize(_matrix)/_matrix.length;
        },
        // Check array is matrix
        isMatrix:function(_matrix){
            var _isMat = true;
            if(_matrix.length==0) _isMat = false;
            else{
                var nCnt = 0;
                for(i=0;i<_matrix.length;i++){
                    if(isNaN(_matrix[i].length)){
                        nCnt+=(!isNaN(parseFloat(_matrix[i])))?1:0;
                    }
                    else{
                        if(_matrix[i].length==0) return false;
                        for(j=0;j<_matrix[i].length;j++){
                            nCnt+=(!isNaN(parseFloat(_matrix[i][j])))?1:0;
                        }
                    }
                }
                var mSize = getSize(_matrix);
                if(mSize==nCnt){
                    if(mSize==_matrix.length) _isMat = true;
                    else _isMat = (mSize % _matrix.length == 0);
                }
                else _isMat = false;
            }
            return _isMat;
        },
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
})();*/
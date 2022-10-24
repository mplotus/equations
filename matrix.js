// Get number of element in matrix
function getSize(_matrix){
    var mSize = 0;
    for(i=0;i<_matrix.length;i++){
        if(isNaN(_matrix[i].length)) mSize++;
        else mSize+=_matrix[i].length;
    }
    return mSize;
}
// Get number of rows in matrix (length)
function getRow(_matrix){
    if(!isMatrix(_matrix)) return NaN;
    else return _matrix.length;
}
// Get number of column in matrix
function getColumn(_matrix){
    if(!isMatrix(_matrix)) return NaN;
    else return getSize(_matrix)/_matrix.length;
}
// Check array is matrix
function isMatrix(_matrix){
    var _isMat = true;
    if(_matrix.length==0) _isMat = false;
    else{
        var nCnt = 0;
        for(i=0;i<_matrix.length;i++){
            if(isNaN(_matrix[i].length)){
                nCnt+=(!isNaN(parseFloat(_matrix[i])))?1:0;
            }
            else{
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
}
// Check array is square matrix
function isSquare(_matrix){
    var _isSqr = true;
    if(!isMatrix(_matrix)) _isSqr = false;
    else{
        var mSize = getSize(_matrix);
        _isSqr = ((mSize % _matrix.length == 0) && (mSize / _matrix.length == _matrix.length));
    }
    return _isSqr;
}
// Make unit matrix level n
function unit(_level){
    var _arr = new Array();
    for(i=0;i<_level;i++){
        for(j=0;j<_level;j++){
            if(i!=j) _arr.push(0);
            else _arr.push(1);
        }
    }
    return _arr;
}
// Transpose matrix
function transpose(_matrix){
    var _arr = new Array();
    if(isMatrix(_matrix)){
        for(i=0;i<getColumn(_matrix);i++){
            var sArr = new Array();
            for(j=0;j<getRow(_matrix);j++){
                sArr.push(_matrix[j][i]);
            }
            _arr.push(sArr);
        }
    }
    return _arr;
}
// Multiply _factor to every element in _matrix
function scale(_factor,_matrix){
    var _arr = new Array();
    for(i=0;i<_matrix.length;i++){
        var _sArr = new Array();
        for(j=0;j<_matrix[i].length;j++){
            _sArr.push(_factor * _matrix[i][j]);
        }
        _arr.push(_sArr);
    }
    return _arr;
}
// Plus _matrixA with _matrixB
function mPlus(_matrixA,_matrixB){
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
}
// Multiply _matrixA to _matrixB
function mMult(_matrixA,_matrixB){
    var mArr = new Array();
    if(!isNaN(getRow(_matrixA))){
        if(getColumn(_matrixA)==getRow(_matrixB)){
            alert('');
        }
    }
    return mArr;
}
/*
*
*	To use this function, include it into your file. Or load it globally. Then call it as follows;
*	
* 	yourMatrix = matrix3DCombine(matrix0, matrix1);
*
*/

//A simple 4 x 4 Matrix multipler
const matrix3DCombine = (_initialCoords, _list) => {
	_list.forEach((_matrix)=>{
		let r=0,
		newMatrix = [];
		for(r;r<4;r++){
			let i=0;
			for(i;i<4;i++){
				let _calculated = 0;
				let c=0;
				for(c;c<4;c++){
					_calculated += _initialCoords[c+(r*4)] * _matrix[i + (c*4)];
				}
				newMatrix[i+(r*4)] = _calculated;
			}
		}

		_initialCoords = newMatrix;
	});
	return _initialCoords;
};

class CSSTranslateMatrixParser {

    constructor() {
        super();
        this._initRegexs();
    }

    _initRegexs() {
        const floating = '(\\-?[\\d\\.e]+)';
		const commaSpace = '\\,?\\s*';

		this.regex = {
			matrix: new RegExp(
				'^matrix\\(' +
					floating + commaSpace +
					floating + commaSpace +
					floating + commaSpace +
					floating + commaSpace +
					floating + commaSpace +
					floating + '\\)$')
		};
    }

    parse(transform) {
		const matrix = this.regex.matrix.exec(transform);
		if (matrix) {
			matrix.shift();

			for (let i = matrix.length-1; i >= 0 ; i--) {
				matrix[i] = parseFloat(matrix[i]);
			};
		}

		return matrix || [ 1, 0, 0, 1, 0, 0 ];
	}

    fromElement(element) {
        var transform = window.getComputedStyle(element).transform;
		return this.parse(transform);
	}
}

export default new CSSTranslateMatrixParser();
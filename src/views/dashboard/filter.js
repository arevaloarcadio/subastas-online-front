let filter = {}
let item = null

filter.add = function (value) {
	item = value
}

filter.get = function () {
 return item;
}


export default filter
var Book = require ('./bookModel.js');
//check routes.js to see what other functions need to be implemented. hint:"you are missing one"
module.exports ={
	//get all the books controller
	allbooks : function (req, res) {
		Book.find({},function (err,AllBooks) {
			if (err) {
				res.status(404).send(err);
			}else{
				res.status(200).json(AllBooks)
			}
		})
	},
	//insert books controller
	insertBooks : function (req, res) {
			Book.create(req.body, function (err, dataInserted) {
				if (err) {
					res.status(404).send(err);
				}else{
					res.status(201).json(dataInserted[0]);
				}
		})
	},
	getByName : function (req, res) {
		Book.find({name : req.params.name},function (err,book) {
			if (err) {
				res.status(404).send(err);
			}else{
				res.status(200).json(book)
			}
		})
	}
}

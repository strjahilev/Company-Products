module.exports = function(app) {
    var products = require('../controllers/products.controller.js');
	
	app.get('/api/products', products.findAll);
			
	// Find a single Product by Name
    app.get('/api/products/:productName', products.findByName);
	
	// Find all Products of a Company
    app.get('/api/products/company/:companyId', products.findByCompanyId);

    app.post('/api/products', products.create);
    app.put('/api/products/:productId', products.update);
    app.delete('/api/products/:productId', products.delete)
};

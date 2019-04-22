const UsersApi = require('./../components/users/api');
const CodesApi = require('./../components/codes/api');
const PhotosApi = require('./../components/photos/api');



class ApiV1 {
    initialize(app) {

      app.use('/api/users', UsersApi);
      app.use('/api/codes', CodesApi);
      app.use('/api/photos', PhotosApi);

      app.get('/', (req, res) => {
        return res.render('main',{
        	title: "Lodr-Kodr",
        	// homePageTitle: "Our Title",
        	// tempText: "Some text",
        });
      });
    }
}


module.exports = new ApiV1();

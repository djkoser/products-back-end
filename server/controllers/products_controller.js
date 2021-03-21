module.exports = {
  create: ( req, res, next ) => {
    const dbInstance = req.app.get('db');
    const { name, description, price, image_url } = req.body;
    dbInstance.create_product([ name, description, price, image_url ])
      .then( (product) => res.status(200).send(product) )
      .catch( err => {
        res.status(500).send("Error, we are working as quickly as possible to solve this issue.");
        console.log(err)
      } );
    },
  getOne: (req,res,next)=> {
    const dbInstance = req.app.get('db');
    dbInstance.read_product([Number.parseInt(req.params.id)])
    .then((product) => res.status(200).send(product))
    .catch(err => {
      res.status(500).send("Error, we are working as quickly as possible to solve this issue.");
      console.log(err);
    });
  },
  getAll: (req,res,next)=> {
    const dbInstance = req.app.get('db');
    dbInstance.read_products()
    .then((product) => res.status(200).send(product))
    .catch(err => {
      res.status(500).send("Error, we are working as quickly as possible to solve this issue.");
      console.log(err);
    });

  },
  update: (req,res,next) => {
    const dbInstance = req.app.get('db');

    dbInstance.update_product([req.params.id, req.query.desc])
    .then((product) => res.status(200).send(product))
    .catch(err => {
      res.status(500).send("Error, we are working as quickly as possible to solve this issue.");
      console.log(err);
    });
  },
  delete: (req,res,next) => {
    const dbInstance = req.app.get('db');

    dbInstance.delete_product(req.params.id)
    .then((product) => res.status(200).send(product))
    .catch(err => {
      res.status(500).send("Error, we are working as quickly as possible to solve this issue.");
      console.log(err);
    });
  }
}
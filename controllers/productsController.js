const fs = require('fs')

const productsController = {
    create: (req, res)=>{

    } ,
    edit: (req, res) =>{
        const archivo = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

        archivo.forEach(element => {
            if(element.id === parseInt(req.params.id)){
                //element.nombre = req.body.nombre;
                //element.precio = req.body.precio;
                console.log(req.body)
            }
        });
        fs.writeFileSync('./data.json', JSON.stringify(archivo))
    
    },
    delete: (req, res)=>{
        const archivo = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

        const nuevo = archivo.filter(elem => elem.id !== parseInt(req.params.id))

        if(nuevo.length !== archivo.length){
            
            fs.writeFileSync('./data.json', JSON.stringify(nuevo))
            res.redirect('/products')
        }else{
            res.send('producto no existe')
        }


    },
    listar: (req,res)=>{
        const archivo = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
        
        res.send(archivo)
    },
    detalleProducto: (req, res) =>{

        const archivo = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));

        const producto =  archivo.find(elem => elem.id === parseInt(req.params.id));

        if(producto){
            res.send(producto)
        }else{
            res.send('producto no existe')
        }



    }
}

module.exports = productsController;


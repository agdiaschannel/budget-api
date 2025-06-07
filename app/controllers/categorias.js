const Categoria  = require('../models/Categoria');
const ErrorResponse = require('../utils/errorResponse');
exports.criaCategoria = async (req, res, next) => {
  try {
    
    const categoria = await Categoria.create(req.body); // <-- await here
    return res.status(201).json({
      success: true,
      data: categoria
    });
  } catch (error) {
     next(error);
  }
};

exports.buscaCategorias = async (req, res, next) => {
    try {
        const categorias = await  Categoria.find({})
        return res.status(200).json({
            success: true,
            data: categorias
        })
    } catch (error) {
       res.status(400).json({success: false});
    }
}

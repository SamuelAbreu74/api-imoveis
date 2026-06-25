const sendSuccess = (res, {statusCode = 200, message = 'Operaçao realizada com sucesso.', data = null} = {}) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data
    });
}


const sendError = (res, {statusCode = 500, message = 'Erro interno no servidor', error = null} = {}) => {
    return res.status(statusCode).json({
        success: true,
        message,
        details: error && error.message ? error.message : error
    });
};

module.exports = {sendSuccess, sendError};
export function errorHandler(){
    return async function(err, req, res, next){
        if(err.name === 'UnauthorizedException'){
            res.status(401).json({message: err.message});
        }else if(err.name === 'ConflictException'){
            res.status(409).json({message: err.message});
        }else{
            res.status(500).json({message: err.message});
        }
    }
}
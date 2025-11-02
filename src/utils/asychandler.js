const asynHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req,res,next)).catch((error) => next(error));
  }
}

//requestHandler is a function that handles incoming requests and responses in an asynchronous manner.

export {asynHandler}

// const asyncHandler = (fn) => async (req, res, next, error) =>{
//     try {
//         await fn(req, res, next);
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message || "Internal Server Error",
//         });
//     }
// }

// const asyncHandler = (fn) => {async ()=>{}}
// asynhandler is a higher order function that takes in an asynchronous function (fn) as an argument and returns a new function that wraps the original function in a try-catch block. This allows for centralized error handling in asynchronous code, making it easier to manage errors without having to write repetitive try-catch blocks throughout the codebase.
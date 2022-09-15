exports.success = (res, result,dummyData, message = "success") => {
    res.status(200).json({
        error: false,
        message: message,
        data: {result,dummyData}
    });
};

exports.error = (res, message = "Unable to process request", err, errorCode = 400) => {
    console.log({ err });
    res.status(errorCode).json({
        error: true,
        message: message,
        errors: err,
    });
};
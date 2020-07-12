var userInput;
var userName;
userInput = 5;
userInput = 'Max';
if (typeof userInput === 'string') {
    userInput = userName;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error ocurred!', 500);

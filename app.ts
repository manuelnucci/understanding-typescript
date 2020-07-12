let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
  userInput = userName;
}

function generateError(message: string, code: number): never {
  throw { message, errorCode: code };
  // while (true) {}
}

generateError('An error ocurred!', 500);

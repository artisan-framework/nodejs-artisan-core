import ArgumentException from './ArgumentException';

/**
 * The exception that is thrown when a null reference is passed to a method that does not accept it as a valid argument.
 */
class ArgumentNullException extends ArgumentException {
   /**
    * Creates a new instance.
    * @param  {string} argumentName - The name of the parameter that caused the exception.
    */
   constructor(argumentName: string) {
      super(argumentName, `${argumentName} cannot be null.`);
      
      this.name = 'ArgumentNullException';
   }
}

export default ArgumentNullException;
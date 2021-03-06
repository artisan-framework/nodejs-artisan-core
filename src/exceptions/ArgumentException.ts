import BaseException from './BaseException';

/**
 * The exception that is thrown when one of the arguments provided to a method is not valid.
 */
class ArgumentException extends BaseException {
   /**
    * Creates a new instance
    * @param  {string} argumentName - The name of the parameter that caused the exception.
    * @param  {string} message - A message that describes the error.
    */
   public constructor(argumentName: string, message: string) {
      super('ArgumentException', message, undefined);

      this.ArgumentName = argumentName;
   }

   /**
    * The name of the parameter that caused the exception.
    */
   public ArgumentName: string;

   public getErrorDetails(): any {
      return {
         ...super.getErrorDetails(),
         argumentName: this.ArgumentName
      };
   }
}

export default ArgumentException;

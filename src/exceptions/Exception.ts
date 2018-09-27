import BaseException from './BaseException';

/**
 * Represents errors that occur during application execution.
 */
class Exception extends BaseException {
   /**
    * Creates a new instance.
    * @param  {string} message - A message that describes the error.
    * @param  {any} innerException - The exception that caused the current exception.
    */
   constructor(message?: string, innerException?: any) {
      super('Exception', message, innerException);
   }
}

export default Exception;

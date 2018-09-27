import BaseException from './BaseException';

/**
 * The exception that is thrown when a requested method or operation is not implemented.
 */
class NotImplementedException extends BaseException {

   /**
    * Creates a new instance.
    * @param  {string} message - A message that describes the error.
    */
   constructor(message: string) {
      super('NotImplementedException', message);
   }
}

export default NotImplementedException;

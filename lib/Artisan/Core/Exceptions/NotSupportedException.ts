import BaseException from './BaseException';

/**
 * The exception that is thrown when an invoked method is not supported, or when there is 
 * an attempt to read, seek, or write to a stream that does not support the invoked functionality.
 */
class NotSupportedException extends BaseException {
   /**
    * Creates a new instance.
    * @param  {string} message - A message that describes the error.
    */
   constructor(message: string) {
      super('NotSupportedException', message);
   }
}

export default NotSupportedException;
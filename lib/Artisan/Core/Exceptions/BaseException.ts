/**
 * The base exception type from which custom errors should derive.
 */
class BaseException {
   /**
    * Creates a new instance.
    * @param  {string} name - The type of exception.
    * @param  {string} message - A message that describes the error.
    * @param  {any=null} innerException - The exception that caused the current exception.
    */
   constructor(name: string, message: string, innerException: any = null) {
      this.name = name;
      this.message = message;
      this.innerException = innerException;
      
      if (Error['captureStackTrace']) {
         Error['captureStackTrace'](this, this.constructor);
      }
   }
   
   /**
    * The type of exception.
    */
   public name: string;

   /**
    * A message that describes the error.
    */
   public message: string;
   
   /**
    * The exception that caused the current exception.
    */
   public innerException: any;
   
   /**
    * Converts this exception to a JSON message, which is often helpful for retrieving a 
    * detailed description of the error.
    */
   public getErrorDetails(): any {
      return {
         name: this.name,
         message: this.message,
         stack: this['stack'] == null
            ? undefined
            : this['stack'].split('\n'),
         innerException: (function () {
            if (!this.innerException) {
                return undefined;
            }
            
            if (this.innerException.getErrorDetails) {
               return this.innerException.getErrorDetails();
            }
            
            return {
               name: this.innerException['name'],
               message: this.innerException['message'],
               stack: this.innerException['stack'] == null
                  ? undefined
                  : this.innerException['stack'].split('\n')
            };
         }).call(this)
      }
   }
   
   toString() {
       return this.message;
   }
}

export default BaseException;
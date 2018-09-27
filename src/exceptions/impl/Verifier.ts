import ArgumentNullException from '../ArgumentNullException';
import ArgumentException from '../ArgumentException';

/**
 * Verifier is an instance, usually created using the Verify utility, to
 * chain argument validations for a particular value.
 */
class Verifier {
   private _argument: any;
   private _argumentName: string;

   /**
    * Creates a new instance.
    * @param  {any} argument - The value of the argument being validated.
    * @param  {string} argumentName - The name of the argument being validated.
    */
   constructor(argument: any, argumentName: string) {
      if (argumentName == undefined) {
          throw new Error('argumentName cannot be null.');
      }

      if (argumentName.length === 0) {
          throw new Error('argumentName cannot be empty.');
      }

      this._argument = argument;
      this._argumentName = argumentName;
   }

   /**
    * Throws an error if the arguments contains a null value.
    * @returns Verifier - The Verifier instance, used for chaining.
    */
   public isNotNull(): Verifier {
      if (this._argument === null || this._argument === undefined) {
         throw new ArgumentNullException(this._argumentName);
      }

      return this;
   }

   /**
    * Throws an error if the arguments contains a null or empty value.
    * @returns Verifier - The Verifier instance, used for chaining.
    */
   public isNotNullOrEmpty(): Verifier {
      this.isNotNull();

      if (this._argument.length === 0) {
         throw new ArgumentException(this._argumentName, this._argumentName + ' cannot be empty.');
      }

      return this;
   }
}

export default Verifier;

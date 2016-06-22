import Verifier from './Verifier';

/**
 * Static utility used to provide a fluent interface for arguments validation.
 */
class Verify {
    /**
     * Gets a Verifier instance for the specified arguments that can be used for validation.
     * @param  {any} argument - The value of the argument being validated.
     * @param  {string} argumentName - The name of the argument being validated.
     * @returns Verifier - The Verifier instance.
     */
    static that(argument: any, argumentName: string): Verifier {
        return new Verifier(argument, argumentName);
    }
}

export default Verify;
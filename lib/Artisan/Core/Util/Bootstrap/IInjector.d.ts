/**
 * IInjector is used to facilitate the Inversion of Control and Dependency Injection patterns
 * by allowing callers to register dependencies, and construct new instances using types
 * that have been registered to the container.
 */
interface IInjector {
    /**
     * Registers the type, using the specified key.
     * @param  {string} key - The key used to retrieve an instance of the specified type.
     * @param  {new(...args:any[]} value - The type to register.
     */
    register<T>(key: string, value: new (...args: any[]) => T);
    
    /**
     * Registers an instance, using the specified key.
     * @param  {string} key - The key used to retrieve the specified value.
     * @param  {T} value - The value to register.
     */
    registerInstance<T>(key: string, value: T);
    
    /**
     * Gets an instance that has been previously registered with the specified key.
     * @param  {string} key - The key of the requested instance.
     */
    getInstance(key: string);
}

export default IInjector;
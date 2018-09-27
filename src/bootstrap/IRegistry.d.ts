import IInjector from './IInjector';

/**
 * IRegistry is an interface that can be implemented to configure the IoC registry
 * during the bootstrap phase of an application.
 */
interface IRegistry {
    /**
     * Registers dependencies to the specified injector.
     * @param  {IInjector} injector - The injector being configured.
     */
    register(injector: IInjector): void;
}

export default IRegistry;

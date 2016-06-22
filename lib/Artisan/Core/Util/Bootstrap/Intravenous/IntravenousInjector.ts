///<reference path="../IInjector.d.ts"/>

import IInjector from '../IInjector';
import Verify from '../../../Exceptions/Verify';

/**
 * An implementation of IInjector that can be used with the Intravenous IoC container.
 */
class IntravenousInjector implements IInjector {
    private _container: any;

    /**
      * Creates a new instance.
      * @param  {any} container - The Intravenous container instance.
      */
    constructor(container) {
        Verify.that(container, 'container').isNotNull();
        
        this._container = container;
    }

    register<T>(key: string, value: new (...args: any[]) => T) {
        Verify.that(key, 'key').isNotNullOrEmpty();
        Verify.that(value, 'value').isNotNull();
        
        this._container.register(key, value);
    }

    registerInstance<T>(key: string, value: T) {
        Verify.that(key, 'key').isNotNullOrEmpty();
        
        this._container.register(key, value);
    }

    getInstance(key: string) {
        Verify.that(key, 'key').isNotNullOrEmpty();
        
        return this._container.get(key);
    }
}

export default IntravenousInjector;
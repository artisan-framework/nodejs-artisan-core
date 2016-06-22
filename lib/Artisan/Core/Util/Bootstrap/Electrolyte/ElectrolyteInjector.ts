///<reference path="../IInjector.d.ts"/>
///<reference path="../../../../../typings/electrolyte/electrolyte.d.ts"/>

import IInjector from '../IInjector';
import Verify from '../../../Exceptions/Verify';

/**
 * An implementation of IInjector that can be used with the Electrolyte IoC container.
 */
class ElectrolyteInjector implements IInjector {
    private _container: any;
   
    /**
     * Creates a new instance.
     * @param  {Electrolyte.Container} container - The Electrolyte container instance.
     */
    constructor(container: Electrolyte.Container) {
        Verify.that(container, 'container').isNotNull();

        this._container = container;
    }

    register<T>(key: string, value: new (...args: any[]) => T) {
        Verify.that(key, 'key').isNotNullOrEmpty();
        Verify.that(value, 'value').isNotNull();

        this._container._registerSpec(key, value);
    }

    registerInstance<T>(key: string, value: T) {
        Verify.that(key, 'key').isNotNullOrEmpty();

        this._container._registerSpec(key, () => value);
    }

    getInstance(key: string) {
        Verify.that(key, 'key').isNotNullOrEmpty();

        return this._container.create(key);
    }
}

export default ElectrolyteInjector;
/**
 * Provides a mechanism for releasing unmanaged resources.
 */
interface IDisposable {
    /**
     * Performs application-defined tasks associated with freeing, releasing,
     * or resetting unmanaged resources.
     */
    dispose(): void;
}

export default IDisposable;

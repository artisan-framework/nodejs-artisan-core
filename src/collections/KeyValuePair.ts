/**
 * Defines a key/value pair that can be set or retrieved.
 */
class KeyValuePair<TKey, TValue> {
    /**
     * Creates a new instance.
     * @param  {TKey} key - The key in the key/value pair.
     * @param  {TValue} value - The value in the key/value pair.
     */
    constructor(key: TKey, value: TValue) {
        this.Key = key;
        this.Value = value;
    }

    /**
     * The key in the key/value pair.
     */
    public Key: TKey;

    /**
     * The value in the key/value pair.
     */
    public Value: TValue;
}

export default KeyValuePair;

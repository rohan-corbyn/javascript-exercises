class HashMap {
  constructor(loadFactor = 0.75, capacity = 4) {
    this.loadFactor = loadFactor;
    this.capacity = capacity;
    this.size = 0;
    this.buckets = new Array(capacity).fill(null);
  };

  _hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.buckets.length;
    }
    return hashCode;
  }

  _getBucket(index) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to access index out of bounds");
    }
    return this.buckets[index];
  }

  _setBucket(index, key, value) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to set index out of bounds");
    }
    this.buckets[index] = { key: key, value: value, nextNode: null };
  }

  _setBucketWithNode(index, node) {
    if (index < 0 || index >= this.buckets.length) {
      throw new Error("Trying to set index out of bounds");
    }
    this.buckets[index] = node;
  }

  _resize() {
    let oldBuckets = this.buckets;
    this.capacity *= 2;
    this.buckets = new Array(this.capacity).fill(null);
    this.size = 0;

    for (let bucket of oldBuckets) {
      let current = bucket;
      while (current) {
        this.set(current.key, current.value);
        current = current.nextNode;
      }
    }
  }

  set(key, value) {
    if (this.size + 1 > this.loadFactor * this.capacity) {
      this._resize();
    }

    let hashValue = this._hash(key);
    let current = this._getBucket(hashValue);

    if (!current) {
      this._setBucket(hashValue, key, value);
      this.size++;
    } else {
      let found = false;
      if (current.key === key) {
        found = true;
      } else {
        while (current) {
          if (current.key === key) {
            current.value = value;
            found = true;
            break;
          }
          if (!current.nextNode) break;
          current = current.nextNode;
        }
      }

      if (!found) {
        current.nextNode = { key: key, value: value, nextNode: null };
        this.size++;
      } else {
        current.value = value;
      }
    }
  }

  get(key) {
    let hashCode = this._hash(key);
    let current = this._getBucket(hashCode);
    if (!current) return null;

    while (current) {
      if (current.key === key) return current.value;
      else current = current.nextNode;
    }
    return null;
  }

  has(key) {
    let hashCode = this._hash(key);
    let current = this._getBucket(hashCode);
    if (!current) return false;

    while (current) {
      if (current.key === key) return true;
      else current = current.nextNode;
    }
    return false;
  }

  remove(key) {
    let hashCode = this._hash(key);
    let current = this._getBucket(hashCode);
    let prev = null;

    if (!current) return false;

    while (current) {
      if (current.key === key) {
        if (prev) {
          prev.nextNode = current.nextNode;
        } else {
          this._setBucketWithNode(hashCode, current.nextNode ? current.nextNode : null);
        }
        this.size--;
        return true;
      } else {
        prev = current;
        current = current.nextNode;
      }
    }
    return false;
  }

  length() {
    return this.size;
  }

  clear() {
    this.buckets.forEach((bucket, i) => this._setBucketWithNode(i, null));
    this.size = 0;
  }

  keys() {
    let string = "[ ";
    this.buckets.forEach(bucket => {
      if (bucket) {
        string += bucket.key + ", "
        let current = bucket;
        while (current.nextNode) {
          current = current.nextNode;
          string += current.key;
        }
      }
    });
    string += " ]";
    return string;
  }

  values() {
    let string = "[ ";
    this.buckets.forEach(bucket => {
      if (bucket) {
        string += bucket.value + ", "
        let current = bucket;
        while (current.nextNode) {
          current = current.nextNode;
          string += current.value;
        }
      }
    });
    string += " ]";
    return string;
  }

  entries() {
    let string = "[ ";
    this.buckets.forEach(bucket => {
      if (bucket) {
        string += "[" + bucket.key + ", " + bucket.value + "], "
        let current = bucket;
        while (current.nextNode) {
          current = current.nextNode;
          string += "[" + current.key + ", " + current.value + "], "
        }
      }
    });
    string += " ]";
    return string;
  }
};

module.exports = HashMap;

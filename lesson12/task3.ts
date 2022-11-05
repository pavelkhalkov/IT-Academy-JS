//3. Напишите анотации типов к этому классу

export class ObjectManipulator<T> {

    constructor(protected obj: T) {}

    public set<K extends keyof T, V>(key: K, value: V): Object {
        return new ObjectManipulator({...this.obj, key: value});
    }

    public getF<K extends keyof T>(key: K): T[K] {  
        return this.obj[key];
    }

    public delete<K extends keyof T>(key: K ): object {
        const newObj = {...this.obj};
        delete newObj[key];
        return new ObjectManipulator(newObj);
    }

    public getObject(): T {
        return this.obj;
    }
}
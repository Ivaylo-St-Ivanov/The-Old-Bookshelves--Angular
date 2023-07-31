export const isValidEmail = (email: string) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!pattern.test(email)) {
        return;
    }

    return 'valid';
};

export const createPointer = (className: string, objectId: string) => {
    return { __type: 'Pointer', className, objectId };
};

export const addOwner = (record: object, ownerId: string) => {
    const data = {
        ...record,
        owner: createPointer('_User', ownerId)
    };

    return data;
};
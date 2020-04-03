
let updateObjInArray = (item, objPropName, userId, newObjProps) => {
    return item.map( u => {
        if ( u[objPropName] === userId) {
            return { ...u, ...newObjProps};
        }
        return u;
    });
};

export default updateObjInArray;
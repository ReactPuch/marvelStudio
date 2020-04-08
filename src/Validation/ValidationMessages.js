
export const requiredField = value => {
    if (value) return undefined;
    return "Field is required";
};

export const maxLengthCreater = (maxLength) =>(value) => {
        if (value.length > maxLength) return `Field length is ${maxLength} symbols`;
        return undefined;
};


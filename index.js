exports.reverse = (value) => {
    if(typeof value == "string"){
        value = value.split('');
        value = value.reverse();
        value = value.join('');
    } else if(typeof value == "number"){
        value = String(value);
        value = value.split('');
        value = value.reverse();
        value = parseInt(value.join(''));
    } else if(typeof value == "boolean"){
        if(value)
            value = false;
        else
            value = true;
    } else if(typeof value == "object"){
        if(value === null)
            value = value;
        else if(Array.isArray(value))
            value = value.reverse();
        else
            value = value;
    } else
        return value;

    return value;
}
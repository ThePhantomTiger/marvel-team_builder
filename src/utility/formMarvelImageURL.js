

const sizes = {
    'small': 'portrait_small',
    'medium': 'portrait_medium',
    'xlarge': 'portrait_xlarge',
    'fantastic': 'portrait_fantastic',
    'uncanny': 'portrait_uncanny',
    'incredible': 'portrait_incredible',
}

Object.freeze(sizes);


function formMarvelImageURL(thumbnail_object, size) {
    return `${thumbnail_object.path}/${size}.${thumbnail_object.extension}`
}


export default formMarvelImageURL

export { sizes }
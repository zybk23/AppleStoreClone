


export const getProductSuccess=(product)=>{
    return {type:"GET_PRODUCT",payload:product}
};


export const getProduct=(id)=>{
    return function (dispatch){
        let url="https://json-server-apple.herokuapp.com/products";

        if(id){
            url=url+"?categoryId="+id
        }
        return fetch(url)
            .then(response=>response.json())
            .then(product=>dispatch(getProductSuccess(product)))
    }
};

export const addProduct=(data)=>{
    return  {type:"ADD_PRODUCT",payload:data}
};

import React from 'react';
import "../../css/filterForm.css"
import Label from "../components/Label";

const getUnique=(items,value)=>{
    return [...new Set(items.map(item=>item[value]))]
};

const ProductFilterForm = ({
                               price, handleChange,type,
                               color,products
                           }) => {

    let types=getUnique(products,"type");
    types=["all",...types];
    types=types.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    });
    let colors=getUnique(products,"color");
    colors=["chose",...colors];
    colors=colors.map((item,index)=>{
        return <option key={index} value={item}>{item}</option>
    });
    return (
            <section className={"filter-container"}>
                <form className={"filter-form"} >
                    <div className="form-group">
                        <Label label="product types"/>
                        <select name="type" id="type" onChange={handleChange}
                                value={type} className={"form-control"}
                        >
                            {types}
                        </select>
                    </div>

                    <div className="form-group">
                        <Label label={`price ${price}$`}/>
                        <input type="range" name={"price"} min={0}
                               max={30000} id={"price"} value={price} onChange={handleChange}
                               className={"form-control"}/>

                    </div>
                    <div className="form-group">
                        <Label label={"color"}/>
                        <select name="color" id="color" onChange={handleChange}
                                value={color} className={"form-control"}
                        >
                            {colors}
                        </select>
                    </div>
                </form>
            </section>
    );
};

export default ProductFilterForm;

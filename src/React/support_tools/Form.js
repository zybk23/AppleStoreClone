import React from 'react';
import "../../css/form.css"
import Label from "../components/Label";




const Form = ({tools,onChange,onSubmitProducts}) => {
    const {name,image,price,unitInStock,color,type,description}=tools;
    return (
        <div id={"form"} className={"container"}>
            <div className="card mt-4 mb-5">
                <div className="card-header">Add Product From</div>
                <div className="card-body">
                    <form  action="" onSubmit={onSubmitProducts}>
                        <div className="form-group">
                            <Label  label={"Name"}/>
                            <input type="text"
                                   name={"name"}
                                   maxLength={"30"}
                                   value={name}
                                   onChange={onChange}
                                   className={"form-control"}/>
                        </div>
                        <div className="form-group">
                            <Label label={"Image URL"} />
                            <input type="text"
                                   name={"image"}
                                   value={image}
                                   onChange={onChange}
                                   placeholder={"URL"}
                                   className={"form-control"}/>
                        </div>
                        <div className="form-group">
                            <Label label={"Price"}/>
                            <input type="number"
                                   name={"price"}
                                   value={price}
                                   onChange={onChange}
                                   className={"form-control"}/>
                        </div>
                        <div className="form-group">
                            <Label label={"UnitInStock"}/>
                            <input type="number"
                                   name={"unitInStock"}
                                   value={unitInStock}
                                   onChange={onChange}
                                   className={"form-control"}/>
                        </div>
                        <div className="form-group">
                            <label >Color <span style={{opacity:0.5}}>(gold,black,red)</span></label>
                            <input type="text"
                                   name={"color"}
                                   value={color}
                                   maxLength={"10"}
                                   onChange={onChange}
                                   className={"form-control"}/>
                        </div>
                        <div className="form-group">
                            <Label  label={"Type"}/>
                            <input type="text"
                                   name={"type"}
                                   maxLength={"10"}
                                   value={type}
                                   onChange={onChange}
                                   className={"form-control"}/>
                        </div>
                        <div className="form-group">
                            <Label label={"description"}/>
                            <textarea type="text"
                                      name={"description"}
                                      maxLength={"50"}
                                      value={description}
                                      onChange={onChange}
                                      className={"form-control"}/>
                        </div>
                        <button type={"submit"} className={"btn btn-danger mt-3 mb-5"}>Add Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Form;

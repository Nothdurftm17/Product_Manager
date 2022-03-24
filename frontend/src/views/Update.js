import React, { useEffect, useState } from "react";
import {Link, useHistory, useParams} from "react-router-dom";
import axios from 'axios';


const Update = (props) => {
    const {_id} = useParams();

    const [form,setForm] = useState({})

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + _id)
            .then(res => {
                console.log(res)
                setForm(res.data)
            })
            .catch(err => {
                console.log(err.response)
            })
    }, [])

    const [error,setError] = useState({});
    const history = useHistory();

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();

        axios.patch("http://localhost:8000/api/products/update/" + _id, form)
            .then(res=>{
                console.log(res)
                history.push("/")
            })
            .catch(err=>{
                console.log(err.response);
                setError(err.response.data.err.errors)
            })
    }


    return(
        <div>
            <h1>Update Product</h1>
            <form className="w-75 mx-auto" onSubmit={onSubmitHandler}>
                <div className="form-group my-3">
                    <label htmlFor="title" className="mx-2">Title </label>
                    <input type="text" name="title" className="form-control" onChange={onChangeHandler} value={form.title}/>
                    <span className="alert-danger">{error.title && error.title.message}</span>
                </div>


                <div className="form-group my-3">
                    <label htmlFor="price" className="mx-2">Price</label>
                    <input type="number" name="price" className="form-control" onChange={onChangeHandler} value={form.price}/>
                    <span>{error.price && error.price.message}</span>
                </div>


                <div className="form-group my-3">
                    <label htmlFor="description" className="mx-2">Description </label>
                    <textarea name="description" cols="30" rows="10" className="form-control" onChange={onChangeHandler} value={form.description}></textarea>
                    <span className="alert-danger">{error.description && error.description.message}</span>
                </div>


                <input type="submit" className="btn btn-success btn-lg my-3"/>
            </form>
            <Link to="/">Home</Link>
        </div>
    )
}

export default Update
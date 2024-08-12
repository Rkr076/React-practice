import React, { useEffect } from "react";
import { useState } from "react";
import api from '../api/api.js';
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";


const CrudAxios = () => {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [editTitle, setEditTitle] = useState('');
    const [editBody, setEditBody] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/items');
            setPosts(response.data);
        }

        fetchData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const id = posts[posts.length - 1].id + 1;
        const newData = { id: id, title: title, body: body };
        try {
            const response = await api.post('/items', newData);
            setPosts([...posts, response.data]);
            setTitle('');
            setBody('');
        } catch (err) {
            console.log(`Error:${err.message}`);
        }

    }

    const handleDelete = async (id) => {
        try {
            await api.delete(`/items/${id}`);
            const deleteItems = posts.filter(post => post.id !== id);
            setPosts(deleteItems);
        } catch (e) {
            console.log(`Error:${e.message}`)
        }

    }
    const handleEdit = async (id) => {
        const newEditData = { id, title: editTitle, body: editBody };
        try {
          const response  = await api.put(`/items/${id}`, newEditData);
          setPosts(posts.map(post=>post.id===id ? {...response.data}:post));
          setEditTitle('');
          setEditBody('');
        } catch (err) {
            console.log(`Error:${e.message}`)
        }

    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 mt-2">
                    <h4> Lets Learn CRUD API Integration in React js using axios</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="title">Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter title"
                                name="title"
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="body">Body</label>
                            <textarea
                                className="form-control"
                                rows="3"
                                placeholder="Enter body"
                                name="body"
                                value={body}
                                onChange={(e) => setBody(e.target.value)}
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary" style={{ margin: '10px 0px' }}>
                            Submit
                        </button>
                    </form>

                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Body</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map(post => (
                                <>
                                    <tr>
                                        <td>{post.id}</td>
                                        <td>{post.title}</td>
                                        <td>{post.body}</td>
                                        <td><FaTrash style={{ cursor: 'pointer' }} onClick={() => handleDelete(post.id)} /></td>
                                        <td><FaEdit style={{ cursor: 'pointer' }} onClick={() => handleEdit(post.id)} /></td>
                                    </tr>
                                </>

                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div >
    );
};

export default CrudAxios;
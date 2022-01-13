import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import MainScreen from '../../components/MainScreen';
import axios from 'axios';

const Posts = () => {

    const [posts, setPosts] = useState([])

    const deleteHandler = (id) => {
        if (window.confirm('Are you sure?')) {

        }
    };

    // call api
/*     const fetchPosts = async () => {
        const {data} = await axios.get('/api/posts');
        
        setPosts(data)

    }

    console.log({posts})

    useEffect(() => {
        fetchPosts();
    }, [])
 */
    return (
        <MainScreen title='Bienvenido usuario'>

            <Link to='createposts'>
                <Button style={{ marginLeft: 10, marginBottom: 6 }} size='lg'>
                    Create a new Post
                </Button>
            </Link>
            {
                posts.map((post) => (

                        <Card>
                            <Card.Header style={{ display: 'flex' }}>
                                <span
                                    style={{
                                        flex: 1,
                                        cursor: 'pointer',
                                        alignSelf: 'center'
                                    }}
                                >
                                        {post.title}
        
                                </span>

                                <div>
                                    <Button href={`/posts/${post._id}`}>Edit</Button>
                                    <Button
                                        variant='danger'
                                        className='mx-2'
                                        onClick={() => deleteHandler(post._id)}>
                                        Delete
                                    </Button>

                                </div>
                            </Card.Header>

                                <Card.Body>

                                    <Card.Text>
                                        {post.content}
                                    </Card.Text>
                                    <footer className='blockquote-footer'>Created on - date</footer>
                                </Card.Body>

                        </Card>

                )
                )
            }

        </MainScreen >
    );
};

export default Posts

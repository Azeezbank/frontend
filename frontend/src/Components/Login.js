import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Createpost from './Createpost';


const Login = () => {
    const [userId, setUserId] = useState('');
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);
    

    const fetchPosts = async (e) => {
        e.preventDefault();
        if (!userId) return;

        try {
            const response = await fetch(`https://backend-i9tl.onrender.com/api/postss/${userId}`);
            if (!response.ok) {
                throw new Error('Failed to fetch posts');
            }
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            setError(error.message);
        }
    };

    const handleUserIdChange = (e) => {
        setUserId(e.target.value);
    };

    return (
        <>

          <nav className="navbar navbar-expand-md bg-danger bg-gradient fixed-top">
            <div className="container-fluid">
              <span
                href="#"
                className="navbar-brand"
                style={{ fontSize: "2.2rem", fontWeight: "bold" }}
              >
                Bankky <small>Blog.</small>
              </span>
              <button
                className="navbar-toggler bg-light bg-gradient"
                type=" button"
                data-bs-toggle="collapse"
                data-bs-target="#navContent"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navContent">
                <ul className="navbar-nav">
                  <hr />
                  <Link to="/" className="link">
                  <li className="nav-item">
                    <span className="nav-link">
                      HOME
                    </span>
                  </li>
                </Link>
                  <Link to='/' className='link'>
                  <li className="nav-item">
                    <span className="nav-link">
                      <span>ABOUT Us</span>
                    </span>
                  </li>
                    </Link>
                  <Link to="/AllPost" className="link">
                    <li className="nav-item">
                      <span className="nav-link">
                        BLOG
                      </span>
                    </li>{" "}
                  </Link>
                  <Link to='/' className='link'>
                  <li className="nav-item">
                    <span className="nav-link">
                     <span> SERVICE </span>
                    </span>
                  </li>
                    </Link>
                  <Link to="/Login" className="link">
                  <li className="nav-item">
                  <span className="nav-link" href="">
                  My Account
                  </span>
                  </li>
                  </Link>

                  <button className="btn bg-light text-dark btn- rounded-pill">
                    LET'S TALK
                  </button>
                </ul>
              </div>
            </div>
          </nav>



            <div className='container-fluid text-center' style={{backgroundImage:"url('https://th.bing.com/th/id/OIP.IR_YctBeGbNZPVI4dGM8mQHaFj?rs=1&pid=ImgDetMain')", backgroundSize:'cover', backgroundPosition:'center', height:'400px'}}>
                <div className='account'>
            <h2 className='text-white my'>My Account</h2>
                </div>
            </div>


            <div className='container-fluid bg-light text-center mb-4'>
                <div className='row bg-light p-5'>
                    <div className='col-sm-4 bg-danger p-5 mt-5 text-white'>
                    <img src='https://img.freepik.com/premium-vector/man-with-blue-shirt-blue-shirt-has-green-eyes_169196-13007.jpg' alt='user' className='img-circle userimg' /> <br/>
                        <strong className='mt-2'>Bankky@yahoo.com</strong> <hr/>
                        <h5 className='bg-light text-dark p-2 rounded'><i className='bi bi-person'></i>  Dashboard</h5>
                    </div>
                    <div className='col-sm-8'>
                        <h3 className='text-danger mt-4 pt-4 pb-3'>CREATE POST <i className='bi bi-pencil'></i></h3>

                        <div className='alert alert-warning alert-dismissible fade show' role='alert'>
                       <button className='btn-close' type='button' data-bs-dismiss='alert'></button>
<div><strong>Note*:</strong> The User_id is unique and must be secret, because its serve as key to your post, and the chosen number should be using for every post you created.</div>
                        </div>

                    <Createpost />
                    </div>
                </div>
                <div
                    className='row bg-light'>
                <div className='col-sm-1'>
                </div>
                    <div className='col-sm-10 p-5'>
            <h1 className='text-danger pb-3'>FETCH POSTS</h1>

            <form id='form' className='input-group'>
                        <input className='form-control bg-white'
                type="password"
                placeholder="Enter Your User_id"
                value={userId}
                onChange={handleUserIdChange}
                            required
            />

            <button className=' bg-danger text-white border rounded' onClick={fetchPosts}>Get Posts</button>
            </form>
                        <h3 className='text-danger mt-5'>
                        MY POSTS
                        </h3>

                    </div>
                    <div className='col-sm-1'>
                    </div>
                </div>

                <div className='row bg-light p-5'>
                    <div className='myPost'>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {posts.length > 0 ? (
                posts.map(post => (
                    <div className='bg-white border p-2 text-start' key={post.id}>
                        <img
                        className="thumbnail thumb"              src="https://skytechgeek.com/wp-content/uploads/2019/03/become-food-blogger.jpg"
                        alt="img"
                      />
                        <h3 className="pt-4">{post.title}</h3>
                      <small>
                        {" "}
                        <i className="bi bi-person-fill bg-light text-danger p-2 rounded-circle"></i>
                        By {post.author_name} <br /> {post.created_at}
                      </small>{" "}
                        <p className="pt-3">{post.content.substring(0, 5)}...</p>
                        <Link to={`/PostDetail/${post.id}`} className="no-line">
                        <p className="text-danger">
                          Read more{" "}
                          <i className="bi  bi-chevron-double-right"></i>{" "}
                        </p>{" "}
                      </Link>
                      <Link to={`/Editpost/${post.id}`} className='no-line text-white bg-danger p-1 rounded ms-2'>Edit</Link> {/* Link to EditPost */}
                    </div>
                ))
            ) : (
                <p className='text-end text-danger text-start'>No user found</p>
            )}
                    </div>
                </div>


                </div>






        <div className="container-fluid bg-danger p-5 pt-3 text-center text-white">
        <div className="row mt-5 mb-5">
          <div className="col-sm-4">
            <div className="row">
              <div className="col-4 text-end pt-5">
                <h1>
                  <i className="bi bi-building"></i>
                </h1>
              </div>
              <div className="col-8 text-start pt-5">
                <h3>XTRA</h3>
                <p>BUSINESS</p>
              </div>
            </div>
            <p>
              A company is any entity that engages in business. Companies can be
              structured in different ways. For example, your company can be a
              sole proprietorship, a partnership, or a corporation.
            </p>
            <div className="row mt-4">
              <div className="col-2"></div>
              <div className="col-2">
                <h2>
                  <i className="bi bi-facebook"></i>
                </h2>
              </div>
              <div className="col-2">
                <h2>
                  <i className="bi bi-twitter"></i>
                </h2>
              </div>
              <div className="col-2">
                <h2>
                  <i className="bi bi-telegram"></i>
                </h2>
              </div>
              <div className="col-2">
                <h2>
                  <i className="bi bi-linkedin"></i>
                </h2>
              </div>
              <div className="col-2"></div>
            </div>
          </div>
          <div className="col-sm-8">

            <div className="row">
              <div className="col-sm-8 pt-5">
                <h3>Join Our Community of 203,849 Food Lovers</h3>
                <p>Experience the joy of culinary exploration, where each recipe, reviews
                  and tip nourishes the soul just like a melody ot a masterpiece. Let our content inspire
                  your next meal.
                </p>
                <h3>Stay Connected</h3>
                <p>I share delicious and thoughtfully curated content occasionally-no spam, just the good stuff. Promise.</p>
              </div>
              <div className="col-sm-4 pt-5">
                <h3>ADDRESS</h3>
                <p>Secretariat, Iragbiji, Osun State, Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid border-top border-light bg-danger text-center text-light p-5">
      <p>Copyright 2024 Bankky Blogger || Alright Reserve <br/> Subscribe for newsletter</p>
      </div>

        </>
    );
};

export default Login;
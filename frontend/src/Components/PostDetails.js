import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://backend-i9tl.onrender.com/api/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post:", error));
  }, [id]);

  if (!post) {
    return <h1 className="text-danger text-center pt-5"><div className="spinner-border"></div>Loading...</h1>;
  }

  return (
    <>
      <nav className="navbar navbar-expand-md bg-danger bg-gradient fixed-top">
        <div className="container-fluid">
          <a
            href="#"
            className="navbar-brand"
            style={{ fontSize: "2.2rem", fontWeight: "bold" }}
          >
            Bankky <small>Blog.</small>
          </a>
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
              <li className="nav-item">
                <a href="." className="nav-link">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  ABOUT ME
                </a>
              </li>
              <Link to="/AllPost">
                <li className="nav-item">
                  <a className="nav-link" href="#edu">
                    BLOG
                  </a>
                </li>{" "}
              </Link>
              <li className="nav-item">
                <a className="nav-link" href="#service">
                  SERVICE
                </a>
              </li>

              <button className="btn bg-primary bg-gradient text-light btn- rounded-pill">
                LET'S TALK
              </button>
            </ul>
          </div>
        </div>
      </nav>

      <div className="container-fluid bg-light detail pb-5">
        <div className="card car p-5">
          <img
            className="thumbnail"
            src="https://tunstelecom.com.ng/wp-content/uploads/2024/08/images-15.jpeg"
            alt="img"
          />
          <h3 className="pt-4 text-dark">{post.title}</h3>
          <p className="text-danger">
            <i className="bi bi-person-fill bg-white text-danger p-2 rounded-circle"></i>
            By {post.author_name} <br /> {post.created_at}
          </p>
          <p className="pt-3">{post.content}</p>
        </div>

        <div className="card car p-5 mt-5">
          <h6>Leave a Comment</h6>
          <p>Your email address will not be publish. The requied fields are marked *</p>
          <form>
            <textarea className="form-control mt-4 bg-light" rows={5} placeholder="Type here..."></textarea>

            <div className="row">
              <div className="col-sm-4">
                <input className="form-control mt-4 bg-light" type="text" placeholder="Name*" required/>
              </div>
              <div className="col-sm-4">
                <input className="form-control mt-4 bg-light" type="email" placeholder="Email*" required/>
              </div>
              <div className="col-sm-4">
                <input className="form-control mt-4 bg-light" type="text" placeholder="Website" />
              </div>
              </div>
              <div>
              <button className="bg-danger border mt-5 p-3 text-white">Post Comment<i className="bi bi-chevron-double-right"></i></button>
            </div>
          </form>
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
}

export default PostDetail;

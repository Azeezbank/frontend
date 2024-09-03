import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://backend-i9tl.onrender.com/api/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false);
      });
  }, []);

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

      <div className="container-fluid bg-light">
        <div className="row blog">
          <div className="col-sm-8">
            <div className="row">
              <div className="col-sm-6">
                <h1 className="text-danger pt-5 pb-4 fs-1 ps-5 mt-5">
                  BLOG POSTS
                </h1>
              </div>
              <div className="col-sm-6"></div>
            </div>

            <div>
              {loading ? (
                <>
                  <h1 className="text-danger text-center">
                    <div
                      className="spinner-border text-danger"
                      role="status"
                    ></div>{" "}
                    Loading...{" "}
                  </h1>
                </>
              ) : (
                <ul className="p-3 grid">
                  {posts.map((post) => (
                    <li
                      key={post.id}
                      className="card bg-white text-dark border rounded shadow-sm p-3"
                      style={{ listStyle: "none" }}
                    >
                      <img
                        className="thumbnail"
                        src="https://tunstelecom.com.ng/wp-content/uploads/2024/08/images-15.jpeg"
                        alt="img"
                      />
                      <h3 className="pt-4">{post.title}</h3>
                      <small>
                        {" "}
                        <i className="bi bi-person-fill bg-light text-danger p-2 rounded-circle"></i>
                        By {post.author_name} <br /> {post.created_at}
                      </small>{" "}
                      <p className="pt-3">{post.content.substring(0, 5)}...</p>
                      <br />
                      <Link to={`/PostDetail/${post.id}`} className="no-line">
                        <p className="text-danger">
                          Read more{" "}
                          <i className="bi  bi-chevron-double-right"></i>{" "}
                        </p>{" "}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="col-sm-4">
            <form className="form input-group bg-white mt-5 me-1">
              <input
                type="search"
                placeholder="Search Post..."
                className="form-control bg-light mt-5 mb-5 ms-3"
              />
              <button className="btn btn-outline-danger mt-5 mb-5 me-3">
                <i className="bi bi-search"></i>
              </button>
            </form>
          

          <div className="bg-white mt-4">
            <h3 className="pt-5 ms-4">CATEGORIES</h3>
            <p className="text-danger pt-3 ms-3">Recipes & Cooking Tips</p>
            <p className="text-danger pt-3 ms-3">Restaurant Reviews</p>
            <p className="text-danger pt-3 ms-3">Healthy Eating</p>
            <p className="text-danger pt-3 ms-3">Food Trends & News</p>
          </div>
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
}

export default AllPost;

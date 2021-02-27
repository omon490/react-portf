import "./Blog.css"

import { useState, useEffect } from "react"

import { Link, Switch, Route } from "react-router-dom"

import loadingEffect from "../../loader/spin.gif"

function Blog() {
  const [data, setData] = useState({ loading: true, error: null, data: [], })

  useEffect(() => {

  ;(async () => {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const posts = await response.json()

    setData({ loading: false, data: posts, })

  })()

}, [])

  return (
<>
<Switch>

  <Route path="/blog" exact>

    <div >
    {
      data.loading && <img className="blog-loader" alt="alt" src={loadingEffect} />
    }
    </div>


    <ul className="container blog-wrapper">
      {
        !data.loading && (
          <div className="blog-list">
            {
              data.data.map(post => {

                return <li className="blog-item" key={post.id}>
                  <Link className="blog-link" to={'/post/' + post.id}>
                    <p className="blog-title">{post.title}</p>
                    </Link>
                    <p className="blog-text">{post.body}</p>
                </li>
              })
            }
          </div>
        )
      }
    </ul>
  </Route>

</Switch>

</>
  )
}

export default Blog
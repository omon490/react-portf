import "./Blog.css"

import { useState, useEffect } from "react"

import { Link, Switch, Route } from "react-router-dom"

import Post from "../Pages/Post"

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

    {
      data.loading && <img alt="alt" src={loadingEffect} />
    }


    <ul className="container">
      {
        !data.loading && (
          <>
            {
              data.data.map(post => {

                return <li key={post.id}>
                  <Link to={'/post/' + post.id}>{post.title}</Link>
                </li>
              })
            }
          </>
        )
      }
    </ul>
  </Route>

  <Route path="/post/:id" exact>
    <Post></Post>
  </Route>

</Switch>
</>
  )
}

export default Blog
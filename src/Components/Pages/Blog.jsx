import "./Blog.css"
import { useState, useEffect } from "react"
import { Link, Switch, Route } from "react-router-dom"

function Blog() {

  const [data, setData] = useState({

		loading: true,
		error: null,
		data: [],
	})

  useEffect(() => {

		fetch("https://jsonplaceholder.typicode.com/posts")
		.then(response => response.json())
		.then(data => {

			setData({ loading: false, data: data, })
		})
		.catch(error => {
			setData({ error: "xatolik yuz berdi" })
		})

	}, [])

  return (
    <>
		{data.loading &&
    <>
      <h1 className="container blog-loading">Loading...</h1>
    </>
    }

	  {data.error &&
    <>
      <h1 className="container blog-error">{data.error}</h1>
    </>
    }

		{!data.loading &&
    <>
			<div className="container blog-wrapper">
			{data.data.map(post => {
        console.log(post);
					return (
            <ul className="blog-list">
              <li className="blog-item" key={post.id}>
					      {/* <a href={'/post/' + post.id}>{post.title}</a> */}
                <Link className="blog-link" to="/post/2">
                  <h3 className="blog-title">{post.title}</h3>
                  </Link>
                  <p className="blog-text">{post.body}</p>
					    </li>
            </ul>)
			})
			}
			</div>
		</>
    }
	</>
  )
}

export default Blog

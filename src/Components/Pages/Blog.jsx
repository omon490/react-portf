// import "./Blog.css"
// import { useState, useEffect } from "react"
// import { Link, Switch, Route } from "react-router-dom"

// function Blog() {

//   const [data, setData] = useState({

// 		loading: true,
// 		error: null,
// 		data: [],
// 	})

//   useEffect(() => {

// 		fetch("https://jsonplaceholder.typicode.com/posts")
// 		.then(response => response.json())
// 		.then(data => {

// 			setData({ loading: false, data: data, })
// 		})
// 		.catch(error => {
// 			setData({ error: "xatolik yuz berdi" })
// 		})

// 	}, [])

//   return (
//     <>
// 		{data.loading &&
//     <>
//       <h1 className="container blog-loading">Loading...</h1>
//     </>
//     }

// 	  {data.error &&
//     <>
//       <h1 className="container blog-error">{data.error}</h1>
//     </>
//     }

// 		{!data.loading &&
//     <>
// 			<div className="container blog-wrapper">
// 			{data.data.map(post => {
//         console.log(post);
// 					return (
//             <ul className="blog-list">
//               <li className="blog-item" key={post.id}>
// 					      {/* <a href={'/post/' + post.id}>{post.title}</a> */}
//                 <Link className="blog-link" to="/post/2">
//                   <h3 className="blog-title">{post.title}</h3>
//                   </Link>
//                   <p className="blog-text">{post.body}</p>
// 					    </li>
//             </ul>)
// 			})
// 			}
// 			</div>
// 		</>
//     }
// 	</>
//   )
// }

// export default Blog


import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function Blog() {

  const [post, setPost] = useState({})

  const [id, setId] = useState(1)

  const [idFromButtonClick, setIdFromButtonClick] = useState(1)

  const handleClick = () => {
    setIdFromButtonClick(id)
  }
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`)
      .then(res => {
        setPost(res.data)
        console.log(res.data.id);
        console.log(res.data.title);
      })
      .catch(err => {
        console.log(err);
      })
  }, [idFromButtonClick])

  return (
    <div className="container">
      <input className="blog-input" type="text" value={id} onChange={e => setId(e.target.value)} />
      <button className="blog-button" type="button" onClick={handleClick}>Fetch Post</button>

      <div className="">
        <ul className="blog-list">
          <li className="blog-item">
            <Link className="blog-link">{post.title}</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Blog


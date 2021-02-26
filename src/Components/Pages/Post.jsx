import loadingEffect from "../../loader/spin.gif"

import React, { useEffect, useState } from "react"

import { useParams, Redirect } from "react-router-dom"


function Post() {

  const { id } = useParams()

	const [post, setPost] = useState({ loading: true, error: null, data: null, })

		useEffect(() => {

		;(async () => {

			const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + id)
			const post = await response.json()

			if (Object.keys(post).length) {

				setPost({ loading: false, data: post, })
			}
			else {
				setPost({ loading: false, error: response.status, data: null, })
			}

		})()

	}, [id])

  return (
    <div>
      {
				post.loading && <img alt="alt" src={loadingEffect} />
			}

			{
				!post.loading && !post.error && (
					<>
						<h1>{post.data.title}</h1>
						<p>{post.data.body}</p>
					</>
				)
			}

			{

				post.error && post.error
			}
    </div>
  )
}

export default Post

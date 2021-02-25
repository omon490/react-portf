import "./Blog.css"
import {useLanguage} from '../../Context/Language'
import Localization from '../../Localization'
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

function Blog() {

  const [language, setLanguage] = useLanguage()

  const TEXT = Localization[language]

  const languageChange = e => setLanguage(e.target.value)

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
		<ul>
		{ data.loading && <>Loading...</> }
		{ data.error && <>{data.error}</> }
		{ !data.loading &&
    <>
			<ul className="blog-list">
			{
				data.data.map(post => {

					return <li className="blog-item" key={post.id}>

					{/* <a href={'/post/' + post.id}>{post.title}</a> */}
          <Link to="/post/2">{post.title}TEST</Link>

					</li>
				})
			}
			</ul>

			</>}
			</ul>
			</>
  )
}

export default Blog

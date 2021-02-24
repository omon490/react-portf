import { createContext, useState, useContext, useEffect } from "react"

const ThemeContext = createContext()

function ThemeProvider({ children }) {

	const [theme, setTheme] = useState(window.localStorage.getItem("theme") || "light")

	const value = {
		theme: theme,
		setTheme: setTheme,
	}

	useEffect(() => {

		window.localStorage.setItem("theme", theme)

		console.log(theme)

	}, [theme])

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	)
}

function useTheme(setterOnly = false) {

	const { theme, setTheme } = useContext(ThemeContext)

	return setterOnly ? [setTheme] : [theme, setTheme]
}

export {
	ThemeProvider,
	useTheme,
}

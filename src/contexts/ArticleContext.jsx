/* eslint-disable react/prop-types */
import { useContext, createContext, useState, useEffect  } from "react";

const ArticleContext = createContext()
export const useArticles = () => useContext(ArticleContext)

export const ArticleProvider = ({children}) => {
    const [articles, setArticles] = useState([])
    const [article, setArticle] = useState({})
    const [threeArticles, setThreeArticles] = useState([])
    const [fourArticles, setFourArticles] = useState([])

    useEffect(() => {
        getArticles()
        getThreeArticles()
        getFourArticles()
    }, [])

    const getArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles')
        if (result.status === 200) {
            setArticles(await result.json())
        }
    }

    const getArticle = async (id) => {
        if (id !== undefined) {
            const result = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`)
            if (result.status === 200) {
                setArticle(await result.json())
            }
            else if (result.status === 400) {
                console.warn("The id parameter is missing or invalid")
            }
            else if (result.status === 404) {
                console.warn("No article is found with the provided ID")
            }
        }
    }

    const getThreeArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles?take=3')
        if (result.status === 200) {
            setThreeArticles(await result.json())
        }
    }

    const getFourArticles = async () => {
        const result = await fetch('https://win23-assignment.azurewebsites.net/api/articles?take=4')
        if (result.status === 200) {
            setFourArticles(await result.json())
        }
    }

    return (
        <ArticleContext.Provider value={{articles, article, threeArticles, fourArticles, getArticles, getArticle, getThreeArticles, getFourArticles}}>
            {children}
        </ArticleContext.Provider>
    )
}


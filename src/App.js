import { useState } from "react"
import Header from "./components/Header"
import TrackerScreen from "./components/TrackerScreen"
import Transaction from "./components/Transaction"
import History from "./components/History"
import Context from "./Context"

function App() {
    const income = useState(0)
    const expense = useState(0)
    const history = useState([])
    return (
        <div className="container">
            <Context.Provider value={{income,expense,history}} >
                <Header text='Expense Tracker by khaled yassin' />
                <TrackerScreen  />
                <History />
                <Transaction/>
            </Context.Provider>
        </div>
    )
}

export default App

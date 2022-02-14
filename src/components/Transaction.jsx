import { useContext } from 'react/'
import Context from '../Context'
import { useState } from "react"

function Transaction() {
    const{income,expense,history} = useContext(Context)
    const [incomeTrans,setIncome] = income
    const [expenseTrans,setExpense] = expense
    const [historyTrack , setHistory] = history
    const [amount,setAmount] = useState('')
    const [description,setDescription] = useState('')
    function AddTransaction(e){
        e.preventDefault()
        if(amount.length === 0 || description.length === 0  || isNaN(+amount)){
            return
        }
        else if(+amount > 0){
            setIncome( incomeTrans + +amount )
        }
        else{
            setExpense(expenseTrans + +amount*-1)
        }
        setHistory([...historyTrack,{description , amount}])
        setAmount('')
        setDescription('')
    }
    return (
        <div className="transaction">
            <form>
                <h2>Add New Transaction</h2>
                Description <input type="text" value={description} onChange={(e)=>setDescription(e.target.value)} />
                Transaction Amount <input type="text" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
                <button onClick={AddTransaction}>Add Transaction</button>
            </form>
        </div>
    )
}

export default Transaction
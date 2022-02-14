import { useContext } from 'react/'
import Context from '../Context'

function Transaction() {
    const{income,expense,history} = useContext(Context)
    const [incomeTrans,setIncome] = income
    const [expenseTrans,setExpense] = expense
    const [historyTrack , setHistory] = history
    function AddTransaction(e){
        e.preventDefault()
        const fields = document.querySelectorAll('form input')
        if(fields[1].value.trim().length === 0 || fields[1].value.trim().length === 0  || isNaN(+fields[1].value)){
            return
        }
        else if(+fields[1].value > 0){
            setIncome( incomeTrans + +fields[1].value )
        }
        else{
            setExpense(expenseTrans + +fields[1].value*-1)
        }
        setHistory([...historyTrack,{description: fields[0].value , amount: fields[1].value}])
        fields.forEach(field=>field.value = '')
    }
    return (
        <div className="transaction">
            <form>
                <h2>Add New Transaction</h2>
                Description <input type="text" />
                Transaction Amount <input type="text"/>
                <button onClick={AddTransaction}>Add Transaction</button>
            </form>
        </div>
    )
}

export default Transaction
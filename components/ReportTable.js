import { hours } from './assets/data'
import useResource from '../hooks/useResource'
import { ReactElement } from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function ReportTable(props){
const {deleteResource} = useResource()
let sum = 0;
let lastTotal = 0
let hourly_sales = [48, 42, 30, 24, 42, 24, 36, 42, 42, 48, 36, 42, 24, 36]



    return(
        <table className='border border-style: solid border-black text-center border-collapse w-10/12'>
            <thead className='bg-green-500'>
                <th>Location</th>
            {hours.map(hour => {
                        return (
                        
                            // eslint-disable-next-line react/jsx-key
                            <th>{hour}</th>
                        )
                    })
                }
                <th className='border border-style: solid border-black'>Totals</th>
            </thead>
            <tbody>
                
                    
                {props.stands.map((stand,key)=>{
                    sum = 0
                    console.log(stand);
                    return(
                    <tr key={`${key}`} className='bg-green-300'>
                    <td className='border border-style: solid border-black'>{stand.location}
                    <button onClick={()=>deleteResource(stand)}>
                        X
                    </button>
                    </td>
                    {stand.hourly_sales.map((sale,key)=>{
                        {sum = sum + sale}
                        return(
                        
                        <td key={`${key}`} className='border border-style: solid border-black'>{sale}</td>
                        )
                    })}
                    <td className='border border-style: solid border-black'>{sum}</td>
                    </tr>
                    )

                })}
                
            </tbody>
            <tfoot className='bg-green-500 font-bold'>
                <td className='border border-style: solid border-black'>Totals</td>
                {hourly_sales.map((sale,key)=>{
                    console.log(sale);
                        return(
                        
                        <td className='border border-style: solid border-black' key={`${key}`}>
                        {sale}</td>
                        )
                    })}
                {props.stands.map(item=>{
                    lastTotal = lastTotal + sum
                })}
                <td className='border border-style: solid border-black'>{lastTotal}</td>
            </tfoot>

        </table>
    )
}
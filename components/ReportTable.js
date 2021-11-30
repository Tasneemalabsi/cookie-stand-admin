import { hours } from './assets/data'
export default function ReportTable(props){
let sum = 0;
let total = 0
let lastTotal = 0

    return(
        <table className='border border-style: solid border-black text-center border-collapse w-11/12'>
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
                    return(
                    <tr key={`${key}`} className='bg-green-300'>
                    <td className='border border-style: solid border-black'>{stand.location}</td>
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
                {/* {hours.map((hour,key)=>{
                    total = 0 
                 return(   
                props.stands.map((stand)=>{
                        console.log(key);
                    total = total+stand.hourly_sales[key]
                    return (
                        <>
                        <td>{total}</td>
                        </>
                    )
                    })

                )})} */}
                {hours.map((sale,key)=>{
                        return(
                        
                        <td className='border border-style: solid border-black' key={`${key}`}>{props.stands.hourly_sales}</td>
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
export default function CreateForm(props){
    return (
<form action="" onSubmit={props.formHandler} className='flex flex-col justify-center bg-green-300 w-10/12 mx-auto p-2 my-6 rounded-xl'>
        <h2 htmlFor="" className='mx-auto flex justify-center my-2 text-2xl 	--tw-text-opacity: 1;'>Create Cookie Stand</h2>
          <div className='flex-auto flex justify-center py-6'>
        <label className='px-2'>Location</label>
          <input type="text" name='location' className='w-full'/>
          </div>
          <div className='flex py-2 px-3 '>
          <div className='py-2 bg-green-200 mx-2 rounded text-center'>
          <label>Minimum Customers per Hour</label>
          <input type="number" name='minCustomers' />
          </div>
          <div className='py-2 bg-green-200 mx-2 rounded text-center'>
          <label>Maximum Customers per Hour</label>
          <input type="number" name='maxCustomers' />
          </div>
          <div className='py-2 bg-green-200 mx-2 rounded text-center'>
          <label>Average Cookies per Sale</label>
          <input type="number" name='avgCookies' />
          </div>
          <input type="submit" value ="Create" className = 'px-20 h-14 text-xl bg-green-500' />
          </div>
        </form>
    )
}
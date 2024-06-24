import { useCallback } from "react";
import { useSelector } from "react-redux"

const ValidationError = () => {
  const {error} = useSelector(state => state.auth);
  console.log(error);

  const errorMessage = useCallback(() => {
    return Object.keys(error).map(name =>{
      const msg = error[name].join(', ')
      return `${name} - ${msg}`
    })
  },[error])
  console.log(error !== null && errorMessage());
  return (
    error !== null && errorMessage().map((error,index) => (
     <>
      <div role="alert" key={index}>
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
         {error}
        </div>
        {/* <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
        <p>Something not ideal might be happening.</p>
       </div> */}
      </div>
     </>
    ))
  )
}

export default ValidationError
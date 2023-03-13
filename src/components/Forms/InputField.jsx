export default (props) =>{

    const {
        label,
        type,
        placeholder,
        value,
        name,
        handeleInputChange

    }  =  props;

    return (

        <>

         <label
              htmlFor="firstName"
              className="2xs:hidden text-gray-light mb-2 text-sm font-normal"
            >
             {label}
            </label>
        

        <input
               
              type={type}
              name={name}
              value={value}
              className="bg-gray-1 rounded-md w-full h-[48px] p-2 focus:shadow-md focus:outline focus:outline-4 focus:outline-offset-2 focus:outline-gray-1 focus:ring-1 focus:ring-primary-500 dark:focus:outline-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-black dark:focus:border-black"
              placeholder={placeholder}
              onChange={handeleInputChange}
            />
        
        </>
    )



}
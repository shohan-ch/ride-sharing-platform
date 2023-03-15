export default (props) => {


    const {label, checkedHandler}  = props;



    return (

        <>
            <input
                type="checkbox"
                defaultValue=""
                onChange={checkedHandler}
                className="relative float-left h-5 w-8 appearance-none rounded-[0.25rem] border-[0.125rem]
         border-solid border-neutral-300 dark:border-neutral-600
          outline-none before:pointer-events-none before:absolute before:h-[0.875rem]
           before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0
            before:shadow-[0px_0px_0px_13px_transparent] before:content-['']
             checked:border-primary dark:checked:border-primary checked:bg-primary 
             dark:checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute 
             checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem]
              checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem]
               checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid
                checked:after:border-white checked:after:bg-transparent
                 checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] 
                 focus:shadow-none
                  focus:transition-[border-color_0.2s] focus:before:scale-100 
                  focus:before:opacity-[0.12] 
                  focus:after:absolute focus:after:z-[1] 
                  focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] 
                  focus:after:content-[''] checked:focus:before:scale-100 checked:focus:after:-mt-px 
                  checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 
                  checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0
                   checked:focus:after:border-l-0
         checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent"
            />
            <label
                onClick="failed()"
                htmlFor="default-checkbox"
                className="text-gray-light xs:text-xs ml-5 font-normal"
            >
               {label}
            </label>
        </>

    )



}
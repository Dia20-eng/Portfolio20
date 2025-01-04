const FloatingInput = (props: any) => {
    return (
      <div className="relative">
       { props.id!="message"?<input
          type="text"
          id={props.id}
          value={props.value}
          onChange={ (e)=>props.handleChange(props.id , e.target.value)}
          className={`block px-2.5 pb-2.5 pt-4 w-full text-l sm-mx:text-md xs-mx:text-xs sm-mx:pb-1 sm-mx:pt-1 text-white bg-transparent rounded-xl border border-textColor appearance-none hover:shadow-[0_0_5px_0_#64FFDA] focus:outline-none ${props.error?"border-red-500":""} focus:ring-0 focus:border-primarycolor peer`}
          placeholder=" "
        />:
        <textarea name={props.id} id={props.id} rows={4} value={props.value}onChange={(e) => props.handleChange(props.id, e.target.value)} className="block px-2.5 pb-2.5 pt-4 w-full text-l sm-mx:text-xs xs-sm:text-base xs-mx:text-md text-white bg-transparent rounded-xl border border-textColor appearance-none hover:shadow-[0_0_6px_0_#64FFDA] focus:outline-none focus:ring-0 focus:border-primarycolor peer" placeholder=" "></textarea>
       }
        <label
          htmlFor={props.id}
          className={`absolute ${props.error?"border-red-500":""} text-l sm-mx:text-md xs-mx:text-xs text-textColor dark:text-gray-400 duration-300 transform -translate-y-4 scale-100 top-1 z-10 origin-[0] bg-bgcolor px-2  peer-focus:px-2 peer-focus:text-primarycolor peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-1/2 ${props.id!="message"?"peer-placeholder-shown:top-1/2":"peer-placeholder-shown:top-6"}"peer- focus:top -1:scale-90 peer-focus:-translate-y-4 rtl:peer-focus:left-auto start-1`}

        >
         {props.name}
        </label>
        {props.error&& <div className="text-red-500  ml-1 mt-1">{props.error}</div>}
        
      </div>
    );
  };
  
  export default FloatingInput;
  
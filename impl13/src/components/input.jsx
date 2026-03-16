export const Input = ({
    onClick,
    type,
    placeholder
})=>{
    return <span onClick={onClick} className={`rounded-2xl text-lg px-2 py-1 text-white cursor-pointer bg-blue-500`}>
        <input type={type} placeholder={placeholder}
        className="bg-blue-500 outline-none p-4 rounded-2xl"/>
    </span>
}
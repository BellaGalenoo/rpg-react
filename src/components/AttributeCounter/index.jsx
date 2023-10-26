export default function AttributeCounter({ attribute }) {

  return (
    <section className="flex flex-col items-center gap-2">
      <attribute.Icon size={30} />
      <div className="flex gap-1 items-center">
        <button className="bg-[#F05D5D] w-10 h-10 rounded-md hover:bg-[#da4848] active:bg-[#da4848] focus:outline-none focus:ring focus:ring-[#ff9393] ">-</button>
        <select name="numero" id="numero" className="bg-transparent h-10 px-2 text-xl  border border-opacity-20 border-white rounded-md ">
          <option value="0">00</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button className="bg-[#605DF0] w-10 h-10 rounded-md hover:bg-[#5351d1] active:bg-[#5351d1] focus:outline-none focus:ring focus:ring-[#8583ff]">+</button>
      </div>
      <p>
        {attribute.name}
      </p>
    </section>
  )
}
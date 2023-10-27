import { useState } from "react"

export default function AttributeCounter({ attribute }) {
  //contador funcionando
  const [attributeValue, setAttributeValue] = useState(1)


  console.log(attributeValue)
  return (
    <section className="flex flex-col items-center gap-2" title={attribute.description}>
      <attribute.Icon size={30} />
      <div className="flex gap-1 items-center ">
        <button onClick={() => setAttributeValue(attributeValue - 1)} className="bg-[#F05D5D] w-10 h-10 rounded-md hover:bg-[#da4848] active:bg-[#da4848] focus:outline-none focus:ring focus:ring-[#ff9393]">-</button>
        <input
          value={attributeValue}
          placeholder="00"
          className="bg-transparent h-10 px-2 text-xl text-center border border-opacity-20 border-white rounded-md w-16" />
        <button onClick={() => setAttributeValue(attributeValue + 1)} className="bg-[#605DF0] w-10 h-10 rounded-md hover:bg-[#5351d1] active:bg-[#5351d1] focus:outline-none focus:ring focus:ring-[#8583ff]">+</button>
      </div >
      <p>
        {attribute.name}
      </p>
    </section>
  )
}
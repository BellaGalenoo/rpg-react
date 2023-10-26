import { GiDiceTwentyFacesTwenty, GiBiceps } from "react-icons/gi"
import { IoSpeedometerSharp } from "react-icons/io5"
import { FaShieldHalved, FaBrain, FaMasksTheater } from "react-icons/fa6"
import AttributeCounter from "@/components/AttributeCounter";

export default function Home() {
 const attributes = [
    {
      id: 1,
      Icon: GiBiceps,
      name: "Força"
    },
    {
      id: 2,
      Icon: IoSpeedometerSharp,
      name: "Agilidade"
    },
    {
      id: 3,
      Icon: FaShieldHalved,
      name: "Vigor"
    },
    {
      id: 4,
      Icon: FaBrain,
      name: "Intelecto"
    },
    {
      id: 5,
      Icon: FaMasksTheater,
      name: "Presença"
    },
  ]

  return (
    <main className="bg-[#383838] w-screen h-screen gap-12 text-white flex flex-col items-center justify-center ">
      <div className="flex flex-col items-center gap-2">
        <GiDiceTwentyFacesTwenty size={80} />
        <h1 className="text-4xl">CRIADOR DE PERSONAGEM DE <i><strong> RPG</strong></i> - LEVEL 0</h1>
      </div>
      <section className="flex flex-col gap-8 text-xl">
        <div className="flex flex-row gap-2">
          <p>Nome: </p>
          <input maxLength={20} className="w-64 bg-transparent border-b outline-none" />
        </div>
        <div className="flex flex-row gap-2 ">
          <p>Classe:</p>
          <select name="classes" id="classe" className="bg-transparent border w-64 px-2 border-opacity-20 border-white rounded-md">
            <option value="Selecionar">Selecionar</option>
            <option value="Especialista">Especialista</option>
            <option value="Combatente">Combatente</option>
            <option value="Ocultista">Ocultista</option>
          </select>
        </div>
        <div className="w-[360px]">
          <p className="text-sm opacity-60">
            Selecione ao menos uma classe para ver a descrição dela
          </p>
        </div>
      </section>
      <div className="flex flex-row gap-10">
        {
          attributes.map((attribute) => <AttributeCounter attribute={attribute} />)
        }
      </div>
      <button className="bg-[#39A571] px-7 py-3 rounded-3xl">criar personagem</button>
    </main>
  )
}

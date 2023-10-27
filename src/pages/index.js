import { GiDiceTwentyFacesTwenty, GiBiceps } from "react-icons/gi"
import { IoSpeedometerSharp } from "react-icons/io5"
import { FaShieldHalved, FaBrain, FaMasksTheater, FaGithub } from "react-icons/fa6"
import AttributeCounter from "@/components/AttributeCounter";

export default function Home() {
 
  const attributes = [
    {
      id: 1,
      Icon: GiBiceps,
      name: "Força",
      description: "Esse atributo mede o quão forte o seu personagem vai ser. esse atributo vai ser usado pra testes como atletismo e luta."
    },
    {
      id: 2,
      Icon: IoSpeedometerSharp,
      name: "Agilidade",
      description: "Esse atributo mede o quão agil e veloz seu personagem vai ser. Esse atributo vai ser usado em testes como furtividade e iniciativa."
    },
    {
      id: 3,
      Icon: FaShieldHalved,
      name: "Vigor",
      description: "Esse atributo mede o quanto de porrada seu personagem vai aguentar. Esse atributo vai ser usado em testes de fortitude."
    },
    {
      id: 4,
      Icon: FaBrain,
      name: "Intelecto",
      description: "Esse atributo mede o quão espero seu personagem vai ser. esse atributo vai ser usado em testes de ocultismo e investigação."
    },
    {
      id: 5,
      Icon: FaMasksTheater,
      name: "Presença",
      description: "Esse atributo diz o quão apto ele esta mentalmente e o quão ligado com oque esta a volta dele. esse atributo vai ser usado em testes como vontade e percepção. "
    },
  ]

  const classes = [
    "Mundano",
    "Especialista",
    "Combatente",
    "Ocultista"
  ]

  return (
    <main className="bg-[#383838] w-screen h-screen gap-12 text-white flex flex-col items-center justify-center ">
      <div className="absolute right-4 top-3 flex gap-2">
        <FaGithub size={25} />
        <p><a href="https://github.com/BellaGalenoo" target="_blank ">github/BellaGalenoo</a></p>
      </div>
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
            {
              classes.map((classe) => <option value={classe}>{classe}</option>)
            }
          </select>
        </div>
        <div className="w-[360px] ">
          <p className="text-sm opacity-60">
            Selecione ao menos uma classe para ver a descrição dela
          </p>
        </div>
      </section>
      <div className="flex flex-col">
        <p>ATRIBUTOS</p>
        <div className="flex flex-row gap-10 bg-white/5 p-5 rounded-2xl">
          {
            attributes.map((attribute) => <AttributeCounter attribute={attribute} />)
          }
        </div>
      </div>
      <button className="bg-[#39A571] px-7 py-3 rounded-3xl">criar personagem</button>
    </main>
  )
}

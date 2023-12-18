import { GiDiceTwentyFacesTwenty, GiBiceps } from "react-icons/gi";
import { IoSpeedometerSharp } from "react-icons/io5";
import {
  FaShieldHalved,
  FaBrain,
  FaMasksTheater,
  FaGithub,
} from "react-icons/fa6";
import AttributeCounter from "@/components/AttributeCounter";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Home() {
  const [name, setName] = useState("");

  // Substanticos são coisas
  // Comum / Próprio
  // janela/cama/mesa/colher/coco/coco
  // São Vicente / Galeno / Praia Grande / Luana

  // // // variavel
  // const nomeDoCachorro = "cachorro"; // Variavel => Substantivo

  // // // Funções => Verbos
  // function mostrarNomeDoCachorro(nome) {
  //   return alert(nome);
  // }

  // eu preciso de algo que
  // OBSERVE o meu estado
  // para quando esse estado for igual a X coisa
  // dispare uma function, é como se eu CRIASSE o meu PROPRIO event!!!

  useEffect(() => {
    easterEgg(name);
  }, [name]);

  // useEffect((bosta nenhuma) => {
  //  sua logicazinha rs, ex: mostrarNomeDoCachorro("totó")
  // }, [oEstadoQueSeraObservado]);

  function easterEgg(value) {
    console.log("antes da transformação", value);

    // transforme o value em uma string de TODAS AS LETRAS MINUSCULAS
    // dica: Como transformar todas as letras de uma string em letra minuscula usando JS
    // aqui =>
    const lowercase = value.toLowerCase()

    console.log("depois da transformação", lowercase);

    if (lowercase === "senhor verissimo") {
      return toast("Olhos sempre abertos", {
        icon: "🫵",
      });
    }
  }

  const attributes = [
    {
      id: 1,
      Icon: GiBiceps,
      name: "Força",
      description:
        "Esse atributo mede o quão forte o seu personagem vai ser. esse atributo vai ser usado pra testes como atletismo e luta.",
    },
    {
      id: 2,
      Icon: IoSpeedometerSharp,
      name: "Agilidade",
      description:
        "Esse atributo mede o quão agil e veloz seu personagem vai ser. Esse atributo vai ser usado em testes como furtividade e iniciativa.",
    },
    {
      id: 3,
      Icon: FaShieldHalved,
      name: "Vigor",
      description:
        "Esse atributo mede o quanto de porrada seu personagem vai aguentar. Esse atributo vai ser usado em testes de fortitude.",
    },
    {
      id: 4,
      Icon: FaBrain,
      name: "Intelecto",
      description:
        "Esse atributo mede o quão espero seu personagem vai ser. esse atributo vai ser usado em testes de ocultismo e investigação.",
    },
    {
      id: 5,
      Icon: FaMasksTheater,
      name: "Presença",
      description:
        "Esse atributo diz o quão apto ele esta mentalmente e o quão ligado com oque esta a volta dele. esse atributo vai ser usado em testes como vontade e percepção. ",
    },
  ];

  const classes = ["Mundano", "Especialista", "Combatente", "Ocultista"];

  return (
    <main className="bg-[#383838] w-screen h-screen gap-12 text-white flex flex-col items-center justify-center ">
      <div className="absolute right-4 top-3 flex gap-2">
        <FaGithub size={25} />
        <p>
          <a href="https://github.com/BellaGalenoo" target="_blank ">
            github/BellaGalenoo
          </a>
        </p>
      </div>
      <div className="flex flex-col items-center gap-2">
        <GiDiceTwentyFacesTwenty size={70} />
        <h1 className="text-3xl">
          CRIADOR DE PERSONAGEM DE{" "}
          <i>
            <strong> RPG</strong>
          </i>{" "}
          - LEVEL 0
        </h1>
      </div>
      <section className="flex flex-col gap-3 text-xl">
        <div className="flex flex-row gap-2">
          <p>Nome: </p>
          <input
            value={name}
            maxLength={20}
            onChange={(event) => setName(event.target.value)}
            className="w-64 bg-transparent border-b outline-none"
          />
        </div>
        <div className="flex flex-row gap-2 ">
          <p>Classe:</p>
          <select
            name="classes"
            id="classe"
            className="bg-transparent border w-64 px-2 border-opacity-20 border-white rounded-md"
          >
            <option value="Selecionar">Selecionar</option>
            {classes.map((classe) => (
              <option value={classe}>{classe}</option>
            ))}
          </select>
        </div>
        <div className="w-[360px] ">
          <p className="text-sm opacity-60">
            Selecione ao menos uma classe para ver a descrição dela
          </p>
        </div>
      </section>
     
      <div className="flex flex-col gap-2 bg-white/5 p-4 rounded-2xl">
      <p>ATRIBUTOS</p>
      <div className="flex flex-row gap-10"> {attributes.map((attribute) => (
            <AttributeCounter attribute={attribute} />
          ))}</div>
        </div>  

        
      <button className="bg-[#39A571] px-7 py-3 rounded-3xl">
        criar personagem
      </button>
      <Toaster position="top-center" />
    </main>
  );
}

import AttributeCounter from "@/components/AttributeCounter";

export default function Home() {
  return (
    <main className="bg-[#383838] w-screen h-screen gap-12 text-white flex flex-col items-center justify-center ">
      <h1 className="text-4xl">CRIADOR DE PERSONAGEM DE <i><strong> RPG</strong></i> - LEVEL 0</h1>

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

      <div className="flex flex-row gap-10 ">
        <AttributeCounter />
        <AttributeCounter />
        <AttributeCounter />
        <AttributeCounter />
        <AttributeCounter />
      </div>

      <button className="bg-[#39A571] px-7 py-3 rounded-3xl">criar personagem</button>
    </main>
  )
}

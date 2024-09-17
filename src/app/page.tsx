import Image from "next/image";
import Navbar from "./components/Navbar/Navbar";
import Counter from "./components/Counter/Counter";
import { MsMadi } from "./components/Fonts";
import Heading from "./components/Heading/Heading";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center relative select-none">
      <video src={`${process.env.BASE_PATH}backdrop.mp4`} className="fixed opacity-50 h-[120vh]" autoPlay loop muted />
      <div className="absolute w-full flex flex-col items-center">
        <Navbar />
        <Counter 
          weddingDate="2025-07-27T17:00:00.000Z"
        />
        <div className="flex flex-col items-center gap-5 w-5/6 p-10 bg-zinc-200 text-green-950 rounded-lg">
          <h1 className={`text-6xl ${MsMadi.className}`}>Agata i Jakub</h1>
          <h2 className="text-4xl">Zapraszają na swój ślub</h2>
          <h2 className="text-6xl">27 lipca 2025 roku</h2>
          <Image src={`${process.env.BASE_PATH}couple.jpg`} width={400} height={400} className="rounded-2xl border border-[#b39727] border-4 mt-6" alt={"couple"} />
          <div className="mt-16 flex flex-col gap-2 max-w-[92ch]">
            <Heading>O ślubie</Heading>
            <div className="text-2xl flex flex-col items-center gap-4 mt-5">
              <p>Ceremonia odbędzie się w</p>
              <h3 className="text-3xl font-bold text-center">Rezydencja na Wzgórzu<br/>ul. Wazów 30/32, 93-435 Łódź</h3>
              <p>o godzinie</p>
              <h3 className="text-3xl font-bold"><b>17:00</b></h3>
              <p>następnie w tym samym miejscu odbędzie się przyjęcie weselne.</p>
            </div>
            <div>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

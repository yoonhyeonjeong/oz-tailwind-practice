import "./App.css";
import {contents} from "./assets/data/data";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
    return (
        <main>
            <Header />
            <section className="flex justify-center flex-wrap py-[20px] px-[40px] g-[20px]">
                {contents.map(el => (
                    <Content
                        key={el.id}
                        content={el}
                    />
                ))}
            </section>
        </main>
    );
}

export default App;

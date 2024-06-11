import s from './App.module.css'
import Services from './components/Services/Services'

function App() {
  return (
    <div className={s.app}>
      <div className={s.text}>
        <h1 className={s.title}>Сервис</h1>
        <h2 className={s.subTitle}>От идеи до незабываемого и измеримого результата.</h2>
        <div className={s.line}/>
        <p className={s.description}>Интеграция безупречного производства, передовых технологий и тщательного измерения производительности</p>
      </div>
      <Services/>
    </div>
  )
}

export default App

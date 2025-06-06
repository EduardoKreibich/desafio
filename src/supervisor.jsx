import supervisor from "./supervisor.jpg";

import Funcionario1 from "./funcionario1.jsx";
import Funcionario2 from "./funcionario2.jsx";

import { useState } from "react"

export default function Supervisor() {
  
    const [inputValue, setInputValue] = useState('')
    const [dailyTasks, setDailyTasks] = useState(0)
    const [completedTasks, setCompletedTasks] = useState(0)

    const [dailyTasksEmployee1, setDailyTasksEmployee1] = useState(0);
    const [dailyTasksEmployee2, setDailyTasksEmployee2] = useState(0);

  

    const handleReceiveTasks = () => {
      const value = parseInt(inputValue, 10)
      if(!isNaN(value) && value >= 0) {
          setDailyTasks(value)
          setCompletedTasks(0)
          setDailyTasksEmployee1(0)
          setDailyTasksEmployee2(0)
          setInputValue('')

      }else {
        alert("Por favor, inserir um valor válido.")
      }   
    };

    let goalStatus = ""

    if (completedTasks < dailyTasks) {
      goalStatus = "Não alcançada"

    } else if ((completedTasks === dailyTasks && completedTasks > 0) || completedTasks > dailyTasks ) {
      goalStatus = "Alcançada"
    }

  return (
    

    <div style={{ display: "flex" }}>
      <div
        style={{
          marginLeft: "4%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div>Supervisor</div>
        <img src={supervisor} alt=""></img>
        <input type="text" style={{ marginTop: 10, marginBottom: 10 }} value={inputValue} onChange={(e) => setInputValue(e.target.value)}></input>
        <button style={{ marginBottom: "10px" }} onClick={handleReceiveTasks}>Receber Atividade</button>
        <span>Atividades do Dia</span>
        <span style={{ fontWeight: "bold", fontSize: 50, textAlign: "center" }}>
          {dailyTasks}
        </span>

        <span>Atividades Concluídas</span>
        <span style={{ fontWeight: "bold", fontSize: 50, textAlign: "center" }}>
          {completedTasks}
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "row" }}>
        <Funcionario1 
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
          
          dailyTasks={dailyTasks}
          setDailyTasks={setDailyTasks}

          dailyTasksEmployee1={dailyTasksEmployee1}
          setDailyTasksEmployee1={setDailyTasksEmployee1}

          dailyTasksEmployee2={dailyTasksEmployee2}
          setDailyTasksEmployee2={setDailyTasksEmployee2}
        />
        <Funcionario2 
          completedTasks={completedTasks}
          setCompletedTasks={setCompletedTasks}
          
          dailyTasks={dailyTasks}
          setDailyTasks={setDailyTasks}

          dailyTasksEmployee1={dailyTasksEmployee1}
          setDailyTasksEmployee1={setDailyTasksEmployee1}

          dailyTasksEmployee2={dailyTasksEmployee2}
          setDailyTasksEmployee2={setDailyTasksEmployee2}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span
            style={{ fontWeight: "bold", fontSize: 30, textAlign: "center" }}
          >
            Meta do Dia
          </span>
          <span
            style={{ fontWeight: "bold", fontSize: 30, textAlign: "center" }}
          >{goalStatus}</span>
        </div>
      </div>
    </div>
  );
}

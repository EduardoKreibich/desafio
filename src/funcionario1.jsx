import iconeFuncionario1 from "./funcionario1.jpg";

export default function Funcionario1({
  completedTasks,
  setCompletedTasks,
  dailyTasks,
  setDailyTasks,
  dailyTasksEmployee1,
  setDailyTasksEmployee1,
  dailyTasksEmployee2
}) {
  
  const addTask = () => {
    if(dailyTasksEmployee1 + dailyTasksEmployee2 < dailyTasks){
      if(dailyTasks > 0 && dailyTasksEmployee1+1 <= dailyTasks){
        setDailyTasksEmployee1(value => value + 1)
      }
    }
  }

  const completeTask = () => {
    if(dailyTasksEmployee1 > 0 && dailyTasks > 0){
      setDailyTasksEmployee1(dailyTasksEmployee1 => dailyTasksEmployee1 - 1)
      setCompletedTasks(completedTasks => completedTasks + 1)
      setDailyTasks(dailyTasks => dailyTasks -1)
    }else if(dailyTasksEmployee1 === 0){
      alert("Não é possível concluir a atividade.")
    }
  }

  return (
    <div
      style={{
        marginLeft: "4%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div>Funcionario 1</div>
      <img src={iconeFuncionario1} alt=""></img>
      <button style={{ marginBottom: "10px" }} onClick={addTask}>Receber Atividade</button>
      <button onClick={completeTask}>Concluir Atividade</button>
      <span>Atividades Pendentes</span>
      <span style={{ fontWeight: "bold", fontSize: 50, textAlign: "center" }}>
        {dailyTasksEmployee1}
      </span>
    </div>
  );
}

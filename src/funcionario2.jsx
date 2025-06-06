import iconeFuncionario2 from "./funcionario2.jpg";

export default function Funcionario2({
  completedTasks, 
  setCompletedTasks, 
  dailyTasks, 
  setDailyTasks,
  dailyTasksEmployee1,
  dailyTasksEmployee2,
  setDailyTasksEmployee2
}) {

  const addTask = () => {
    if(dailyTasksEmployee1 + dailyTasksEmployee2 < dailyTasks){
      if(dailyTasks > 0 && dailyTasksEmployee2+1 <= dailyTasks){
        setDailyTasksEmployee2(value => value + 1)
      }
    }
  }

  const completeTask = () => {
    if(dailyTasksEmployee2 > 0 && dailyTasks > 0){
      setDailyTasksEmployee2(dailyTasksEmployee2 => dailyTasksEmployee2 - 1)
      setCompletedTasks(completedTasks => completedTasks + 1)
      setDailyTasks(dailyTasks => dailyTasks -1)
    }else if(dailyTasksEmployee2 === 0){
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
      <div>Funcionario 2</div>
      <img src={iconeFuncionario2} alt=""></img>
      <button style={{ marginBottom: "10px" }} onClick={addTask}>Receber Atividade</button>
      <button onClick={completeTask}>Concluir Atividade</button>
      <span>Atividades Pendentes</span>
      <span style={{ fontWeight: "bold", fontSize: 50, textAlign: "center" }}>
        {dailyTasksEmployee2}
      </span>
    </div>
  );
}

import UserInfo from "./userInfo/UserInfo";
import HandyManLocation from "./handymanlocation/HandyManLocation";
import Payment from "./payment/Payment";
import TaskDetails from "./taskDetails/TaskDetails";

//used in TasMannager in
export default function TaskCard({ task }) {
  return (
    <section className="flex flex-col border rounded-lg dark:bg-[#212121] border-[#80cbc4] dark:border-[#3D3D3D]">
      <UserInfo user={task.userInfo} />
      <HandyManLocation progress={task.progress} />
      <Payment info={task.payment} />
      <TaskDetails details={task.details} />
    </section>
  );
}

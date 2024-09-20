import AppSubHeader from "@/components/AppSubHeader";
import TodoCalendar from "@/components/Calendar/TodoCalendar";
import TodoWrapper from "@/components/TodoWrapper";
import { getAuthSession } from "@/lib/nextAuthOptions";
import { todoFetchRequest } from "@/requests/todoFetchRequest";

const Calendar = async () => {
  const session = await getAuthSession();
  const todos = await todoFetchRequest(session);

  return (
    <div className="h-[92.5%] sm:h-[95%] flex flex-col">
      <AppSubHeader title="Calendar" link="calendar" />
      <TodoWrapper todos={todos}>
        <TodoCalendar />
      </TodoWrapper>
    </div>
  );
};

export default Calendar;

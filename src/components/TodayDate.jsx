import "./TodayDate.css";

const TodayDate = () => {
  // 날짜 객체 생성
  let today = new Date();
  // console.log(today);

  // 연도
  let todayYear = `${today.getFullYear()}년`;
  // console.log(todayYear);

  // 월
  let todayMonth = `${today.getMonth() + 1}월`;
  // console.log(todayMonth);

  // 일
  let todayDay = `${today.getDate()}일`;
  // console.log(todayDay);

  // 연월일
  let todayDate = todayYear + " " + todayMonth + " " + todayDay;
  // console.log(todayDate);

  return (
    <div className="TodayDate">
      <p> {todayDate}</p>
    </div>
  );
};

export default TodayDate;

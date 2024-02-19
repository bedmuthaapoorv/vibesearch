import Components from "./Components";
export default function Home() {
  let components=new Components();
  return (
    <div>
      {/* {components.GetStarted()}  */}
      {/* {components.SignUp()} */}
      {components.GetOTP()}
    </div>
  );
}

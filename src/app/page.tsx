import Components from "./Components";
export default function Home() {
  let components=new Components();
  return (
    <div>
      {/* {components.GetStarted()}  */}
      {/* {components.SignUp()} */}
      {/* {components.GetOTP()} */}
      {/* {components.HomeScreen()} */}
      <components.Camera></components.Camera>
    </div>
  );
}

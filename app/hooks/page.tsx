import StateHook from "@/components/hooks/statehook";
import ReducerHook from "@/components/hooks/ReducerHook";
import MyUseEffect from "@/components/hooks/myuseeffect";
import MyUseRef from "@/components/hooks/UseRef";
import MyUseLayoutEffect from "@/components/hooks/UseLayoutEffect";
import ImperativeHandle from "@/components/hooks/ImperativeHandle";

const HooksPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <ReducerHook />
      <MyUseEffect />
      <MyUseRef />
      <MyUseLayoutEffect />
      <ImperativeHandle />
    </div>
  );
};

export default HooksPage;

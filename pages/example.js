import { Button } from "components/buttons";

const Example = () => {
    return(
        <>
        <Button basic={"orange"} click={()=> {console.log(1)}} size={"100px"}>Example</Button>
        </>
    );
}

export default Example;
import { Button } from "flowbite-react";

export default function ButtonComponent({ title, onClick }) {
  // const { handleCount, title } = props;
  //   console.log(props);
  return (
    <Button
      className="mt-5"
      onClick={() => onClick()}
      gradientDuoTone="purpleToBlue"
    >
      {title}
    </Button>
  );
}

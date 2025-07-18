interface IProps {
  text: string;
  color: string;
}
export default function Home(props: IProps) {
  return (
    <div
      style={{ backgroundColor: props.color }}
      className="h-screen relative  bg-gradient-to-r from-gray-500"
    >
      <div className="flex justify-center pt-48">
        <h1 className="text-6xl text-white">{props.text}</h1>
      </div>
    </div>
  );
}

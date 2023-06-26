import { useNavigate } from "react-router";

const PageA = () => {
  const nav = useNavigate();
  return (
    <div>
      {new Array(4).fill(0).map((_, i) => {
        return (
          <div
            className="test"
            onClick={() => {
              document.startTransition(() => nav(`/detail/${i}`));
            }}
            style={{ margin: 10, background: "red", width: 50, height: 50 }}
          >
            {i}
          </div>
        );
      })}
    </div>
  );
};
export default PageA;

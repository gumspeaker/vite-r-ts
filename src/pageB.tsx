import { useNavigate, useParams } from "react-router";
const PageB = () => {
  const { id } = useParams();
  const nav = useNavigate();
  return (
    <div
      onClick={() => {
        nav("/");
      }}
      className="test"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: 100,
          height: 100,
          background: "yellow",
          borderRadius: "10px",
        }}
      >
        this is {id}
      </div>
    </div>
  );
};
export default PageB;

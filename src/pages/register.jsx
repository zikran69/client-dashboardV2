import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div>
      <p>ini register</p>
      <button onClick={() => navigate("/")}>back</button>
    </div>
  );
}

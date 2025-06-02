import { useEffect } from "react";
import { useNavigate } from "react-router";
import About from "~/components/About";

export default function AnyRoute() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/");
  }, []);
  return <About />;
}

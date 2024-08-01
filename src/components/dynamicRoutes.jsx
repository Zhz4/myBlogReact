import routes from "@/router/index";
import { useRoutes } from "react-router-dom";
export default function DynamicRoutes() {
  const element = useRoutes(routes);
  return element;
};


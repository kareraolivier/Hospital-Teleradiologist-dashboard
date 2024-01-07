import { Link, NavLink } from "react-router-dom";
import { data } from "./data";
import { useAuth } from "../../middleware/Contexts";
import { Logout } from "../../utils/Icons/Logout";

const style = {
  title: "font-normal mx-4 text-sm",
  active: "flex gap-4 py-4 items-center font-semibold text-lg",
  inactive: "text-gray-600 flex gap-4 py-4 items-center",
  link: "flex items-center justify-start my-2 p-4 w-full",
};

export function SidebarItems() {
  const { logout, authUser } = useAuth();

  //getting role from auth user
  let role: string;
  {
    authUser !== null && (role = JSON.parse(authUser).role);
  }

  //filtering sidebar items according to roles of user who are logged in
  const items = [
    {
      ...data[0],
      content: data[0].content.filter((item) => item?.role.includes(role)),
    },
  ];
  return (
    <div>
      {items.map(({ section, content }) => (
        <ul className="py-4" key={section}>
          {content.map((item) => (
            <li key={item.id} className="mx-4 font-medium">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive ? `${style.active}` : `${style.inactive}`
                }
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/">
              <button className={style.link} onClick={logout}>
                <span>{<Logout />}</span>
                <span className={style.title}>Logout</span>
              </button>
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
}

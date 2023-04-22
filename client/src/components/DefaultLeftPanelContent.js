import ChatList from "./ChatList";
import WhatsappIcons from "../icons/WhatsappIcons";
import MyProfileDescription from "./MyProfileDescription";
import { setLeftPanelState } from "../redux/reducers/chatSlice";
import { LEFT_PANEL_STATES } from "../constants";
import { useDispatch } from "react-redux";
import DefaultLeftPanelOptionsMenu from "./DefaultLeftPanelOptionsMenu";

function DefaultLeftPanelContent() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex justify-between pr-[5px] pl-[20px] py-[15px] default-left-panel">
        <div
          onClick={() =>
            dispatch(setLeftPanelState(LEFT_PANEL_STATES.UPDATE_PROFILE))
          }
        >
          <MyProfileDescription />
        </div>
        <div className="options">
          <span
            onClick={() =>
              dispatch(setLeftPanelState(LEFT_PANEL_STATES.ADD_FRIEND))
            }
          >
            <WhatsappIcons
              type="add-friend"
              width="20"
              height="20"
              style={`mx-2 mt-[0.5em] text-[#54656F]`}
            />
          </span>
          <span
            onClick={() =>
              dispatch(setLeftPanelState(LEFT_PANEL_STATES.SHOW_BLOCKED_FRIENDS))
            }
          >
            <WhatsappIcons
              type="blocked-users"
              width="24"
              height="24"
              style={`mx-2 mt-[0.5em]`}
            />
          </span>
          <DefaultLeftPanelOptionsMenu />
        </div>
      </div>

      <div className="flex bg-white h-[50px] px-[10px] py-[8px]">
        <form className="w-full">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <WhatsappIcons
                type="search"
                width="24"
                height="24"
                style={`text-gray-500 dark:text-gray-400`}
              />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full text-[12px] p-4 pl-10 text-sm h-[20px] text-gray-900 rounded-lg bg-[#F0F2F5] focus:outline-none"
              placeholder="Search or start new chat"
              required
            />
          </div>
        </form>

        <WhatsappIcons type="filter" style={`ml-2 mt-0 text-[#54656F]`} />
      </div>

      <ChatList />
    </>
  );
}

export default DefaultLeftPanelContent;
